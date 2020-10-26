from dotenv import load_dotenv
load_dotenv()
from werkzeug.security import generate_password_hash

from backend import app, db
from backend.models import User, Category, Event

with app.app_context():
  db.drop_all()
  db.create_all()

  demo = User(username = 'Jar Jar', email = 'therealsithleader@gungan.com', avatar_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThQUnhWZqYrbaRtrvH6uUJxiF64UMXBWO3XQ&usqp=CAU', hashed_password = generate_password_hash("password"))
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

  order_66 = Event(name = 'Order 66', event_description = 'Enjoy a fun night at the Jedi Temple! We will all meet outside on the front steps, and then go in and surprise all the younglings!', host_id = 3, event_date = 'May 27, 19BBY @ 21:00', event_planet = 'Corusant', event_picture_url = 'https://i.ytimg.com/vi/lBbQg8r8tdc/maxresdefault.jpg', category_id =  1, is_featured = True)
  podrace = Event(name = 'Boonta Eve Podrace', event_description = 'This is the biggest podrace of the year! Held in and around the Grand Arena in Mos Epa, this is bound to be a race you will not want to miss! Sebabulba is once again gavored to win the race. **Upgrade your ticket to sit with the Tuskan Raiders and try to shoot down the Racers!**', host_id = 4, event_date = '15:00 hours, June 12, 32BBY', event_planet = 'Tatooine', event_picture_url = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fd13ezvd6yrslxm.cloudfront.net%2Fwp%2Fwp-content%2Fimages%2FZZ59224E93.jpg&imgrefurl=https%3A%2F%2Fwww.slashfilm.com%2Fanakin-skywalker-force-awakens-reference%2F&tbnid=fF6ziWwiNn6UiM&vet=12ahUKEwiahdzeidHsAhXti60KHbiEAlMQMygAegUIARC0AQ..i&docid=RV49GyddZ105RM&w=3840&h=1632&q=anakin%20podracing&ved=2ahUKEwiahdzeidHsAhXti60KHbiEAlMQMygAegUIARC0AQ', category_id = 4, is_featured = True)
  death_star = Event(name = 'Death Star Unvieling', event_description = 'Take a trip to the lovely planet of Alderaan, located in the Core Worlds. This planet has many famous people including the Orengas. You will get a front row introduction to the Empires new luxury cruise ship, called the Death Star. It is a state of the art cruise liner that will travel all over the galaxy under control of the great captain Govenor Tarkin.', host_id = 5, event_date = '0:00 hours January 1, 0BBY', event_planet = 'Alderaan', event_picture_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFhGRKvL6ZzQAaN-goNpxqwbulV6VFQ1Or1g&usqp=CAU', category_id = 6, is_featured = True)
  geonosis_execution = Event(name = 'Republic Leaders Execution', event_description = 'The evil Senator Amidala and the Jedis Skywalker and Kenobi have been caught!!!!! Their executions have been schedule to be held in the Petranaki Arena. Buy tickets to this execution. 3 high ranking Republic members! Once in a lifetime event!', host_id = 6, event_date = '17:00 hours, June 22, 19BBY', event_planet = 'Geonosis', event_picture_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSELfkGG_qoGhokNwcwmwSMR5ThNkXXM5iLyA&usqp=CAU', category_id = 3, is_featured = True)
  carbonite = Event(name = 'Carbonite Museum Grand Opening', event_description = 'Come to Cloud City in Bespin for the Grand Opening of the Carbonite Museum! For one night only, our main attraction is the notorious smuggler Han Solo.', host_id = 7, event_date = '20:00 hours, August 12, 3ABY', event_planet = 'Bespin', event_picture_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqMzZ4SePebMG1Ff1VM2LVSC_mMCdG_FnVTR6G2eHidEV0RmeGX3Tn8sQpdQ&usqp=CAc', category_id = 5, is_featured = True)
  darth_plagueis = Event(name = 'Squid Lake by the Mon Calamari Ballet at Coruscant Opera House', event_description = 'In the beautiful Uscru District, lies the Wonderful Galaxies Opera House. The Galaxy renound Mon Calamarin Ballet is putting on a production of Squid Lake. If you have never seen a ballet, this is the one to attend! **Upgrade your tickets to sit in the box with Chancellor Palpentine. Who knows, maybe you will learn things the Jedi can\'t teach you!**', host_id = 2, event_date = '21:00 hours, February 1 19BBY', event_planet = 'Corusant', event_picture_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWqj-k_7il4cl1r1vfVfACzbntLKR9NEGVcA&usqp=CAU', category_id = 2, is_featured = True)
  event = Event(name = '', event_description = '', host_id = 0, event_date = '', event_planet = '', event_picture_url = '', category_id = 0, is_featured = True)


  db.session.add(demo)
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
  db.session.add(podrace)
  db.session.add(death_star)
  db.session.add(geonosis_execution)
  db.session.add(carbonite)
  db.session.add(darth_plagueis)

  db.session.commit()
