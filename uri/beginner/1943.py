# -*- coding: utf-8 -*-
# https://www.beecrowd.com.br/judge/en/problems/view/1943

inp = int(input())


if inp == 1:
    print("Top 1")
elif inp <= 3:
    print("Top 3")
elif inp <= 5:
    print("Top 5")
elif inp <= 10:
    print("Top 10")
elif inp <= 25:
    print("Top 25")
elif inp <= 50:
    print("Top 50")
elif inp <= 100:
    print("Top 100")
