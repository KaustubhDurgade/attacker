from flask import Flask, render_template, request

app = Flask(__name__)

# Homepage
@app.route('/')
def home():
    return render_template('index.html')

# API endpoint to get the prize
@app.route('/prize')
def prize():
    return {"prize": "CTF{hidden_prize}"}

if __name__ == '__main__':
    app.run(debug=True)