##########################
# Main Flask App Backend
##########################
from flask import Flask, request, send_from_directory # type: ignore
from flask_cors import cross_origin # type: ignore
from dotenv import load_dotenv # type: ignore
import os
import replicate # type: ignore
from helper import *

# Initialize Flask app
app = Flask(__name__)

# Getting frontend folder dist
frontend_folder = os.path.join(os.getcwd(),'..','frontend')
dist_folder = os.path.join(frontend_folder,'dist')

# Load Env Variables
load_dotenv()

# Get the API key for Llama3.1
api_key = os.getenv("REPLICATE_API_TOKEN")

############
# Routes
############

# server static files from the dist folder under the frontend directory
@app.route('/', defaults={'filename':''})
@app.route('/<path:filename>')
def index(filename):
    if not filename:
        filename = 'index.html'
    return send_from_directory(dist_folder, filename)
    
@app.route('/submit', methods=['POST'])
@app.route("/api/v1/users/", methods=['GET'])
@cross_origin(origin='*', methods=['GET', 'HEAD', 'POST', 'OPTIONS', 'PUT'], 
             headers=['Content-Type'], supports_credentials=True)
def submit_form():
    campaign_target = request.form.get('campaignTarget')
    text_keywords = request.form.get('textKeywords')
    prices = request.form.get('prices') or None
    contacto = request.form.get('contacto')

    # Process the data as needed
    print(f'Campaign Target: {campaign_target}')
    print(f'Text Keywords: {text_keywords}')
    print(f'Contacto: {contacto}')
    print(f'Prices: {prices}')
    
    prompt = get_prompt(campaign_target, text_keywords, contacto, prices)
    
    input = {
        "prompt": prompt,
        "system_prompt": "You are a helpful assistant",
        "temperature": 0.7,
        "length_penalty": 1,
        "max_new_tokens": 2000,
        "min_new_tokens": 800,
        "max_tokens": 2000,
        "min_tokens": 800
    }

    output = replicate.run(
        "meta/meta-llama-3-8b-instruct",
        input=input
    )
    result = "".join(output)
    print(result)
    
    try:
        result = extract_options(result)
    
    finally:
        return result

if __name__  == '__main__':
    app.run(port=os.getenv('PORT'))