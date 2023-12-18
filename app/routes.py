# adel
# app/routes.py

import os
from flask import Flask, request, jsonify
from app.models import db, Property
from flask_migrate import Migrate

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = (
    os.environ.get("DATABASE_URI") or "mysql://root:@localhost/property_db"
)
app.config.from_object("config.config")
db.init_app(app)
migrate = Migrate(app, db)


# Route to get list of properties
@app.route("/api/properties", methods=["GET"])
def get_properties():
    properties = Property.query.all()
    property_list = [
        {
            "id": prop.id,
            "name": prop.name,
            "price": prop.price,
            "number": prop.room_number,
            "image": prop.image_url,
            "description": prop.description,
            "status": prop.status,
            "facilities": [i.strip() for i in prop.facilities.split(",")],
        }
        for prop in properties
    ]
    return jsonify(property_list)


# Route to get details of a property
@app.route("/api/properties/<int:property_id>", methods=["GET"])
def get_property(property_id):
    property = Property.query.get(property_id)
    if property:
        property_data = {
            "id": property.id,
            "name": property.name,
            "price": property.price,
            "number": property.room_number,
            "image": property.image_url,
            "description": property.description,
            "status": property.status,
            "facilities": [i.strip() for i in property.facilities.split(",")],
        }
        return jsonify(property_data)
    return jsonify({"message": "Property not found"}), 404


# Add more routes and business logic as needed