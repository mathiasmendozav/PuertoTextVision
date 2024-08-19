# Main Flask App Backend will go here...
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import replicate

# Initialize Flask app
app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# Load Env Variables
load_dotenv()

# Get the API key for Llama3.1
api_key = os.getenv("REPLICATE_API_TOKEN")

print(f'My api key is: {api_key}')

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
    prices = request.form.get('prices')

    # Process the data as needed
    print(f'Campaign Target: {campaign_target}')
    print(f'Text Keywords: {text_keywords}')
    print(f'Prices: {prices}')
    
    prompt = f"""Please write me three different options for my text I'll use to publish an ad for Puerto Madero Urubó, a real estate company/urbanización that sells terrenos, given the following structure for the options, use the provided parameters to generate the 3 different options, make sure you use parameters: campaign target, text keywords and prices for the head of the text, then make sure you place the specs of the project in the middle with space between top and bottom of text, after that at the very bottom of the text the call to action part  using the contact info parameter
Don't use bold text and use the emojis as provided, make the text pretty and use emojis that would go along with the context of the text.
Campaign Target: {campaign_target}
Text Keywords: {text_keywords}
Prices: {prices}
Contact Info: https://walink.co/607ea3

Please return the 3 options inside a json list, don't return the parameters.

Text Structure:

[Promocion y precios]

🏨 Hotel Eco Resort 
🐴 Club Hípico 
🏇🏻 Club de Polo 
🏝️ Laguna Paisajista 
🏊🏻Club House
🛣️Calles Pavimentadas
💧⚡Servicios Básicos
🏢👷🏻‍♂️Proyectos Inmobiliarios
[You can edit the specs section to have variations if you want, but don't modify too much these emojis]

[Call to action ending]"""
    
    input = {
        "prompt": prompt,
        "system_prompt": "You are a helpful assistant",
        "temperature": 0.7,
        "length_penalty": 1,
        "max_new_tokens": 1000,
        "min_new_tokens": 500,
        "max_tokens": 1000,
        "min_tokens": 500
    }

    output = replicate.run(
        "meta/meta-llama-3-8b-instruct",
        input=input
    )
    result = "".join(output)
    
    return result


if __name__  == '__main__':
    app.run(debug=True)