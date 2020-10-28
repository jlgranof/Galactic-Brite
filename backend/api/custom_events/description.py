from random import randint

def random_description():
    paragraphs = {
        1: [
        "A fighter that size couldn't get this deep into space on its own. Well, he ain't going to be around long enough to tell anyone about us. Look at him. He's headed for that small moon. I think I can get him before he gets there...he's almost in range. That's no moon! It's a space station. It's too big to be a space station. I have a very bad feeling about this. Yeah, I think your right. Full reverse! Chewie, lock in the auxiliary power. Why are we still moving towards it? We're caught in a tractor beam! It's pulling us in! But there's gotta be something you can do! There's nothin' I can do about it, kid. I'm in full power. I'm going to have to shut down. But they're not going to get me without a fight! You can't win. But there are alternatives to fighting.",
        "Yes. Our scout ships have reached Dantooine. They found the remains of a Rebel base, but they estimate that it has been deserted for some time. They are now conducting an extensive search of the surrounding systems. She lied! She lied to us! I told you she would never consciously betray the Rebellion. Terminate her...immediately!",
        "Luke! Luke! Luke! Luke! Luke, Luke, grab a hold of this. Blast it, will you! My gun's jammed. Where? Anywhere! Oh!! Luke! Luke! Grab him! What happened? I've got a very bad feeling about this. The walls are moving! Don't just stand there. Try to brace it with something. Wait a minute! Threepio! Come in Threepio! Threepio! Where could he be?",
        "Orbiting the planet at maximum velocity. The moon with the Rebel base will be in range in thirty minutes. This will be a day long remembered. It has seen the end of Kenobi and it will soon see the end of the Rebellion.",
        "They must be delivered safely or other star systems will suffer the same fate as Alderaan. Your destiny lies along a different path than mine. The Force will be with you...always! Boy you said it, Chewie. Where did you dig up that old fossil? Ben is a great man. Yeah, great at getting us into trouble. I didn't hear you give any ideas... Well, anything would be better than just hanging around waiting for him to pick us up... Who do you think...",
        "We count thirty Rebel ships, Lord Vader. But they're so small they're evading our turbo-lasers! We'll have to destroy them ship to ship. Get the crews to their fighters. Luke, let me know when you're going in. I'm on my way in now... Watch yourself! There's a lot of fire coming from the right side of that deflection tower. I'm on it. Squad leaders, we've picked up a new group of signals. Enemy fighters coming your way.",
        "Luke! Luke! Luke! Hey! Hey! I knew you'd come back! I just knew it! Well, I wasn't gonna let you get all the credit and take all the reward. Hey, I knew there was more to you than money. Oh, no! Oh, my! Artoo! Can you hear me? Say something! You can repair him, can't you? We'll get to work on him right away. You must repair him! Sir, if any of my circuits or gears will help, I'll gladly donate them. He'll be all right.",
        "Chewie! Get behind me! Get behind me! Can't get out that way. Looks like you managed to cut off our only escape route. Maybe you'd like it back in your cell, Your Highness. See-Threepio! See-Threepio! Yes sir? We've been cut off! Are there any other ways out of the cell bay?...What was that? I didn't copy! I said, all systems have been alerted to your presence, sir. The main entrance seems to be the only way in or out, all other information on your level is restricted.",
        "Run, Luke! Run!",
        "Take over! See to him! Look there! They're madmen! They're heading for the prison level. If you hurry, you might catch them. Follow me! You stand guard. Come on! Oh! All this excitement has overrun the circuits of my counterpart here. If you don't mind, I'd like to take him down to maintenance. All right.",
        "Did you find any droids? No, sir. If there were any on board, they must also have jettisoned. Send a scanning crew on board. I want every part of this ship checked. Yes, sir. I sense something...a presence I haven't felt since... Get me a scanning crew in here on the double. I want every part of this ship checked! Boy, it's lucky you had these compartments. I use them for smuggling. I never thought I'd be smuggling myself in them. This is ridiculous. Even if I could take off, I'd never get past the tractor beam.",
        "The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. It's a small thermal exhaust port, right below the main port. The shaft leads directly to the reactor system. A precise hit will start a chain reaction which should destroy the station. Only a precise hit will set up a chain reaction. The shaft is ray-shielded, so you'll have to use proton torpedoes. That's impossible, even for a computer. It's not impossible. I used to bull's-eye womp rats in my T-sixteen back home. They're not much bigger than two meters. Man your ships! And may the Force be with you!",
        "Learn about the Force, Luke. Look, I can take you as far as Anchorhead. You can get a transport there to Mos Eisley or wherever you're going. You must do what you feel is right, of course.",
        "And what of the Rebellion? If the Rebels have obtained a complete technical readout of this station, it is possible, however unlikely, that they might find a weakness and exploit it. The plans you refer to will soon be back in our hands. Any attack made by the Rebels against this station would be a useless gesture, no matter what technical data they've obtained. This station is now the ultimate power in the universe. I suggest we use it!",
        "I'm not going anywhere. They're going to execute her. Look, a few minutes ago you said you didn't want to just wait here to be captured. Now all you want to do is stay. Marching into the detention area is not what I had in mind. But they're going to kill her! Better her than me... She's rich. Rich? Yes. Rich, powerful! Listen, if you were to rescue her, the reward would be... What? Well more wealth that you can imagine. I don't know, I can imagine quite a bit! You'll get it! I better! You will...",
        "He says it's the best he can do. Since the XP-38 came out, they're just not in demand. It will be enough. If the ship's as fast as he's boasting, we ought to do well.",
        "He is here... Obi-Wan Kenobi! What makes you think so? A tremor in the Force. The last time I felt it was in the presence of my old master. Surely he must be dead by now. Don't underestimate the power of the Force. The Jedi are extinct, their fire has gone out of the universe. You, my friend, are all that's left of their religion. Yes. Governor Tarkin, we have an emergency alert in detention block A A-twenty-three. The princess! Put all sections on alert!",
        "What are you doing hiding there? It wasn't my fault, sir. Please don't deactivate me. I told him not to go, but he's faulty, malfunctioning, kept babbling on about his mission. Oh, no! That R2 unit has always been a problem. These astro-droids are getting quite out of hand. Even I can't understand their logic at times. How could I be so stupid? He's nowhere in sight. Blast it! Pardon me, sir, but couldn't we go after him? It's too dangerous with all the Sandpeople around. We'll have to wait until morning. Luke, I'm shutting the power down for the night. All right, I'll be there in a few minutes. Boy, am I gonna get it. You know that little droid is going to cause me a lot of trouble. Oh, he excels at that, sir.",
        "It looks like Sandpeople did this, all right. Look, here are Gaffi sticks, Bantha tracks. It's just...I never heard of them hitting anything this big before. They didn't. But we are meant to think they did. These tracks are side by side. Sandpeople always ride single file to hide there numbers. These are the same Jawas that sold us Artoo and Threepio. And these blast points, too accurate for Sandpeople. Only Imperial stormtroopers are so precise. Why would Imperial troops want to slaughter Jawas? If they traced the robots here, they may have learned who they sold them to. And that would lead them home! Wait, Luke! It's too dangerous. Uncle Owen! Aunt Beru! Uncle Owen!",
        "I can't see a thing in this helmet. This is not going to work. Why didn't you say so before? I did say so before! Where are you taking this...thing? Prisoner transfer from Block one-one-three-eight. I wasn't notified. I'll have to clear it. Look out! We've got to find out which cell this princess of yours is in. Here it is...cell twenty-one-eight-seven. You go get her. I'll hold them here. Everything is under control. Situation normal. What happened? Uh...had a slight weapons malfunction. But, uh, everything's perfectly all right now. We're fine. We're all fine here, now, thank you. How are you? We're sending a squad up. Uh, uh, negative. We had a reactor leak here now. Give us a few minutes to lock it down. Large leak...very dangerous. Who is this? What's your operating number? Boring conversation anyway. Luke! We're going to have company!",
        ],
        2: [
        "Sir, Commander Skywalker hasn't come in through the south entrance. He might have forgotten to check in. Not likely. Are the speeders ready? Not yet. We're having some trouble adapting them to the cold. Then we'll have to go out on Tauntauns. Sir, the temperature's dropping too rapidly. That's right. And my friends out in it. I'll cover sector twelve. Have com-control set screen alpha. Your Tauntaun'll freeze before you reach the first marker. Then I'll see you in hell!",
        "Feeling all right, sir? Just like new, Dack. How about you? Right now I feel I could take on the whole Empire myself. I know what you mean. Echo Station Three-T-Eight. We have spotted Imperial walkers! Imperial walkers on the north ridge. Echo station Five-Seven. We're on our way. All right, boys, keep tight now. Luke, I have no approach vector. I'm not set. Steady, Dack. Attack pattern delta. Go now! All right, I'm coming in. Hobbie, you still with me? That armor's too strong for blasters.",
        "I saw them! I saw them! Saw what? Star Destroyers, two of them, coming right at us. Sir, sir! Might I suggest... hut him up or shut him down! Check the deflector shield! Oh, great. Well, we can still outmaneuver them. Prepare to make the jump to light-speed. But, sir! They're getting closer! Oh yeah? Watch this. Watch what? I think we're in trouble. If I may say so, sir, I noticed earlier the hyperdrive motivator has been damaged. It's impossible to go to light-speed! We're in trouble!",
        "Princess...we have a visitor. We've picked up something outside the base in zone twelve, moving east. It's metal. Then it couldn't be one of those creatures that attacked Luke. It could be a speeder, one of ours. No. Wait - there's something very weak coming through. Sir, I am fluent in six million forms of communication. This signal is not used by the Alliance. It could be an Imperial code. It isn't friendly, whatever it is. Come on, Chewie, let's check it out. Send Rouges Ten and Eleven to station three-eight.",
        "You are beaten. It is useless to resist. Don't let yourself be destroyed as Obi-Wan did. There is no escape. Don't make me destroy you. You do not yet realize your importance. You have only begun to discover you power. Join me and I will complete your training. With our combined strength, we can end this destructive conflict and bring order to the galaxy. I'll never join you! If you only knew the power of the dark side. Obi-Wan never told you what happened to your father. He told me enough! He told me you killed him. No. I am your father. No. No. That's not true! That's impossible! Search your feelings. You know it to be true. No! No! No! Luke. You can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and we can rule the galaxy as father and son. Come with me. It's the only way.",
        "You said you wanted to be around when I made a mistake. well, this could be it, sweetheart. I take it back. We're going to get pulverized if we stay out here much longer. I'm not going to argue with that. Pulverized? I'm going in closer to one of the big ones. Closer? Closer?! h, this is suicide! There. That looks pretty good. What looks pretty good? Yeah. That'll do nicely. Excuse me, ma'am, but where are we going? I hope you know what you're doing. Yeah, me too.",
        "You must come along now, Artoo. There's really nothing more we can do. And my joints are freezing up. Don't say thing like that! Of course we'll see Master Luke again. He'll be quite all right, you'll see. Stupid little short-circuit. He'll be quite all right. Sir, all the patrols are in. There's still no contact from Skywalker or Solo. Mistress Leia, Artoo says he's been quite unable to pick up any signals, although he does admit that his own range is far too weak to abandon all hope. Your Highness, there's nothing more we can do tonight. The shield doors must be closed. Close the doors. Yes, sir.",
        "You all right? Why are you still here? I heard the command center had been hit. You got your clearance to leave. Don't worry. I'll leave. First I'm going to get you to your ship. Your Highness, we must take this last transport. It's our only hope. Send all troops in sector twelve to the south slope to protect the fighters. Imperial troops have entered the base. Come on...that's it. Give the evacuation code signal. And get to your transports! K-one-zero...all troops disengage. Oh! Wait for me! Begin retreat! Fall back!",
        "Ready for some power? Okay. Let's see now. Put that in there. There you go. Now all I have to do is find this Yoda...if he even exists. Still...there's something familiar about this place. I feel like...I don't know... Like we're being watched! Away with your weapon! I mean you no harm. I am wondering, why are you here? I'm looking for someone. Looking? Found someone, you have, I would say, hmmm? Right. Help you I can. Yes, mmmm. don't think so. I'm looking for a great warrior. Ahhh! A great warrior. Wars not make one great.",
        "Oh, thank goodness we're coming out of the asteroid field. Let's get out of here. Ready for light-speed? One...two...three! It's not fair! The transfer circuits are working. It's not my fault! No light-speed? It's not my fault. Sir, we just lost the main rear deflector shield. One more direct hit on the back quarter and we're done for. Turn her around. I said turn her around! I'm going to put all power in the front shield. You're going to attack them?! Sir, the odds of surviving a direct assault on an Imperial Star Destroyer... Shut up!",
        "You like me because I'm a scoundrel. There aren't enough scoundrels in your life. I happen to like nice men. I'm a nice man. No, you're not. You're... Sir, sir! I've isolated the reverse power flux coupling. Thank you. Thank you very much. Oh, you're perfectly welcome, sir.",
        "Well done. Hold them in the security tower - and keep it quiet. Move. What do you think you're doing? We're getting out of here. I knew all along it had to be a mistake. Do you think that after what you did to Han we're going to trust you? I had no choice... What are you doing? Trust him, trust him! Oh, so we understand, don't we, Chewie? He had no choice. I'm just trying to help... We don't need any of your help. H-a-a-a... What? It sounds like Han. There's still a chance to save Han...I mean, at the East Platform... Chewie. I'm terribly sorry about all this. After all, he's only a Wookiee.",
        "Run! Yes. A Jedi's strength flows from the Force. But beware of the dark side. Anger...fear...aggression. The dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan's apprentice. Vader. Is the dark side stronger? No...no...no. Quicker, easier, more seductive. But how am I to know the good side from the bad? You will know. When you are calm, at peace. Passive. A Jedi uses the Force for knowledge and defense, never for attack. But tell me why I can't... No, no, there is no why. Nothing more will I teach you today. Clear your mind of questions. Mmm. Mmmmmm.",
        "Luke...Luke. Ben? You will go to the Dagobah system. Dagobah system? There you will learn from Yoda, the Jedi Master who instructed me. Ben...Ben. Luke! Luke! Don't do this, Luke. Come on, give me a sign here. Not much time. Ben...Ben... Hang on, kid. Dagobah system... Whew... Dagobah... This may smell bad, kid... Yoda... but it will keep you warm...til I get the shelter built. Ooh...I thought they smelled bad on the outside!",
        "Groups seven and ten will stay behind to fly the speeders. As soon as each transport is loaded, evacuation control will give clearance for immediate launch. Right, sir. Okay, that's it. Try it...Off! Turn it off! Turn it off! Off! Sir, it will take quite awhile to evacuate the T-forty-sevens. Well, forget the heavy equipment. There's plenty of time to get the smaller modules on the transports. Take care, sir. Thanks. Chewie, take care of yourself, okay? Hi, kid. There's got to be a reason for it. Check it at the other end. Wait a second. You all right? Yeah. Be careful. You, too.Reroute all power to the energy shield. We've got to hold them till all transports are away. Prepare for ground assault.",
        "What is it, General? My lord, the fleet has moves out of light-speed. Com-Scan has detected an energy field protecting an area around the sixth planet of the Hoth system. The field is strong enough to deflect any bombardment. The Rebels are alerted to our presence. Admiral Ozzel came out of light-speed too close to the system. He felt surprise was wiser... He is as clumsy as he is stupid. General, prepare your troops for a surface attack. Yes, my lord.",
        "Artoo says the chances of survival are seven hundred seventy-five...to one. Actually, Artoo has been known to make mistakes...from time to time. Oh, dear, oh, dear. Don't worry about Master Luke. I'm sure he'll be all right. He's quite clever, you know...for a human being.",
        "Rouge Group, use your harpoons and tow cables. Go for the legs. It might be our only chance of stopping them. All right, stand by, Dack. Luke, we've got a malfunction in fire control. I'll have to cut in the auxiliary. ust hang on. Hang on, Dack. Get ready to fire that tow cable. Dack? Dack! Yes, Lord Vader. I've reached the main power generator. The shield will be down in moments. You may start your landing. Rouge Three. Copy, Rouge Leader Wedge, I've lost my gunner. You'll have to make this shot. I'll cover for you. Set your harpoon. Follow me on the next pass. oming around, Rouge Leader.",
        "Afraid there's not much left. What was it? Droid of some kind. I didn't hit it that hard. It must have had a self-destruct. An Imperial probe droid. It's a good bet the Empire knows we're here. We'd better start the evacuation.",
        "Use the Force. Yes... Now...the stone. Feel it. Concentrate! Oh, no. We'll never get it out now. So certain are you. Always with you it cannot be done. Hear you nothing that I say? Master, moving stones around is one thing. This is totally different. No! No different! Only different in your mind. You must unlearn what you have learned. All right, I'll give it a try. No! Try not. Do. Or do not. There is no try. I can't. It's too big. Size matters not. Look at me. Judge me by my size, do you? Hm? Mmmm. And well you should not. For my ally in the Force. And a powerful ally it is. Life creates it, makes it grow. It's energy surrounds us and binds us. Luminous beings are we... ..not this crude matter. You must feel the Force around you. Here, between you...me...the tree...the rock...everywhere! Yes, even between this land and that ship! You want the impossible.",
        ],
        3: [
        "Look. I want you to take her. I mean it. Take her. You need all the help you can get. She's the fastest ship in the fleet. All right, old buddy. You know, I know what she means to you. I'll take good care of her. She-she won't get a scratch. All right? Right. I got your promise now. Not a scratch. Look, would you get going, you pirate. Good luck. You, too.",
        "What is thy bidding, my Master? Send the fleet to the far side of Endor. There it will stay until called for. What of the reports of the Rebel fleet massing near Sullust? It is of no concern. Soon the Rebellion will be crushed and young Skywalker will be one of us! Your work here is finished, my friend. Go out to the command ship and await my orders. Yes, my Master.",
        "Oh, I told you it was dangerous here. Shall we try and go around? It'll take time. This whole party'll be for nothing if they see us. Chewie and I will take care of this. You stay here. Quietly, there might be more of them out there. Hey... it's me. Go for help! Go! Great. Come on. Over there! Two more of them! I see them. Wait, Leia! Quick! Jam their comlink. Center switch! Hey, wait! Ahhh! Move closer! Get alongside that one! Get him! Keep on that one! I'll take these two!",
        "I told you to remain on the command ship. A small Rebel force has penetrated the shield and landed on Endor. Yes, I know. My son is with them. Are you sure? I have felt him, my Master. Strange, that I have not. I wonder if your feelings on this matter are clear, Lord Vader. They are clear, my Master. Then you must go to the Sanctuary Moon and wait for them. He will come to me? I have foreseen it. His compassion for you will be his undoing. He will come to you andthen you will bring him before me. As you wish.",
        "Command station, this is ST 321. Code Clearance Blue. We're starting our approach. Deactivate the security shield. The security deflector shield will be deactivated when we have confirmation of your code transmission. Stand by... You are clear to proceed. We're starting our approach. Inform the commander that Lord Vader's shuttle has arrived. Yes, sir.",
        "The data brought to us by the Bothan spies pinpoints the exact location of the Emperor's new battle station. We also know that the weapon systems of this Death Star are not yet operational. With the Imperial Fleet spread throughout the galaxy in a vain effort to engage us, it is relatively unprotected. But most important of all, we've learned that the Emperor himself is personally overseeing the final stages of the construction of this Death Star. Many Bothans died to bring us this information. Admiral Ackbar, please.",
        "Hmm. That face you make. Look I so old to young eyes? No... of course not. I do, yes, I do! Sick have I become. Old and weak. When nine hundred years old you reach, look as good you will not. Hmm? Soon will I rest. Yes, forever sleep. Earned it, I have. Master Yoda, you can't die. Strong am I with the Force... but not that strong! Twilight is upon me and soon night must fall. That is the way of things... the way of the Force. But I need your help. I've come back to complete the training. No more training do you require. Already know you that which you need. Then I am a Jedi? Ohhh. Not yet. One thing remains: Vader. You must confront Vader. Then, only then, a Jedi will you be. And confront him you will.",
        "Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure. If I told you half the things I've heard about this Jabba the Hutt, you'd probably short-circuit. Artoo, are you sure this is the right place? I better knock, I suppose. There doesn't seem to be anyone there. Let's go back and tell Master Luke.",
        "Rise, my friend. The Death Star will be completed on schedule. You have done well, Lord Vader. And now I sense you wish to continue your search for young Skywalker. Yes, my Master. Patience, my friend. In time he will seek you out. And when he does, you must bring him before me. He has grown strong. Only together can we turn him to the dark side of the Force. As you wish. Everything is proceeding as I have foreseen.",
        "Master. Luke Skywalker, Jedi Knight. I told you not to admit him. I must be allowed to speak. He must be allowed to speak. You weak-minded fool! He's using an old Jedi mind trick. You will bring Captain Solo and the Wookiee to me. Your mind powers will not work on me, boy. Nevertheless, I'm taking Captain Solo and his friends. You can either profit by this... or be destroyed! It's your choice. But I warn you not to underestimate my powers. Master Luke, you're standing on... There will be no bargain, young Jedi. I shall enjoy watching you die. Bascka! Oh, no! The Rancor!",
        "I can't do it, Artoo. I can't go on alone. Yoda will always be with you. Obi-Wan! Why didn't you tell me? You told me Vader betrayed and murdered my father. You father was seduced by the dark side of the Force. He ceased to be Anakin Skywalker and became Darth Vader. When that happened, the good man who was your father was destroyed. So what I have told you was true... from a certain point of view. A certain point of view! Luke, you're going to find that many of the truths we cling to depend greatly on our own point of view.",
        "Nice work. Great, Chewie! Great! Always thinking with your stomach. Will you take it easy? Let's just figure out a way to get out of this thing. Han, can you reach my lightsaber? Yeah, sure. Artoo, I'm not sure that's such a good idea. It's a very long dro-o-op!! Wha--? Hey! Point that thing someplace else. Hey! Han, don't. It'll be all right. Chewie, give 'em your crossbow. Oh, my head. Oh, my goodness! Do you understand anything they're saying? Oh, yes, Master Luke! Remember that I am fluent in over six million forms of communication. What are you telling them? Hello, I think... I could be mistaken. They're using a very primitive dialect. But I do believe they think I am some sort of god.",
        "Good luck. You're gonna need it. General Madine. We have stolen a small Imperial shuttle. Disguised as a cargo ship, and using a secret Imperial code, a strike team will land on the moon and deactivate the shield generator. Sounds dangerous. I wonder who they found to pull that off. General Solo, is your strike team assembled? Uh, my team's ready. I don't have a command crew for the shuttle. Rawwwrr! Well, it's gonna be rough, pal. I didn't want to speak for you. That's one. Uh, General... count me in. I'm with you, too! What is it? Ask me again sometime. Luke. Hi, Han... Chewie. Exciting is hardly the word I would use.",
        "Anakin was a good friend. When I first knew him, your father was already a great pilot. But I was amazed how strongly the Force was with him. I took it upon myself to train him as a Jedi. I thought that I could instruct him just as well as Yoda. I was wrong. There's still good in him. He is more machine now than man. Twisted and evil. I can't do it, Ben. You cannot escape your destiny. I can't kill my own father. Then the Emperor has already won. You were our only hope. Yoda spoke of another. The other he spoke of is your twin sister. But I have no sister. To protect you both from the Emperor, you were hidden from your father when you were born.",
        "Easy, Chewie. Whoa! Whoa! Help! Chewie, you okay? Where is he? I'm okay, pal. Han! Chewie? Lando! Boba Fett?! Boba Fett?! Where? Lando, grab it! Lower it! I'm trying! Whoa! Whoa! Grab me, Chewie! I'm slipping. Grab it! L--Lando. Grab! Grab it! Almost... You almost got it! Hold it! Whoa! Gently now. All... all right. Now easy, easy. Hold me, Chewie. Chewie! Chewie, give me the gun. Don't move, Lando. No, wait! I thought you were blind! It's all right. Trust me. Don't move. All right! A little higher! Just a little higher! Chewie, Pull us up! Come on! Okay... up, Chewie, up!",
        "Luke, help me take this mask off. But you'll die. Nothing can stop that now. Just for once... let me look on you with my own eyes. Now...go, my son. Leave me. No. You're coming with me. I can't leave you here. I've got to save you. You already have, Luke. You were right about me. Tell your sister...you were right. Father...I won't leave you. There it is! All right, Wedge. Go for the power regulator on the north tower. Copy, Gold Leader. I'm already on my way out. Move the fleet away from the Death Star.",
        "Yes, Artoo. I was just coming to that. What's going on? I don't know. Wonderful! We are now a part of the tribe. Just what I always wanted. Well, short help is better than no help at all, Chewie. Thank you. Okay. He says the scouts are going to show us the quickest way to the shield generator. Good. How far is it? Ask him. We need some fresh supplies, too. And try and get our weapons back. And hurry up, will ya? I haven't got all day.",
        "All wings report in. Red Leader standing by. Gray Leader standing by. Green Leader standing by. Lock S-foils in attack positions. May the Force be with us. We've got to be able to get some kind of a reading on that shield, up or down. Well, how could they be jamming us if they don't know if we're coming. Break off the attack! The shield is still up. I get no reading. Are you sure? Pull up! All craft pull up! Take evasive action! Green Group, stick close to holding sector MV-7. Admiral, we have enemy ships in sector 47.",
        "Welcome, young Skywalker. I have been expecting you. You no longer need those. Guards, leave us. I'm looking forward to completing your training. In time you will call me Master. You're gravely mistaken. You won't convert me as you did my father. Oh, no, my young Jedi. You will find that it is you who are mistaken...about a great many things. His lightsaber. Ah, yes, a Jedi's weapon. Much like your father's. By now you must know your father can never be turned from the dark side. So will it be with you. You're wrong. Soon I'll be dead...and you with me.",
        "I have a really bad feeling about this. What did he say? I'm rather embarrassed, General Solo, but it appears you are to be the main course at a banquet in my honor. Leia! Oh! Your Royal Highness. But these are my friends. Threepio, tell them they must be set free. Somehow, I got the feeling that didn't help us very much. Threepio, tell them if they don't do as you wish, you'll become angry and use your magic. But Master Luke, what magic? I couldn't possibly -- Just tell them. You see, Master Luke they didn't believe me. Just as I said they wouldn't. Wha-wha-what's happening! Oh! Oh, dear! Oh! Put me down! He-e-elp! Master Luke! Artoo! Somebody, somebody, help! Master Luke, Artoo! Artoo, quickly! Do something, somebody! Oh! Ohhh! Oh, oh, oh, oh! Thank goodness. Thanks, Threepio. I...I never knew I had it in me.",
        ]
    }
    paragraph_number = randint(3,6)

    description = {}
    description["description"] = paragraphs[randint(1,3)][randint(0,19)]
    description["details_1"] = paragraphs[randint(1,3)][randint(0,19)]
    description["details_2"] = paragraphs[randint(1,3)][randint(0,19)]

    if paragraph_number > 3:
        description["details_3"] = paragraphs[randint(1,3)][randint(0,19)]
    if paragraph_number > 4:
        description["details_4"] = paragraphs[randint(1,3)][randint(0,19)]
    if paragraph_number > 5:
        description["details_5"] = paragraphs[randint(1,3)][randint(0,19)]

    return description