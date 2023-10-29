from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def w209():
    return render_template("homepage.html")
@app.route("/content1")
def content1():
    return render_template("content1.html")
@app.route("/content2")
def content2():
    return render_template("content2.html")
@app.route("/content3")
def content3():
    return render_template("content3.html")
@app.route("/dataset")
def dataset():
    return render_template("dataset.html")
if __name__== '__main__':
    app.run()
