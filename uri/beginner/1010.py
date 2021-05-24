# -*- coding: utf-8 -*-

pdt1 = list(map(float, input().split(' ')))
pdt2 = list(map(float, input().split(' ')))

value1 = pdt1[1]*pdt1[2]
value2 = pdt2[1]*pdt2[2]

valueToPay = value1+value2

print("VALOR A PAGAR: R$ {:.2f}".format(valueToPay))