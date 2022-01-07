import random
from os import name, system
from time import sleep

matrix = [
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ']
]
elements = ['.', '.', '.', 'O']

def clear():
    if name == 'nt':
        _ = system('cls')
    else:
        _ = system('clear')

def append(a, b):
    if [a, b] not in pass_list and (a>=0 and b>=0):
        pass_list.append([a, b])

def devil(a, b):
    try:
        if matrix[a-1][b] == 'O':
            c, d = a-1, b
            append(c, d)
        if matrix[a+1][b] == 'O':
            c, d = a+1, b
            append(c, d)
        if matrix[a][b-1] == 'O':
            c, d = a, b-1
            append(c, d)
        if matrix[a][b+1] == 'O':
            c, d = a, b+1
            append(c, d)
    except:
        pass


while 1 == 1:
    for i in matrix:
        for j in range(len(i)):
            i[j] = random.choice(elements)

    clear()
    for i in matrix:
        for j in i:
            print(j, end=' ')
        print()
    print()
    sleep(1)
    pass_list = list()

    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if i == 0 or i == 5 or j == 0 or j == 5:
                if matrix[i][j] == 'O':
                    append(i, j)
                    devil(i, j)

    for count in range(len(matrix)):
        for a, b in pass_list:
            devil(a, b)

    for i in range(len(matrix)):
        for j in range(len(matrix[i])):
            if [i, j] not in pass_list and matrix[i][j] == 'O':
                matrix[i][j] = '.'
                clear()
                for m in matrix:
                    for n in m:
                        print(n, end=' ')
                    print()
                print()
                sleep(0.1)
    print("cleaning complete\ngenerating a new matrix...")
    sleep(3)