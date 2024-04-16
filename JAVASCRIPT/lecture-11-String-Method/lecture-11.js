// 8 startwith and endwith string method

{
    // startwith
    // let str = 'hi , good morning all of us!';

    // let startstr = str.startsWith();
    // console.log(startstr);

    // let startstr1 = str.startsWith("hi", 1);
    // console.log(startstr1);

    // let satrtstr2 = str.startsWith("hi" , 0);
    // console.log(satrtstr2);

    // let startstr3 = str.startsWith("hi");
    // console.log(startstr3);

    //endswith

    // let endstr = str.endsWith("us"); //false
    // console.log(endstr);

    // let endstr1 = str.endsWith("us!"); // true
    // console.log(endstr1);

    // let endsstr2 = str.endsWith("!"); // true
    // console.log(endsstr2);

    // let endstr3 = str.endsWith("us!" ,38); // true
    // console.log(endstr3);
}

// 9 concat() string method

{
    // let str1 = "shiyal";
    // let str2 = "jaggi";
    // let str3 = "fullstack webdevloper";

    // let concat = str1.concat(" " , str2);
    // console.log(concat);

    // let concatstr = str1.concat(" " ,str2," ", str3);
    // console.log(concatstr);

    // let concatstr1 = str1 +" "+ str2 +" "+ str3;
    // console.log(concatstr1);
}

// 10 padstart and padEnd string methodP
{
    // let  str = "jaggi";

     // padStart
    // let startstr = str.padStart(10 , "j");
    // console.log(startstr);

    // let startstr1 = str.padStart(15 ,"a");
    // console.log(startstr1);
  
    // padEnd

    // let padendstr = str.padEnd(10 ,"i");
    // console.log(padendstr);

    // let padendstr1 = str.padEnd(12 ,"g");
    // console.log(padendstr1);

    // let number = "50";

    // let padstart2 = number.padStart(10 , 0);
    // console.log(padstart2);

    // let padstart3 = number.padStart(10 , 5);
    // console.log(padstart3);

    // let padendstr3 = number.padEnd(15 , 0);
    // console.log(padendstr3);

    // let padendstr4 = number.padEnd(15 , 5);
    // console.log(padendstr4);
    

}

 // Repeat String Method

 {
    // let str = "hello" + " ";

    // let repeatstr = str.repeat(0);

    // console.log(repeatstr);

    // let repeatstr1 = str.repeat(1);
     
    // console.log(repeatstr1);

    // let repeatstr2 = str.repeat(2);

    // console.log(repeatstr2);

    // let repeatstr3 = str.repeat(5);

    // console.log(repeatstr3);
}

// 12 toUppercase And toLowercase String method

{
    // let str = 'Dog is very Danger And dog is honest but Cat is very cute And cat is Lazy';
 
    // let uppercasestr = str.toUpperCase();

    // console.log(uppercasestr);

    // let lowercasestr = str.toLowerCase()

    // console.log(lowercasestr);


}

// 13 replace And replaceAll String met
{
    // let str = 'dog is very Danger And Dog is honest but Cat is very cute And cat is Lazy';
    
    // let replacestr = str.replace("Dog" , "cat");

    // console.log(replacestr);

    // let replacestr1 = str.replace("Dog" , "tiger");

    // console.log(replacestr1);

    // let replacestr2 = str.replace("cat" , "monkey");

    // console.log(replacestr2);

    // let replacestr3 = str.replace("Cat" , "donkey");

    // console.log(replacestr3);

    // let regex1 = /dog/gi;
    // let replacestr4 = str.replace(regex1 , "panda");
    // console.log(replacestr4);

    // replaceAll

    // let str = 'dog is dog very Danger And Dog is Dog honest but Cat is Cat very cute And cat is cat Lazy';
    
    // let Allreplacestr = str.replaceAll("dog" , "lion");

    // console.log(Allreplacestr);

    // let str2 = 'Dog is Dog very Danger And Dog is Dog honest but Cat is Cat very cute And cat is cat Lazy';


    // let Allreplacestr1 = str2.replaceAll("Dog" , "tiger");

    // console.log(Allreplacestr1);

    // let Allstr = str.replaceAll(/cat/g , "billi");

    // console.log(Allstr);

    // let Allstr1 = str.replaceAll(/dog/gi, "monkey");

    // console.log(Allstr1);

}    

// 14 match And matchAll String method

{
    //match

//     let str = 'dog is dog very Danger And Dog is Dog honest but Cat is Cat very cute And cat is cat Lazy';

//     let matchstr = str.match(/dog/g, "dog");

//     console.log(matchstr);

//     let matchstr1 = str.match(/dog/gi);

//     console.log(matchstr1);

//    // matchAll

//    let matchAllstr = [...str.matchAll(/cat/g)];

//    console.log(matchAllstr);

//    let matchAllstr2 = [...str.matchAll(/dog/gi)];

//    console.log(matchAllstr2);

}

// 15 toString And Tovalueof

{
    // let objectstr = new String ("Hey jaggi" + " ")

    // let repetstr = objectstr.repeat(3);

    // console.log(repetstr);

    //toString

    // let objectstr = new String (69)

    // let stringstr = objectstr.toString();

    // console.log(stringstr);

    // console.log(typeof stringstr);

    //tovalueof

    let objectstr = new String (45,36);

    let stringstr1 = objectstr.valueOf();

    console.log(stringstr1);

    console.log(typeof stringstr1);  //string
}
