b= []
print(b)
i=0
while i<6:
    b.append(int(input("bir sayı giriniz: ")))
    i=i+1

b.sort()

c=int(len(b))-1
while b[c]%2==0:
    c=c-1

if b[c]%2==1:
    print(b[c])
