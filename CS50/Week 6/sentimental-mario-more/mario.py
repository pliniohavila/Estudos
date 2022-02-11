# Init the n vaue no acept
n = 0
# Input user, check if of with conditions
while n < 1 or n > 8:
    # Except to not int
    try:
        n = int(input("Height: "))
    except:
        pass

# Make the mario pyramid
for i in range(1, (n+1)):
    print(" "*(n-i), end="#"*(i))
    print(" ", "#"*i)