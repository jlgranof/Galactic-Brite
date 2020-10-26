from random import randint

def random_date():
    hour = randint(0,23)
    minutes = randint(0,59)
    month = get_month()
    day = get_day(month)
    year = randint(1,250)
    era = get_era()

    if minutes > 9:
        return f"{month} {day}, {year}{era} @ {hour}:{minutes}"
    else:
        return f"{month} {day}, {year}{era} @ {hour}:0{minutes}"


def get_month():
    number = randint(1,12)

    if number == 1:
        return 'January'
    elif number == 2:
        return 'February'
    elif number == 3:
        return 'March'
    elif number == 4:
        return 'April'
    elif number == 5:
        return 'May'
    elif number == 6:
        return 'June'
    elif number == 7:
        return 'July'
    elif number == 8:
        return 'August'
    elif number == 9:
        return 'September'
    elif number == 10:
        return 'October'
    elif number == 11:
        return 'November'
    else:
        return 'December'

def get_day(month):
    if month == 'February':
        return randint(1,28)
    elif month == 'January' or month == 'March' or month == 'May' or month == 'July' or month == 'August' or month == 'October' or month == 'December':
        return randint(1,31)
    else:
        return randint(1,30)

def get_era():
    era = randint(1,2)
    if era == 1:
        return 'BBY'
    else:
        return 'ABY'



