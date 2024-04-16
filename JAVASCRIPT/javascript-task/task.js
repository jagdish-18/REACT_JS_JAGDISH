
// arithmetic operations
{
    let a = 5;
    let b = 10;
    
    console.log(a+b);
    console.log(b+a);
    
    console.log(a-b);
    console.log(b-a);
    
    console.log(a*b);
    console.log(b*a);
    
    console.log(a/b);
    console.log(b/a);
    
    console.log(a%b);
    console.log(b%a);
}

// assignment operators
{
    let p = 25;
    let q = 30;
    
    console.log(p);
    console.log(q);
    
    console.log(p+=q);
    console.log(q+=p);
    
    console.log(p-=q);
    console.log(q-=p);
    
    console.log(p*=q);
    console.log(q*=p);
    
    
    console.log(p/=q);
    console.log(q/=p);
}

// Compare two numbers 

{
    let j = 35;
    let k = 40;
    
    console.log(j==k);
    console.log(j!=k);
    console.log(j===k);
    console.log(j!==k);
    console.log(j<k);
    console.log(j>k);
    console.log(j<=k);
    console.log(j>=k);
}

// ternary operator

{
    let age = 18 ;
    
    let text = (age >= 18) ? "you can vate" : "you can not vote";
    
    console.log(text);

}

// compare string

{
    let string1 = "shiyal";
    let string2 = "shiyal";
    
    console.log(string1 === string2);
    console.log(string1 == string2);
}

// 1st postitive nagitive or zero

{
    let num = 0;
    
    if(num > 0){
        console.log("number is positive");
    }
    else if(num < 0){
        console.log("number is negitive");
    }
    else{
        console.log("number is zero");
    }

}


//2nd  check person eligibale to vate
{
    let age= 20;
    
    if(age>= 18){
        console.log("person is eligibale for vate");
    }
    else{
        console.log("person is not eligibale for vate");
    }
}

//  3rd largest number
{
    let x = 25 ;
    let y = 15 ;
    let z = 10 ;
     
    if(x >= y && x >= z)
    {
        console.log("largest number is a!");
    }
    else if(x >= y && y >= z)
    {
        console.log("largest number is b:");
    }
    else{
        console.log("largest number is c");
    }
}


// 4th leap year

{
    let x = 2010;
     if(x % 4 == 0)
     {
        console.log("leep year!");
     }
     else{
        console.log("not leap year");
     }
}

// 5th grade base on a score
{

    let marks = 35;
    
    let grade;
    
    if(marks >= 85){
        grade = "A";
    }
    else if(marks >= 75){
        grade = "B";
    } 
    else if(marks >= 65){
        grade = "C";
    }
    else if(marks >= 45){
        grade = "d";
    }
    else{
        grade = "faill";
    }
    
    console.log("the grade for the marks" + marks + "is: " + grade);
}






//  const user = "Mily";

//  let users = "sirous";
//  usres = "ted";

{
    // const loop = 10;
    // const n = 0;
    
    // for(n; n<loop; n++){
    //     console.log(n);
    // }
    // console.log(n);
}






