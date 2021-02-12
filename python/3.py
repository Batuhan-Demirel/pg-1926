a = [3,5,0,7,2,0,0]
a.reverse()

def sil():
    a.remove(0)
i=int("-1")
while i < int(a.count(0)+1):
    i=i+1
    sil()
    a.append(0)

a.reverse()
print(a)

