#########################
# Helper Functions
#########################

# function to clean up response from text model
def extract_options(response_text):
    # Split the response into parts using "Option " as the delimiter
    options = response_text.split('Option ')[1:]  # Remove the part before "Option 1:"
    
    # Clean up each option by removing the text before the first newline
    cleaned_options = []
    for option in options:
        first_newline_index = option.find('\n')
        if first_newline_index != -1:
            cleaned_option = option[first_newline_index + 1:].strip()
            cleaned_options.append(cleaned_option)
    
    return cleaned_options

# function to check whether we got prices parameter or not
def get_prompt(campaign_target, text_keywords, contacto, prices):
    return f"""Please write me three different options from each other for a text in spanish I'll use to publish an ad for Puerto Madero Urubó, a real estate company/urbanización that sells terrenos, generate the 3 different options, make sure you use parameters: campaign target, {f'prices and' if prices is not None else ''} text keywords for the head of the text (make emphasis on this), then make sure you place the specs of the project in the middle with space between top and bottom of text, at the very bottom of the text place the call to action part using the contact info parameter
Don't use bold text, make the text pretty and use emojis that would go along with the context of the text.
Campaign Target: {campaign_target}
Text Keywords: {text_keywords}
{f'Prices: {prices}' if prices is not None else ''}
Contact Info: {contacto}

Please return the 3 options separated so it's easier to iterate through them, don't return the parameters or any message just the responses inside the result.

Text Structure:

[Explica Precios y Promocion con antes que texto, no quiero line breaks aqui, separa los specs abajo]


[I want the specs from the options to be different from each other, but don't add information I'm not giving you, skip this section on one of the options]
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


[Llamada a la acción al final, hazlo llamativo incluyendo emojis para atraer al cliente, no menciones precios aqui]"""