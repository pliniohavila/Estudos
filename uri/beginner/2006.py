# -*- coding: utf-8 -*-
# https://www.beecrowd.com.br/judge/en/problems/view/2006

tea = int(input())

while tea < 1 or tea > 4: 
    tea = int(input())
    
answers = input()
answersInt = [int(n) for n in answers.split(' ')]

choice = 0 

for i in answersInt:
    if i == tea:
        choice += 1

print(choice)

