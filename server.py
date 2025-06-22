from flask import Flask, request, jsonify
import subprocess
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow frontend JS to call this API

@app.route("/run", methods=["POST"])
def run_pipeline():
    data = request.get_json()
    program = data.get("program")
    average = str(data.get("average"))

    if not program or not average:
        return jsonify({"error": "Missing program or average."}), 400

    try:
        result = subprocess.check_output(["python", "BackEnd/uni_pipeline.py", program, average], text=True)
        json_start = result.rfind('{')
        clean = result[json_start:] if json_start != -1 else result
        return jsonify({"output": clean})    
    except subprocess.CalledProcessError as e:
        return jsonify({"error": e.output}), 500

if __name__ == "__main__":
    app.run(debug=True)
