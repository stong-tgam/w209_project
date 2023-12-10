from flask import Flask, render_template, send_from_directory
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello():
    return render_template('index.html')

@app.route('/get_image/<path:image_filename>')
def get_image(image_filename):
    image = send_from_directory('static', image_filename)
    print(image)
    return image

if __name__ == "__main__":
    #DEBUG ONLY: app.run(debug = True, host = "0.0.0.0", port = 3000)
    app.run()
    #app.run(debug = True, host = "0.0.0.0", port = 3000)
