# -*- coding: utf-8 -*-
# https://www.beecrowd.com.br/judge/en/problems/view/1930

inp = input()
inpInt = [int(n) for n in inp.split(' ')]
totalPowers = sum(inpInt) - 3
print(totalPowers)
