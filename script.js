const a=document.querySelectorAll("[data-a]");
const b=document.querySelector('input[type="search"]');
let f=document.querySelector("select");

// Searching
b.addEventListener('search',function(){
    value=b.value.toLowerCase();
    for(let i=0;i<a.length;i++){
        data=a[i].getAttribute("data-a").toLowerCase();
        let r=new RegExp("^(?:\\b\\w+\\b\\s+){0,3}"+value);
        if(value!=="" && data.match(r)){
        a[i].style.display="grid";
        a[i].style.gridAutoRows="minmax(150px,auto)";
        a[i].style.display="inline";
        }
        else if(value==''){
            a[i].style.display="grid";
            a[i].style.gridAutoRows="minmax(150px,auto)";
            a[i].style.display="inline";
        }
    else{
        a[i].style.display="none";
        }
    }});

// Filtering
f.addEventListener('change',function(){
    let filter=f.value;
    let v1=b.value.toLowerCase();  
    for(let i=0;i<a.length;i++){
        data=a[i].getAttribute("data-states").toLowerCase();
        data2=a[i].getAttribute("data-a").toLowerCase();
        let r=new RegExp("^(?:\\b\\w+\\b\\s+){0,3}"+v1);
        if(filter==data && data2.match(r)){
            a[i].style.display="grid";
            a[i].style.gridAutoRows="minmax(150px,auto)";
            a[i].style.display="inline";
        }
        else if (filter == "a" && data2.match(r)) {
            a[i].style.display="grid";
            a[i].style.gridAutoRows="minmax(150px,auto)";
            a[i].style.display="inline";
        }
        else{
            a[i].style.display="none";
        }
    }
    
});

// Sorting
let s=document.querySelector("#sort");
let c=document.querySelector(".container");
let d=document.querySelectorAll("div[data-a]");
s.addEventListener('change',function(){
    let arr=Array.from(d);
    if(s.value=='ascending'){
    arr.sort((a,b)=>{
        let a1=a.getAttribute("data-a").toLowerCase();
        let b1=b.getAttribute("data-a").toLowerCase();
        if(a1<b1){
            return -1;
        }
        else if(a1>b1){
            return 1;
        }
        else{
            return 0;
        }

    })}
    else if(s.value=='descending'){
        arr.sort((a,b)=>{
        let a1=a.getAttribute("data-a").toLowerCase();
        let b1=b.getAttribute("data-a").toLowerCase();
        if(a1<b1){
            return 1;
        }
        else if(a1>b1){
            return -1;
        }
        else{
            return 0;
        }
    })}
    for(let i=0;i<arr.length;i++){
        c.appendChild(arr[i]);
    }
});

// Zooming
let a2=document.querySelectorAll("div[data-a]");
for(let i=0;i<a2.length;i++){
a2[i].addEventListener("click",function(){
    let b2=a2[i].getAttribute("data-a");
    m=document.getElementById(b2);
    m.style.display="flex";
})};
let a3=document.querySelectorAll("span");
for(let i=0;i<a3.length;i++){
    a3[i].addEventListener("click",function(){
        m.style.display="none";
})};