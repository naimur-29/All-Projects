from os import system, name
from time import sleep

box_0 = [" ", " ", " "]
box_1 = [" ", " ", " "]
box_2 = [" ", " ", " "]
box = [box_0, box_1, box_2]
count = 0
user = 0
won = False
inputs = list()
welcome = "WELCOME TO TIC TAC TOE\nPRESS ENTER TO START"
inp_dict = ("00","01","02","10","11","12","20","21","22")

def call_screen():
    clear()
    print(" ", box_0[0], "|", box_0[1], "|", box_0[2])
    print(" -----------")
    print(" ", box_1[0], "|", box_1[1], "|", box_1[2])
    print(" -----------")
    print(" ", box_2[0], "|", box_2[1], "|", box_2[2])
    print()

def call_screen_animted():
    clear()
    print(" ", box_0[0], "|", box_0[1], "|", box_0[2])
    sleep(0.01)
    print(" -----------")
    sleep(0.01)
    print(" ", box_1[0], "|", box_1[1], "|", box_1[2])
    sleep(0.01)
    print(" -----------")
    sleep(0.01)
    print(" ", box_2[0], "|", box_2[1], "|", box_2[2])
    sleep(0.01)
    print()
    sleep(0.01)

def clear():
    if name == 'nt':
        _ = system("cls")
    else:
        _ = system("clear")

def print_result_multi():
    if count%2 != 0 and won == True:
        winner = "PLAYER 1 WHO CHOSE 'O' IS THE WINNER!!"
    elif count%2 == 0 and won == True:
        winner = "PLAYER 2 WHO CHOSE 'X' IS THE WINNER"
    else:
        winner = "UNFORTUNATELY IT'S A DRAW"
    for i in range(len(winner)+1):
        print(winner[0:i])
        if i == len(winner):
            sleep(0.5)
            call_screen_animted()
            print(winner)
        else:
            sleep(0.05)
            clear()

def print_result_single():
    if count%2 != 0 and won == True:
        winner = "BOT WHO CHOSE 'O' IS THE WINNER!!"
    elif count%2 == 0 and won == True:
        winner = "PLAYER 2 WHO CHOSE 'X' IS THE WINNER"
    else:
        winner = "UNFORTUNATELY IT'S A DRAW"
    for i in range(len(winner)+1):
        print(winner[0:i])
        if i == len(winner):
            sleep(0.5)
            call_screen_animted()
            print(winner)
        else:
            sleep(0.001)
            clear()

def use_input():
    if user not in inputs:
        if count%2 != 0:
            box[int(inp_dict[user-1][0])][int(inp_dict[user-1][1])] = "O"
        else:
            box[int(inp_dict[user-1][0])][int(inp_dict[user-1][1])] = "X"
        inputs.append(user)

def t2Bot1(inp):
    if inp == 4 or inp == 8:
        if inp == 4:
            return 9
        else:
            return 1
    elif inp == 1 or inp == 9:
        if inp == 1:
            return 9
        else:
            return 1
    elif inp == 2 or inp == 6:
        if inp == 2:
            return 1
        else:
            return 9
    elif inp == 5:
        return 3
    else:
        return 9

def t2Bot2(inp):
    if inputs[len(inputs)-3] == 4 or inputs[len(inputs)-3] == 8:
        if inp == 4 or inp == 8:
            return 3
        else:
            if inputs[len(inputs)-2] == 9:
                return 8
            else:
                return 4
    elif inputs[len(inputs)-3] == 1 or inputs[len(inputs)-3] == 9:
        if inp == 4 or inp == 8:
            if inp == 8 and inputs[len(inputs)-3] == 9:
                return 4
            else:
                return 3
        else:
            if inputs[len(inputs)-3] == 1:
                return 8
            else:
                return 4
    elif inputs[len(inputs)-3] == 2 or inputs[len(inputs)-3] == 6:
        if inp == 4 or inp == 8:
            if inputs[len(inputs)-2] == 1:
                if inp == 4:
                    return 9
                else:
                    return 4
            else:
                if inp == 4:
                    return 8
                else:
                    return 1
        else:
            if inputs[len(inputs)-2] == 9:
                return 8
            else:
                return 4
    elif inputs[len(inputs)-3] == 5:
        if inp == 1 or inp == 9:
            if inp == 1:
                return 9
            else:
                return 1
        else:
            if inp == 2:
                return 8
            elif inp == 4:
                return 6
            elif inp == 6:
                return 4
            else:
                return 2
    else:
        if inp == 8:
            return 1
        else:
            return 8

def t2Bot3(inp):
    if inputs[len(inputs)-5] == 4 or inputs[len(inputs)-5] == 8:
        if inp == 5 or inp == 6:
            if inp == 5:
                return 6
            else:
                return 5
        else:
            return 5
    elif inputs[len(inputs)-5] == 1 or inputs[len(inputs)-5] == 9:
        if inp == 5 or inp == 6:
            if inp == 5:
                return 6
            else:
                return 5
        else:
            return 5
    elif inputs[len(inputs)-5] == 2 or inputs[len(inputs)-5] == 6:
        if inp == 5 or inp == 8:
            if inp == 5:
                return 8
            else:
                return 5
        else:
            return 5
    elif inputs[len(inputs)-5] == 5:
        if inputs[len(inputs)-6] == 1:
            if inp == 2:
                return 4
            else:
                return 2
        elif inputs[len(inputs)-6] == 9:
            if inp == 6:
                return 8
            else:
                return 6
        else:
            if inputs[len(inputs)-5] == 2:
                if inp == 4:
                    return 6
                elif inp == 9:
                    return 1
                elif inp == 1:
                    return 9
                else:
                    return 4
            if inputs[len(inputs)-5] == 4:
                if inp == 2:
                    return 8
                elif inp == 9:
                    return 1
                elif inp == 1:
                    return 9
                else:
                    return 2
            if inputs[len(inputs)-5] == 6:
                if inp == 2:
                    return 8
                elif inp == 9:
                    return 1
                elif inp == 1:
                    return 9
                else:
                    return 2
            else:
                if inp == 4:
                    return 6
                elif inp == 9:
                    return 1
                elif inp == 1:
                    return 9
                else:
                    return 4
    else:
        if inputs[len(inputs)-3] == 8:
            return 4
        else:
            return 8

def t2Bot4(inp):
    if inp == 2:
        return 8
    elif inp == 4:
        return 6
    elif inp == 6:
        return 4
    elif inp == 8:
        return 2
    elif inp == 1:
        return 9
    else:
        return 1

# def t2Bot4():
#     for i in range(1, 10):
#         if i not in inputs:
#             return i
  
            

replay = ''
while replay == '':
    box_0 = [" ", " ", " "]
    box_1 = [" ", " ", " "]
    box_2 = [" ", " ", " "]
    box = [box_0, box_1, box_2]
    inputs.clear()
    count = 0
    user = 0
    won = False
    clear()
    for i in range(len(welcome)+1):
        print(welcome[0:i])
        if i == len(welcome):
            sleep(1)
            initiate = input()
        else:
            sleep(0.05)
        clear()
    if initiate != '':
        break
    call_screen_animted()
    gameMode = input("[S] - SINGLE PLAYER MODE\n[M] - MULTI-PLAYER MODE\n")
    while 1 == 1:
        if gameMode == 's' or gameMode == 'S':
            game_mode = "SINGLE PLAYER MODE\nBOT VS PLAYER"
            for i in range(len(game_mode)+1):
                print(game_mode[0:i])
                if i == len(game_mode):
                    sleep(0.5)
                else:
                    sleep(0.05)
                clear()
            while won == False:
                count += 1
                if count == 10:
                    break
                call_screen()
                if count == 1:
                    user = 7
                    use_input()
                    call_screen()
                elif count == 3:
                    user = t2Bot1(user)
                    use_input()
                    call_screen()
                elif count == 5:
                    user = t2Bot2(user)
                    use_input()
                    call_screen()
                elif count == 7:
                    user = t2Bot3(user)
                    use_input()
                    call_screen()
                elif count == 9:
                    user = t2Bot4(user)
                    use_input()
                    call_screen()
            
                if (box_0[0] == box_0[1] == box_0[2] != ' ') or (box_1[0] == box_1[1] == box_1[2] != ' ') or (box_2[0] == box_2[1] == box_2[2] != ' ') or (box_0[0] == box_1[0] == box_2[0] != ' ') or (box_0[1] == box_1[1] == box_2[1] != ' ') or (box_0[2] == box_1[2] == box_2[2] != ' ') or (box_0[0] == box_1[1] == box_2[2] != ' ') or (box_0[2] == box_1[1] == box_2[0] != ' '):
                    won = True
                    break
                count += 1
                if count == 10:
                    break
                
                while 1 == 1:
                    try:
                        user = int(input("Enter the position (1 - 9): "))
                        while 1 == 1:
                            if user <= 0 or user > 9:
                                user = int(input("Wrong position...\nEnter the correct position: "))
                            else:
                                if user not in inputs:
                                    break
                                else:
                                    user = int(input("Wrong position...\nEnter the correct position: "))
                        inputs.append(user)
                        break
                    except:
                        print("Wrong position...")
                if count%2 != 0:
                    box[int(inp_dict[user-1][0])][int(inp_dict[user-1][1])] = "O"
                else:
                    box[int(inp_dict[user-1][0])][int(inp_dict[user-1][1])] = "X"
                if (box_0[0] == box_0[1] == box_0[2] != ' ') or (box_1[0] == box_1[1] == box_1[2] != ' ') or (box_2[0] == box_2[1] == box_2[2] != ' ') or (box_0[0] == box_1[0] == box_2[0] != ' ') or (box_0[1] == box_1[1] == box_2[1] != ' ') or (box_0[2] == box_1[2] == box_2[2] != ' ') or (box_0[0] == box_1[1] == box_2[2] != ' ') or (box_0[2] == box_1[1] == box_2[0] != ' '):
                    won = True
            print_result_single()
            sleep(0.001)
            break
        elif gameMode == 'M' or gameMode == 'm':
            game_mode = "MULTI-PLAYER MODE\nPLAYER 1 VS PLAYER 2"
            for i in range(len(game_mode)+1):
                print(game_mode[0:i])
                if i == len(game_mode):
                    sleep(0.5)
                else:
                    sleep(0.05)
                clear()
            while won == False:
                count += 1
                if count == 10:
                    break
                call_screen()
                while 1 == 1:
                    try:
                        user = int(input("Enter the position (1 - 9): "))
                        while 1 == 1:
                            if user <= 0 or user > 9:
                                user = int(input("Wrong position...\nEnter the correct position: "))
                            else:
                                if user not in inputs:
                                    break
                                else:
                                    user = int(input("Wrong position...\nEnter the correct position: "))
                        break
                    except:
                        print("Wrong position...")
                use_input()
                if (box_0[0] == box_0[1] == box_0[2] != ' ') or (box_1[0] == box_1[1] == box_1[2] != ' ') or (box_2[0] == box_2[1] == box_2[2] != ' ') or (box_0[0] == box_1[0] == box_2[0] != ' ') or (box_0[1] == box_1[1] == box_2[1] != ' ') or (box_0[2] == box_1[2] == box_2[2] != ' ') or (box_0[0] == box_1[1] == box_2[2] != ' ') or (box_0[2] == box_1[1] == box_2[0] != ' '):
                    won = True
            print_result_multi()
            sleep(0.001)
            break
        else:
            gameMode = input("PLEASE ENTER THE CORRECT VALUE: ")
    replay = input("PRESS ENTER TO REPLAY\n")