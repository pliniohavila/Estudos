# -*- coding: utf-8 -*-
# https://www.beecrowd.com.br/judge/en/problems/view/2434

balanceDays = []
inp = input().split(' ')

for day in range(int(inp[0])):
    balanceDays.append(int(input()))

balance = int(inp[1])
minBalance = balance
days = int(inp[0])

for i in range(days):
    balance += balanceDays[i]
    if minBalance > balance:
        minBalance = balance
    else:
        continue

print(minBalance)
