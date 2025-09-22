let val=document.querySelector("#demo");

val.addEventListener('click' ,() =>{
    alert("button was clicked..")
})



// onclick we are using in the js
let valu=document.querySelector("#demopara");
// valu.onclick=function(){
//     alert("button was clicked"); 
// }


// using the addEventListener
valu.addEventListener('click',function(){
    alert("butteon was clicked with the addeventListner");
})


// when a event happens js creates the event objects..


valu.addEventListener('click',function(event){
    console.log("Event type ",event.type);
    console.log("Clicked element ",event.target);
})