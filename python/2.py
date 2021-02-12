mail=input('mail adresini gir: ')
harfler='abcdefghijklmnoprstuvwyzABCDEFGHIJKLMNOPRSTUVWYZ0123456789-_@.'
boyut= len(mail)

a = 0
for harf in mail:
    if harf in harfler:
        a +=1;

def kontrol(str):
  count = 0
  for et in str:
    if et == "@":
      count = count + 1
      
  if count == 1:
    return True
  else:
    return False
 
if(kontrol(mail)==True and a == boyut):
      print("doğru")
else:
      print("yanlış")


"""gerisi kafamı çok karıştırdı""
