# -*- coding: utf-8 -*-
# https://www.beecrowd.com.br/judge/en/problems/view/1020

i = int(input())

y = int(i / 365)
m = int((i % 365) / 30)
d = int((i % 365) % 30)

print(f"{y} ano(s)")
print(f"{m} mes(es)")
print(f"{d} dia(s)")
