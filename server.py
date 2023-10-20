import os

from flask import Flask, render_template

app = Flask(__name__)
app.template_folder = "templates"


@app.route("/")
@app.route("/home")
def index():
    return render_template("index.html")


@app.route("/login")
def login():
    return render_template("login.html")


@app.route("/registration")
def registration():
    return render_template("registration.html")


def main():
    port = int(os.environ.get("PORT", 8080))
    app.run(host='127.0.0.1', port=port, debug=True)


if __name__ == "__main__":
    main()
