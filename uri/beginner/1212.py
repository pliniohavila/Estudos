# -*- coding: utf-8 -*-

a, b, c = map(float, input().split());
pi = 3.14159

areaTriangle = (a*c)/2
areaCircle = pi * (c ** 2)
areaTrapezium = ((a+b)*c)/2
areaSquare = b*b
areaRectangle = a*b

print("TRIANGULO: {:.3f}".format(areaTriangle))
print("CIRCULO: {:.3f}".format(areaCircle))
print("TRAPEZIO: {:.3f}".format(areaTrapezium))
print("QUADRADO: {:.3f}".format(areaSquare))
print("RETANGULO: {:.3f}".format(areaRectangle))
