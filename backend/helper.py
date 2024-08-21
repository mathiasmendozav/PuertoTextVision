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