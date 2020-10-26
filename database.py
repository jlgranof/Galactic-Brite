from dotenv import load_dotenv
load_dotenv()

from backend import app, db
from backend.models import User, Category, Event

with app.app_context():
  db.drop_all()
  db.create_all()

  demo = User(username = 'Jar Jar', email = 'therealsithleader@gungan.com', avatar_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThQUnhWZqYrbaRtrvH6uUJxiF64UMXBWO3XQ&usqp=CAU')
  ian = User(username = 'Ian', email = 'ian@aa.io')
  javier = User(username = 'Javier', email = 'javier@aa.io')
  dean = User(username = 'Dean', email = 'dean@aa.io')
  angela = User(username = 'Angela', email = 'angela@aa.io')
  soonmi = User(username = 'Soon-Mi', email = 'soonmi@aa.io')
  alissa = User(username = 'Alissa', email = 'alissa@aa.io')
  palpatine = User(username = 'The Senate', email = 'darthsidious@sith.com', avatar_url = 'https://pm1.narvii.com/6989/837a8e36313c4a026a2f5acb9fe0a9f255d93a92r1-1080-1920v2_hq.jpg')
  anakin = User(username = 'Anakin Skywalker', email = 'darthvader@sith.com', avatar_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_sDERiegE5BSNiwpioOjCt5ndx89W1t4XNw&usqp=CAU')
  jabba = User(username = 'Jabba the Hutt', email = 'jabba@hutt.com', avatar_url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Jabba_the_Hutt.jpg/498px-Jabba_the_Hutt.jpg')
  tarkin = User(username = 'Govenor Tarkin', email = 'tarkin@deathstar.com', avatar_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ633qJmSKAVdZul4oWR-f9wB6US_N_bHee2g&usqp=CAU')
  dooku = User(username = 'Count Dooku', email = 'darthtyranus@sith.com', avatar_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQALITa_iwn6z77Xr6RMHDJG-0l8pvFYI--tA&usqp=CAU')
  boba = User(username = 'Boba Fett', email = 'boba@clones.com', avatar_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTYj2Rw2Crz24sNcXZ9v9KfnlEZupa_ZdmMKQ&usqp=CAU')
  han = User(username = 'Han Solo', email = 'scruffynerfherder@smugglers.com', avatar_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS9TwNUBH0EbzmUt6OWZ4XhjIsiIQ84jf3tg&usqp=CAU')
  luke = User(username = 'Luke Skywalker', email = 'sluke@jediacademy.com', avatar_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSczQtK1E0AgyUchH_Ov7hj5xHnQr69LT7O2g&usqp=CAU')

  party = Category(type = 'Surprise Party')
  production = Category(type = 'Live Productions')
  exectution = Category(type = 'Live Executions')
  sport = Category(type = 'Sports')
  tour = Category(type = 'Tours')
  launch = Category(type = 'Product Launches')
  seminar = Category(type = 'Seminars')

  order_66 = Event(name = 'Order 66', event_description = 'Enjoy a fun night at the Jedi Temple! We will all meet outside on the front steps, and then go in and surprise all the younglings!', host_id = 9, event_date = 'May 27, 19BBY @ 21:00', event_planet = 'Corusant', event_picture_url = 'https://i.ytimg.com/vi/lBbQg8r8tdc/maxresdefault.jpg', category_id =  1, is_featured = True)


  db.session.add(demo)
  db.session.add(ian)
  db.session.add(javier)
  db.session.add(dean)
  db.session.add(angela)
  db.session.add(soonmi)
  db.session.add(alissa)
  db.session.add(palpatine)
  db.session.add(anakin)
  db.session.add(jabba)
  db.session.add(tarkin)
  db.session.add(dooku)
  db.session.add(boba)
  db.session.add(han)
  db.session.add(luke)
  db.session.add(party)
  db.session.add(production)
  db.session.add(exectution)
  db.session.add(sport)
  db.session.add(tour)
  db.session.add(launch)
  db.session.add(seminar)
  db.session.add(order_66)

  db.session.commit()
