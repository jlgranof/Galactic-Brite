from random import randint

def random_species():
    species = [
        'Human',
        'Droid',
        'Wookie',
        'Rodian',
        'Hutt',
        'Yoda\'s species',
        'Trandoshan',
        'Mon Calamari',
        'Ewok',
        'Sullustan',
        'Neimodian',
        'Gungan',
        'Toydarian',
        'Dug',
        'Twi\'lek',
        'Aleena',
        'Vulptereen',
        'Xexto',
        'Toong',
        'Cerean',
        'Nautolan',
        'Zabrak',
        'Tholothian',
        'Iktotchi',
        'Quermian',
        'Kel Dor',
        'Chagrian',
        'Geonosian',
        'Mirialan',
        'Clawdite',
        'Besalisk',
        'Kaminoan',
        'Skakoan',
        'Muun',
        'Togruta',
        'Kaleesh'
    ]

    return species[randint(1,len(species)-1)]
