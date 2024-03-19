# config.py
import os

class Config:
    DEBUG = True  # Set to False in production
    # MongoDB Database Details
    MONGO_DBNAME = 'ration_distribution'
    MONGO_URI = 'mongodb+srv://ration:amrit123456789@rationdistribution.0l1d8yh.mongodb.net/ration_distribution?retryWrites=true&w=majority'
    JWT_SECRET_KEY = 'ciZWCvvoTCu4KxpbXl0suGMETT8hWCzkwXRmc260YmAsGSLFg6'



