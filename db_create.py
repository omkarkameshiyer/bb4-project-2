from app import db
from models import Survey

#create the database and the db tables
db.create_all()
#insert
db.session.add(Survey("HuyTest",38,"Yes","Yes"))
#insert
db.session.commit()