#Reverse a string without using slicing
# def reverse_str(text):
#     for char in range(len(text),0,-1):
#         print(text[char-1],end="")
# x=input("Enter a string: "); 
# reverse_str(x)

#Check if a number is prime
# def prime(num):
#     for i in range(2,int(num**0.5),1):
#         if num%i==0:
#             print("Not prime")
#             break
#     else:
#         print("Prime")

# x=int(input("Enter a number: "))
# prime(x)

# 3. Find factorial using recursion
# def fact(n):
    # if n==1:
    #     return 1
    # else:
    #     return n*fact(n-1)


#     fact1=1
#     for i in range(1,n+1):
#         fact1=fact1*i
#     print(fact1)

# x=int(input("Enter a number: "));
# fact(x)

#Find the largest element in a list

# def maximum(list1):
#     maxx=list1[0]
#     for i in range(1,len(list1),1):
#         if maxx < list1[i]:
#             maxx=list1[i]
#     print(maxx)

# list1=(input("Enter the elements: ")).split();
# maximum(list1)

# Check if string is palindrome
# def palindrome(n):
#     rev=""
#     for char in range(len(n),0,-1):
#         rev=rev+n[char-1]
    
#     if rev==n:
#         print("Palindrome")
#     else:
#         print("Not a Palindrome")

# x=input("Enter a string: ");
# palindrome(x)

# Remove duplicates from list
# def remove_duplicate(lists):
#     lists1=[]
#     for nums in lists:
#         if nums not in lists1:
#             lists1.append(nums)
#     print(lists1)

# x=input("Enter the elements: ").split();
# remove_duplicate(x)

# Fibonacci series up to N
# def fib(n):
#     a=0
#     b=1
#     for i in range(n):
#         print(a)
#         temp=a+b
#         a=b
#         b=temp
    
# x=int(input("Enter the number: "));
# fib(x)

#Count frequency of each element in a list
# def frequency(nums):
#     freq={}
#     for i in nums:
#         if i in freq:
#             freq[i] += 1
#         else:
#             freq[i]=1
#     print("freqency = " , freq)

# nums=[1,2,2,5,5,6,6,6];
# frequency(nums) 

# Find the largest word in a string.
# def largest_word(word):
#     words=word.split()
#     largest=words[0]

#     for i in words:
#         if len(i)>len(largest):
#             largest=i

#     print(largest)
#     print(len(largest))

# word=input("Enter a string: ");
# largest_word(word)

# Merge two dictionaries
# def merge(d1,d2):
#     d1.update(d2)
#     print(d1)

# d1={"a":1,"b":2};
# d2={"c":3,"d":4};
# merge(d1,d2)

# Sort a list without using sort()
# def sorting(nums):
#     for i in range(len(nums)):
#         for j in range(i+1,len(nums)):
#             if nums[i]>nums[j]:
#                 nums[i],nums[j]=nums[j],nums[i]
#     print(nums)

# nums=[1,9,2,7,3,5];
# sorting(nums)

# Find sum of digits of a number
# def sum(n):
#     sum1=0
#     while n!=0:
#         digit=n%10
#         sum1=sum1+digit
#         n=n//10
#     print(sum1)

# n=12346;
# sum(n)

# Find the length of a string without using len()
# def length(str):
#     count=0
#     for i in str:
#         count+=1
#     print(count)

# str="hello i am a girl";
# length(str)

# Find all prime numbers in a range
# def prime(num):
#     for i in range(2,50):
#         for j in range(2,int(i**0.5)+1):
#             if i%j==0:
#                 break
#         else:
#             print(i,end=" ")
# num=7;
# prime(num)