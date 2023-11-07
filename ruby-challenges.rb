# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

def even_or_odd(number)
    if number % 2 == 0
        p "#{number} is even"
    elsif number % 2 != 0
        p "#{number} is odd"
    end
end

even_or_odd(reposts1)
even_or_odd(reposts2)
even_or_odd(reposts3)

# Pseudo code:
# Input: a number
# Output: a string stating whether the number is even or odd
# Create a method that passes in a number as an argument. Use a conditional statement alongside a modulo division of 2. If the remainder is 0, print that the number is even. Use another conditional statement with a modulo division of 2. If the remainder is not 0, print that the number is odd.

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels(string)
    p string.delete "aeiouAEIOU"
end

remove_vowels('Rubber Soul')
remove_vowels('Sgt Pepper')
remove_vowels('Abbey Road')

# Pseudo code:
# Input: a string
# Output: the string with all the vowels removed
# Create method that takes a string as an argument. Use delete method to remove vowels from string. Print the result.

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome(string)
    if string.reverse.capitalize == string
        p "#{string} is a palindrome"
    elsif string.reverse.capitalize != string
        p "#{string} is not a palindrome"
    end
end

palindrome(palindrome_test_case1)
palindrome(palindrome_test_case2)
palindrome(palindrome_test_case3)

# Pseudo code:
# Input: a string
# Output: a statement of whether the string is a palindrome or not
# Create a method that takes a string as an argument. Use a conditional statement if the string reversed and capitalized is still equal to the original string. Print that the string is a palindrome if true. Use another conditional statement if the string reversed and capitalized does not equate to original string. Print that string is not a palindrome if true.