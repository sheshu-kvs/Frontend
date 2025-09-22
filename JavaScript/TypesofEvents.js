let val = document.querySelector("#demo");

val.addEventListener('click' ,function(){
    alert("button was clicked!!");
});

let res=document.querySelector('#demo12');

res.addEventListener('mouseover',() =>{
    res.style.background="green";
})

res.addEventListener('mouseout',function(){
    res.style.background="red";
})

// key Event listener

let value=document.querySelector("#demo143");

value.addEventListener('keydown', (event) =>{
    console.log(event.key);
})

value.addEventListener('keyup', (event) =>{
    console.log(event.key);
});
