# app/data/seed_data.py

from app.models import Property, db
from app import app
import sys


def seed_data():
    with app.app_context():
        properties = [
            {
                "room_number": "101",
                "name": "Cozy Apartment",
                "description": "A comfortable apartment with great views",
                "price": 1200,
                "status": "Available",
                "image_url": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "facilities": "WiFi, Parking",  # Comma-separated string
            },
            {
                "room_number": "202",
                "name": "Modern Condo",
                "description": "A stylish condo in the heart of the city",
                "price": 1800,
                "status": "Available",
                "image_url": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "facilities": "Gym, Swimming Pool",  # Comma-separated string
            },
            {
                "room_number": "303",
                "name": "Spacious House",
                "description": "A large house with a beautiful garden",
                "price": 2500,
                "status": "Rented",
                "image_url": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "facilities": "Fireplace, Garage",  # Comma-separated string
            },
            {
                "room_number": "404",
                "name": "Luxury Penthouse",
                "description": "An extravagant penthouse with panoramic views",
                "price": 5000,
                "status": "Available",
                "image_url": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "facilities": "Private Elevator, Concierge",  # Comma-separated string
            },
            {
                "room_number": "505",
                "name": "Charming Cottage",
                "description": "A quaint cottage in a peaceful countryside",
                "price": 800,
                "status": "Available",
                "image_url": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "facilities": "Fire Pit, Garden",  # Comma-separated string
            },
            {
                "room_number": "606",
                "name": "Downtown Loft",
                "description": "A trendy loft in the city center",
                "price": 1600,
                "status": "Rented",
                "image_url": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "facilities": "High Ceilings, Balcony",  # Comma-separated string
            },
            {
                "room_number": "707",
                "name": "Lakefront Villa",
                "description": "A beautiful villa by the lake",
                "price": 3000,
                "status": "Available",
                "image_url": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "facilities": "Boat Dock, Outdoor Dining",  # Comma-separated string
            },
            {
                "room_number": "808",
                "name": "Mountain Retreat",
                "description": "A cozy retreat nestled in the mountains",
                "price": 1200,
                "status": "Available",
                "image_url": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "facilities": "Hiking Trails, Hot Tub",  # Comma-separated string
            },
            {
                "room_number": "909",
                "name": "Beachfront Bungalow",
                "description": "A charming bungalow with ocean views",
                "price": 2000,
                "status": "Rented",
                "image_url": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "facilities": "Beach Access, BBQ Area",  # Comma-separated string
            },
            {
                "room_number": "1010",
                "name": "Urban Studio",
                "description": "A compact studio in the urban jungle",
                "price": 1000,
                "status": "Available",
                "image_url": "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "facilities": "Public Transit Nearby, Laundry",  # Comma-separated string
            },
        ]
        property_entries = [Property(**property_data) for property_data in properties]

        db.session.add_all(property_entries)

        db.session.commit()


def clear_data():
    with app.app_context():
        db.drop_all()

if __name__ == "__main__":
    try:
        if sys.argv[1] == "del":
            clear_data()
    except:
        seed_data()