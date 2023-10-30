from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def homepage():
    file="about9.jpg"
    return render_template("homepage.html",file=file)
@app.route("/where_to_invest")
def content1():
    file="about9.jpg"
    return render_template("content1.html",file=file)
@app.route("/where_to_start_business")
def content2():
    file="about9.jpg"
    return render_template("content2.html",file=file)
@app.route("/covid_impact")
def content3():
    file="about9.jpg"
    return render_template("content3.html",file=file)
@app.route("/dataset")
def dataset():
    file="about9.jpg"
    return render_template("dataset.html",file=file)

if __name__ == "__main__":
    app.run(debug = True, host = "0.0.0.0", port = 3000)