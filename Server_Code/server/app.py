from flask import Flask, jsonify
import config.app_config
from controllers.user_controller import user_blueprint
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from flask_session import Session

app = Flask(__name__)
CORS(app)
Session(app)

# Initialize JWT
app.config['JWT_SECRET_KEY'] = config.app_config.Config.JWT_SECRET_KEY
jwt = JWTManager(app)


@app.route('/') 
def hello_world():
    return jsonify({'message': 'Automatic Ration Distribution System Server!'})

app.register_blueprint(user_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
