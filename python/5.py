
class Kullanici:
    def __init__(self,okuladi,adisoyad,numara,statu):
        self.okuladi = okuladi
        self.adisoyad = adisoyad
        self.numara = numara
        self.statu = statu

class YTU(Kullanici):
    pass
class Gazi(Kullanici):
    pass
class ITU(Kullanici):
    pass


o= (input("okul adı:"))
b= (input("adınız soyadınız :"))
n= (input("numaranız :"))
k= (input("Kullanıcı Türü :"))


Batu=YTU(o,b,n,k)

a = """ 
------------------------------
Adınız : {} 
Numaranız : {} 
Okul Adi : {} 
Kullanıcı Türü : {} 
------------------------------
""".format(Batu.adisoyad,Batu.numara,Batu.okuladi,Batu.statu)

print(a);



