# Main Flask App Backend will go here...
from flask import Flask
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
        "meta/meta-llama-3.1-405b-instruct",
        input=input
    )
    result = "".join(output)
    
    return result
    #=> "Tina has one brother and one sister. From the brother's ...

if __name__  == '__main__':
    app.run(debug=True)