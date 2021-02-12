function hesapla(){
    var a=Number(document.getElementById("urun").value)
    var b=Number(document.getElementById("veri").value)
    
    var pustu= b-a;
    console.log(pustu)
    if(b>a){
        document.write(" urun fiyatı : "+a+ " Verilen para : "+b+ "<br>"+ "Para Üstü : ")
        var birtl = (pustu/1);
        if(birtl>0 && Math.floor(birtl)!=0){
            pustu=pustu%1
            document.write(Math.floor(birtl)+" tane bir tl ");
        };
        var ellikr = (pustu/0.5);
        if(ellikr >0 && Math.floor(ellikr)!=0){
            pustu=pustu%0.5;
            document.write(Math.floor(ellikr)+" tane elli kuruş ");
        };
        var yirmibeskr = (pustu/0.25);
        if(yirmibeskr>0 && Math.floor(yirmibeskr)!=0){
            pustu=pustu%0.25;
            document.write(Math.floor(yirmibeskr)+" tane yirmibeş kuruş ");
        };
        var onkr = (pustu/0.1);
        if(onkr>0 && Math.floor(onkr)!=0){
            pustu=pustu%0.1;
            document.write(Math.floor(onkr)+" tane on kuruş ");
        };
        var beskr = pustu/0.05;
        if(beskr>0 && Math.floor(beskr)!=0){
            pustu=pustu%0.05;
            document.write(Math.floor(beskr)+" tane bes kuruş ");
        };
        var birkr = (pustu/0.01);
        if(birkr<1){
            pustu=pustu%0.01;
            document.write(Math.ceil(birkr)+" tane bir kuruş ");
        }else if(birkr>1){
            document.write(Math.floor(birkr)+" tane bir kuruş ");
        };


    }else if(b=a && pustu==0){ 
        document.getElementById("pustu").innerHTML= "Paraüstü YOk ";
    }else if(b<a){
        document.getElementById("pustu").innerHTML= "Yetersiz bakiye ";
    }

};
