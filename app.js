/* display */
//const display=document.getElementById("display"); este es menos recomendable que la linea 3
const display=document.querySelector("div#display");

/* ac */
const ac=document.querySelector("div#ac");
ac.addEventListener("click",()=>{
    ac.innerHTML="AC";
    display.innerHTML="0";
});

/* sig */
const sig=document.querySelector("div#sig");
sig.addEventListener("click",()=>{
    const currDisplay=display.innerHTML;
    let newDisplay=`${Number(currDisplay)*-1}`;
    if(currDisplay==="0"){
        newDisplay="-0";
    }
    display.innerHTML=newDisplay;
});

/* percent */
const percent=document.querySelector("div#percent");
percent.addEventListener("click",()=>{
    const currDisplay=display.innerHTML;
    display.innerHTML=`${Number(currDisplay)/100}`;
});

/* dot */
const dot=document.querySelector("div#dot");

/* numbers */
const zero=document.querySelector("div#zero");
const one=document.querySelector("div#one");
const two=document.querySelector("div#two");
const three=document.querySelector("div#three");
const four=document.querySelector("div#four");
const five=document.querySelector("div#five");
const six=document.querySelector("div#six");
const seven=document.querySelector("div#seven");
const eigth=document.querySelector("div#eigth");
const nine=document.querySelector("div#nine");

const numbers=[zero,one,two,three,four,five,six,seven,eigth,nine];
numbers.forEach((n,i) => n.addEventListener("click",()=>numberHandler(i)));

const numberHandler=(n)=> {
    ac.innerHTML="C";
    const currDisplay=display.innerHTML;
    let newDisplay=`${currDisplay}${n}`;
    if(currDisplay==="0"){
        newDisplay=n;
    }
    display.innerHTML=`${Number(newDisplay)}`;
};

/* operators */
const div=document.querySelector("div#division");
const mult=document.querySelector("div#mult");
const sum=document.querySelector("div#sum");
const sub=document.querySelector("div#sub");

const operators=[
    {elmnt: div,op:"/"},
    {elmnt: mult,op:"*"},
    {elmnt: sum,op:"+"},
    {elmnt: sub,op:"-"}
];
operators.forEach((oper)=>oper.elmnt.addEventListener("click",()=>operationHandler(oper.op)));

const operationHandler=(op)=>{
    
};

/* equal */
const equal=document.querySelector("div#equal");