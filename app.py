from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/o_nas')
def o_nas():
    return render_template('o_nas.html')

@app.route('/roach')
def roach():
    return render_template('roach.html')

@app.route('/easteregg')
def easteregg():
    return render_template('easteregg.html')

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(debug=True)


