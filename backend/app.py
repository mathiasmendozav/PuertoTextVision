# Main Flask App Backend will go here...
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import replicate
from helper import *

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Load Env Variables
load_dotenv()

# Get the API key for Llama3.1
api_key = os.getenv("REPLICATE_API_TOKEN")

# Routes
@app.route('/')
def home():
    input = {
        "prompt": "Tina has one brother and one sister. How many sisters do Tina's siblings have?",
        "max_tokens": 1024
    }

    output = replicate.run(
        "meta/meta-llama-3-8b-instruct",
        input=input
    )
    result = "".join(output)
    
    return result
    #=> "Tina has one brother and one sister. From the brother's ...
    
@app.route('/submit', methods=['POST'])
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
    app.run(debug=True)