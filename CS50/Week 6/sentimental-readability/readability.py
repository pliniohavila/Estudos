def main():
    textInput = input("Text: ")

    sentences = countSentences(textInput)
    blankSpaces = countBlanks(textInput)
    letters = countLetters(textInput)
    words = blankSpaces + 1

    # Call the Coleman Liau function
    index = colemanLiau(letters, words, sentences)

    # Handling single sentences with multiple words
    if words < 50 and sentences == 0 and checkSymbols(textInput) == 0:
        index -= 1

    # Handling results
    if index < 1:
        print("Before Grade 1\n")
    elif index >= 16:
        print("Grade 16+\n")
    else:
        print("Grade {:.0f}\n".format(index))


def countBlanks(text):
    # Count spaces blanks on text
    blanks = 0
    for i in range(len(text)):
        if text[i] == " ":
            blanks += 1

    return blanks


def countSentences(text):
    sentences = 0
    # Loop to calculate the sentences
    for i in range(len(text)):
        if text[i] == '!' or text[i] == '.' or text[i] == '?':
            sentences += 1

    return sentences


def countLetters(word):
    # Function to calculate the letters
    letters = 0
    # Loop to calculate the letters
    for i in range(len(word)):
        wordOrd = ord(word[i])
        # Increment the letters to sum
        if wordOrd >= ord('a') and wordOrd <= ord('z') or wordOrd >= ord('A') and wordOrd <= ord('Z'):
            letters += 1

    return letters


def checkSymbols(word):
    # Function to calculate the symbols
    symbol = 0

    for i in range(len(word)):
        if word[i] == ',':
            symbol += 1

    return symbol


def colemanLiau(l, w, s):
    # Calculate the L
    L = round((float(l) / float(w)) * 100, 2)
    # Calculate the S
    S = round((float(s) / float(w)) * 100, 2)

    # The Coleman-Liau index
    index = (0.0588 * L) - (0.296 * S) - 15.8

    return index


if __name__ == "__main__":
    main()