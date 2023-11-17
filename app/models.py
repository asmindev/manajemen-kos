from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Property(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float, nullable=False)
    # Add more fields as needed
