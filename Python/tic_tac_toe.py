box_0 = list([11, 22, 33])
box_1 = list([44, 55, 66])
box_2 = list([77, 88, 99])
count = 0

while 1 != 0:
    try:
        player_1 = int(input("player_1 choose between 0 or 1: "))
        if player_1 == 0:
            player_2 = 1
            print()
            print("player_1 represents 0")
            print("player_2 represents 1\n")
            break
        elif player_1 == 1:
            player_2 = 0
            print()
            print("player_1 represents 1")
            print("player_2 represents 0\n")
            break
        else:
            print("player_1 you must input 0 or 1 dumb...")
    except:
        print("You must input an intiger dumb...")

bbox = list([box_0, box_1, box_2])

print("enter the possition number to claim...")
print(box_0)
print(box_1)
print(box_2)
print()

while 1 != 0:
    if count >= 9:
        print("\nlosers!! losers!!")
        break

    # player_1
    inp = int(input("player_1\n"))
    while 1 != 0:
        try:
            if (inp == (player_1 or player_2)) or ((inp not in box_0) and (inp not in box_1) and (inp not in box_2)):
                inp = int(input("dumb_player_1\n"))
            else:
                if inp in box_0:
                    bbox[0][box_0.index(inp)] = player_1
                if inp in box_1:
                    bbox[1][box_1.index(inp)] = player_1
                if inp in box_2:
                    bbox[2][box_2.index(inp)] = player_1
                break
        except:
            print("You must input the possition no. dumb...")

    print()
    print(box_0)
    print(box_1)
    print(box_2)
    print()

    if (bbox[0][0] == bbox[0][1] == bbox[0][2]) or (bbox[1][0] == bbox[1][1] == bbox[1][2]) or (bbox[2][0] == bbox[2][1] == bbox[2][2]) or (bbox[0][0] == bbox[1][0] == bbox[2][0]) or (bbox[0][1] == bbox[1][1] == bbox[2][1]) or (bbox[0][2] == bbox[1][2] == bbox[2][2]) or (bbox[0][0] == bbox[1][1] == bbox[2][2]) or (bbox[0][2] == bbox[1][1] == bbox[2][0]):
        print("player_1 wins\ndumb player_2... loser...")
        break

    count += 1
    if count >= 9:
        print("\nlosers!! losers!!")
        break

    # player_2
    inp = int(input("player_2\n"))
    while 1 != 0:
        try:
            if (inp == (player_1 or player_2)) or ((inp not in box_0) and (inp not in box_1) and (inp not in box_2)):
                inp = int(input("dumb_player_2\n"))
            else:
                if inp in box_0:
                    bbox[0][box_0.index(inp)] = player_2
                if inp in box_1:
                    bbox[1][box_1.index(inp)] = player_2
                if inp in box_2:
                    bbox[2][box_2.index(inp)] = player_2
                break
        except:
            print("You must input the possition no. dumb...")

    print()
    print(box_0)
    print(box_1)
    print(box_2)
    print()

    if (bbox[0][0] == bbox[0][1] == bbox[0][2]) or (bbox[1][0] == bbox[1][1] == bbox[1][2]) or (bbox[2][0] == bbox[2][1] == bbox[2][2]) or (bbox[0][0] == bbox[1][0] == bbox[2][0]) or (bbox[0][1] == bbox[1][1] == bbox[2][1]) or (bbox[0][2] == bbox[1][2] == bbox[2][2]) or (bbox[0][0] == bbox[1][1] == bbox[2][2]) or (bbox[0][2] == bbox[1][1] == bbox[2][0]):
        print("player_2 wins\ndumb player_1... loser...")
        break

    count += 1
