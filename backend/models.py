from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
  __tablename__ = 'users'

  id = db.Column(db.Integer, primary_key = True)
  username = db.Column(db.String(40), nullable = False, unique = True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  avatar_url = db.Column(db.String(255))
  hashed_password = db.Column(db.String(100))

  events = db.relationship("Event", back_populates="user")
  bookmarked_events = db.relationship("BookmarkedEvent", back_populates="user")

  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email
    }


class Category(db.Model):
  __tablename__ = 'categories'

  id = db.Column(db.Integer, primary_key = True)
  type = db.Column(db.String(40), unique = True, nullable = False)

  events = db.relationship("Event", back_populates="category")


class Event(db.Model):
  __tablename__ = 'events'

  id = db.Column(db.Integer, primary_key = True)
  name = db.Column(db.String(100), nullable = False)
  event_description = db.Column(db.String(5000), nullable = False)
  host_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  event_date = db.Column(db.String(100), nullable = False)
  event_planet = db.Column(db.String(50), nullable = False)
  event_picture_url = db.Column(db.String(1000))
  category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable = False)
  is_featured = db.Column(db.Boolean, nullable = False)

  user = db.relationship("User", back_populates="events")
  category = db.relationship("Category", back_populates="events")
  bookmarked_events = db.relationship("BookmarkedEvent", back_populates="event")

class BookmarkedEvent(db.Model):
  __tablename__ = 'bookmarked_events'

  id = db.Column(db.Integer, primary_key = True)
  event_id = db.Column(db.Integer, db.ForeignKey("events.id"), nullable = False)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable = False)
  is_registered = db.Column(db.Boolean, default = False)

  event = db.relationship("Event", back_populates="bookmarked_events")
  user = db.relationship("User", back_populates="bookmarked_events")
