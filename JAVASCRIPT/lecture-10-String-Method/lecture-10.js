// let str = 'this is javascript string';
// let str1 = "this is javasript string";
// let str2 = `this is javascript string`;
// let str3 = new String("this is javascript string!");

// console.log(str);
// console.log(typeof str);

// console.log(str1);
// console.log(typeof str1);

// console.log(str2);
// console.log(typeof str2);

// console.log(str3);
// console.log(typeof str3);

// string method

// 1 String CharAt( ) method

{
    // let str = "this is code undefiend code code";

    // let newstr = str.charAt(30);

    // console.log(newstr);

    // let str1 = str.charAt(3);
    // console.log(str1);
    
}

// 2 String length method

{
    // let str = "this is code undefiend code code";
    // let str = "jaggi"

    // let lenstr = str.length

    // console.log(lenstr);
}

// 3 string indexof() and Lastindexof() method

{
    // let str = "this is code undefiend code code";
    
    // let indexstr = str.indexOf('code');
    // console.log(indexstr);

    // let indexstr1 = str.indexOf('undefiend');
    // console.log(indexstr1); 

    // let lastindexstr = str.lastIndexOf('code');
    // console.log(lastindexstr);

    // let indexstr2 = str.indexOf('code', 10);
    // console.log(indexstr2);

    // let lastindexstr2 = str.lastIndexOf('code', 32);
    // console.log(lastindexstr2);

    // let indexstr3 = str.indexOf('code', -4);
    // console.log(indexstr3);

    // let lastindexstr3 = str.lastIndexOf('code', 27)
    // console.log(lastindexstr3);

    // let indexstr4 = str.indexOf();
    // console.log(indexstr4);

    // let indexstr5 = str.indexOf('');
    // console.log(indexstr5);

    // let indexstr6 = str.indexOf(' ');
    // console.log(indexstr6);

    // let last1 = str.lastIndexOf();
    // console.log(last1);

    // let last2 = str.lastIndexOf('');
    // console.log(last2);

    // let last3 = str.lastIndexOf(' ');
    // console.log(last3);
}

// 4 string include method

{
    // let str = "this is code undefiend code code";

    // let incstr = str.includes('code');
    // console.log(incstr);

    // let incstr1 = str.includes('this');
    // console.log(incstr1);

    // let incstr2 = str.includes('jaggi');
    // console.log(incstr2);

    // let incstr3 = str.includes('code' , 8);
    // console.log(incstr3);

    // let incstr4 = str.includes('code' ,12);
    // console.log(incstr4);

    // let incstr5 = str.includes('code' , 32);
    // console.log(incstr5); 

}

// 5 String split method
{
    // let str = "this is mornig upon us";
    // let str = "jaggi"

    // let str1 = str.split('');
    // console.log(str1);

    // let str2 = str.split(' ');
    // console.log(str2);

    // let str3 = str.split('i');
    // console.log(str3);

    // let str4 = str.split('i' ,1);
    // console.log(str4);

    // let str5 = str.split('i' ,2);
    // console.log(str5);

    // let str6 = str.split('i' ,4);
    // console.log(str6);
}

// 6 javascript trim() ,trimstart() , trimend() method

{
    let str = "             this is javascript string method        ";

    console.log(str);

    let trimstr = str.trim();
    console.log(trimstr);

    let trimstr1 = str.trimStart();
    console.log(trimstr1);

    let trimstr2 = str.trimEnd();
    console.log(trimstr2);
}

// 7 string slice and substring method

{
    let str = "i love javascript and paython";

    let slicestr = str.slice(10);
    console.log(slicestr);

    let substr = str.substring(10);
    console.log(substr);

    // let slicestr1 = str.slice(-7);
    // console.log(slicestr1);

    // let substr1 = str.substring(-5); 
    // console.log(substr1);

    // let slicestr2 = str.slice(5 , 8);
    // console.log(slicestr2);

    // let substr2 = str.substring(5 , 35);
    // console.log(substr2);

    // let slicestr3 = str.slice(10 , 5); // empty string
    // console.log(slicestr3);

    // let substr3 = str.substring(12 ,5);
    // console.log(substr3);

    // let slicestr4 = str.slice(-5 ,10); // empty strring
    // console.log(slicestr4);

    // let substr4 = str.substring(-5 ,18);
    // console.log(substr4);

    // let slicestr5 = str.slice(-5 , -10); // empty string
    // console.log(slicestr5);

    // let substr5 = str.substring(-5 ,-5); // empty string
    // console.log(substr5);
}
