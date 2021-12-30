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
inp_dict = ("00","01","02","10","11","12","20","21","22")

def call_screen():
    print(box_0[0], box_0[1], box_0[2])
    print(box_1[0], box_1[1], box_1[2])
    print(box_2[0], box_2[1], box_2[2])
    print()

def clear():
    if name == 'nt':
        _ = system("cls")
    else:
        _ = system("clear")

def print_result():
    if count%2 != 0 and won == True:
        print("player 1 who chose 'O' wins...")
    elif count%2 == 0 and won == True:
        print("player 2 who chose 'X' wins...")
    else:
        print('Nobody wins...')

def use_input():
    if count%2 != 0:
        box[int(inp_dict[user-1][0])][int(inp_dict[user-1][1])] = "O"
    else:
        box[int(inp_dict[user-1][0])][int(inp_dict[user-1][1])] = "X"
    


while won == False:
    count += 1
    if count == 10:
        break
    clear()
    call_screen()
    print("WELCOME TO TIC TAC TOE")
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
    use_input()
    if (box_0[0] == box_0[1] == box_0[2] != ' ') or (box_1[0] == box_1[1] == box_1[2] != ' ') or (box_2[0] == box_2[1] == box_2[2] != ' ') or (box_0[0] == box_1[0] == box_2[0] != ' ') or (box_0[1] == box_1[1] == box_2[1] != ' ') or (box_0[2] == box_1[2] == box_2[2] != ' ') or (box_0[0] == box_1[1] == box_2[2] != ' ') or (box_0[2] == box_1[1] == box_2[0] != ' '):
        won = True
clear()
call_screen()
print_result()
sleep(10)