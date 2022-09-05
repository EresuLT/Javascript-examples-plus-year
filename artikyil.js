let artıkYıl = function(yıl = Number(prompt("bir  yıl giriniz"))){

    if(yıl % 4 == 0 && (yıl % 100 !== 0 | yıl % 400 == 0)){
        return (`${yıl} yılı artık yıldır`);
    }else{
        return (`${yıl} yılı artık yıl değildir`);
    }
}
console.log(artıkYıl());