def generate_room_code():
    """
    This function generates a unique code for the room.
    """
    length = 6

    while True:
        code = "".join(random.choices(string.ascii_uppercase, k=length))
        if Room.objects.filter(code=code).count() == 0:
            break

    return code
