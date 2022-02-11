
def main():
    # Main Function
    # Receives user input as list
    numberCard = list(input("Number: "))
    # Reverse list
    numbers = [int(x) for x in numberCard[::-1]]
    # Call the valid card function
    numberCard = validCard(numbers)
    # Found de flag card and print the flag
    print(foundFlag(numberCard))


def validCard(numbers):
    # Valid user input. Implement the Luhn’s Algorithm
    # Receive the list number
    # Return the number to found the flag
    i = 1
    sumOne = 0
    sumTwo = []

    # Interact the list and app the Luhn’s Algorithm
    while i < len(numbers):
        # Part One and two
        sumTwo.append(numbers[i-1])
        if numbers[i] * 2 > 9:
            n = numbers[i] * 2
            d, u = int(n // 10), n % 10
            sumOne += d
            sumOne += u
        else:
            sumOne += numbers[i] * 2
        i += 2

    # Part three
    digitValid = sumOne
    for i in range(len(sumTwo)):
        digitValid += sumTwo[i]

    return digitValid


def foundFlag(numberCard):
    # Found the flag
    # Receive a number to valid flag
    # If found: return flag, otherwise return INVALID
    if numberCard in (57, 77):
        return "AMEX\n"
    elif numberCard in (20, 40, 60, 80):
        return "MASTERCARD\n"
    elif numberCard in (30, 90, 36):
        return "VISA\n"
    else:
        return "INVALID\n"


if __name__ == "__main__":
    main()