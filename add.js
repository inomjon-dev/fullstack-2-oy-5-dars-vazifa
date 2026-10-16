//1-masala.
let text = " JavaScript ";
console.log(`"JavaScript" uzunligi: ${text.trim().length}`);

//2-masala.
let text2 = "men javascript organayapman";
console.log(text2.toUpperCase());

//3-masala.
let text3 = "Frontend";
console.log(`Birinchi belgi: ${text3.trim()[0]}; Oxirgi belgi: ${text3[text3.trim().length]}`);

//4-masala.
let text4="Men Node.js backend dasturlashni organayapman";
console.log(text4.includes("backend"));

//5-masala.
let ism = "iNomjOn";
let trueName =""
for(i of ism){
    if(i==ism.trim()[0]){
    trueName+=i.toUpperCase();
    }
    else{
        trueName+=i.toLowerCase();
    }
}
console.log(trueName);


