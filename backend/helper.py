import re

def extract_options(response_text):
    # Find the part of the string within square brackets
    list_match = re.search(r'\[(.*?)\]', response_text)
    
    if not list_match:
        return []
    
    # Extract the string inside the brackets
    list_string = list_match.group(1)
    
    # Remove extra spaces and split by comma, while stripping surrounding quotes
    options = [option.strip().strip('"') for option in list_string.split('","')]
    
    # Handle the case where the list starts or ends with a quote
    if options:
        if options[0].startswith('"'):
            options[0] = options[0][1:]
        if options[-1].endswith('"'):
            options[-1] = options[-1][:-1]
    
    return options