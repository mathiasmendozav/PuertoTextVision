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
    prices = request.form.get('prices')
    contacto = request.form.get('contacto')

    # Process the data as needed
    print(f'Campaign Target: {campaign_target}')
    print(f'Text Keywords: {text_keywords}')
    print(f'Contacto: {contacto}')
    if prices:
        print(f'Prices: {prices}')
    
    promptWithPrices = f"""Please write me three different options from each other for a text in spanish I'll use to publish an ad for Puerto Madero Urubó, a real estate company/urbanización that sells terrenos, generate the 3 different options, make sure you use parameters: campaign target, prices and text keywords for the head of the text (make emphasis on this), then make sure you place the specs of the project in the middle with space between top and bottom of text, at the very bottom of the text place the call to action part using the contact info parameter
Don't use bold text, make the text pretty and use emojis that would go along with the context of the text.
Campaign Target: {campaign_target}
Text Keywords: {text_keywords}
Prices: {prices}
Contact Info: {contacto}

Please return the 3 options separated so it's easier to iterate through them, don't return the parameters or any message just the responses inside the result.

Text Structure:

[Precios y Promocion con antes que texto]

🏨 Hotel Eco Resort 
🐴 Club Hípico 
🏇🏻 Club de Polo 
🏝️ Laguna Paisajista 
🏊🏻Club House
🛣️Calles Pavimentadas
💧⚡Servicios Básicos
💡Cableado subterráneo
🚴‍♂️ Ciclovías
🏢👷🏻‍♂️Proyectos Inmobiliarios
💻 Fibra óptica
[I want the specs from the options to be different from each other, but don't add information I'm not giving you, exclude the specs on one of the options just empty space]

[Llamada a la acción al final, hazlo llamativo incluyendo emojis para atraer al cliente]"""

    promptWithoutPrices = f"""Please write me three different options from each other for a text in spanish I'll use to publish an ad for Puerto Madero Urubó, a real estate company/urbanización that sells terrenos, generate the 3 different options, make sure you use parameters: campaign target and text keywords for the head of the text (make emphasis on this), then make sure you place the specs of the project in the middle with space between top and bottom of text, at the very bottom of the text place the call to action part using the contact info parameter
Don't use bold text, make the text pretty and use emojis that would go along with the context of the text.
Campaign Target: {campaign_target}
Text Keywords: {text_keywords}
Contact Info: {contacto}

Please return the 3 options separated so it's easier to iterate through them, don't return the parameters or any message just the responses inside the result.

Text Structure:

[Promocion con emojis antes que texto]

🏨 Hotel Eco Resort 
🐴 Club Hípico 
🏇🏻 Club de Polo 
🏝️ Laguna Paisajista 
🏊🏻Club House
🛣️Calles Pavimentadas
💧⚡Servicios Básicos
💡Cableado subterráneo
🚴‍♂️ Ciclovías
🏢👷🏻‍♂️Proyectos Inmobiliarios
💻 Fibra óptica
[I want the specs from the options to be different from each other, but don't add information I'm not giving you, exclude the specs on one of the options just empty space]

[Llamada a la acción al final, hazlo llamativo incluyendo emojis para atraer al cliente]"""

    if prices:
        prompt = promptWithPrices
    else:
        prompt = promptWithoutPrices
    
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
    
    result = extract_options(result)
    
    return result


if __name__  == '__main__':
    app.run(debug=True)