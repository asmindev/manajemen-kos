import os


class Config:
    SQLALCHEMY_DATABASE_URI = (
        os.environ.get("DATABASE_URI") or "mysql://rot:@localhost/property_db"
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = "adzakost"
