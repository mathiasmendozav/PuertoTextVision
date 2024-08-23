from app import app
import os

if __name__ == "__main__":
    app.run(port=os.getenv('PORT'))

# Gunicorn and WSGI (Web Server Gateway Interface) are both components used in deploying and serving Python web applications, particularly those built with web frameworks like Flask and Django.