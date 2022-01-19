# -*- coding: utf-8 -*-
# https://www.beecrowd.com.br/judge/en/problems/view/1012
inp = input().split(' ')

a = float(inp[0])
b = float(inp[1])
c = float(inp[2])

triangle = (a * c) / 2 
circle  = (c ** 2) * 3.14159
trapezium = 0.5 * c * (a + b)
square = b * b
rectangle = a * b

print("TRIANGULO: {:0.3f}".format(triangle))
print("CIRCULO: {:0.3f}".format(circle))
print("TRAPEZIO: {:0.3f}".format(trapezium))
print("QUADRADO: {:0.3f}".format(square))
print("RETANGULO: {:0.3f}".format(rectangle))
