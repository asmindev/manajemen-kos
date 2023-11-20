# app/data/seed_data.py

from app.models import Property, db
from app import app


def seed_data():
    with app.app_context():
        properties = [
            {
                "name": "Cozy Apartment",
                "price": 1200.0,
            },
            {
                "name": "Lux Villa",
                "price": 5000.0,
            },
            {
                "name": "Modern Studio",
                "price": 800.0,
            },
            {
                "name": "Charming Cottage",
                "price": 1500.0,
            },
            {
                "name": "Beachfront House",
                "price": 3000.0,
            },
            {
                "name": "Ski Chalet",
                "price": 2500.0,
            },
            {
                "name": "City Penthouse",
                "price": 6000.0,
            },
            {
                "name": "Rustic Cabin",
                "price": 1000.0,
            },
            {
                "name": "Historic Mansion",
                "price": 7000.0,
            },
            {
                "name": "Treehouse Retreat",
                "price": 1200.0,
            },
        ]

        for property_data in properties:
            property_entry = Property(**property_data)
            db.session.add(property_entry)

        db.session.commit()


def clear_data():
    with app.app_context():
        db.drop_all()


if __name__ == "__main__":
    seed_data()
