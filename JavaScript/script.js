// // let id=document.getElementById("id")
// let id=document.getElementById("id").innerHTML="What Color";

// console.log(id);



// console.dir() it will return the properties and the methods of the object..

// console.dir(document.body.div);


// // to access the html content with the id we can getElementById()

 let id=document.getElementById("id").innerHTML="This is the id select from the Html"
//  console.dir(id)
//  console.log(id)
let class12=document.getElementsByClassName("p-class");

// getElementsByClassName : it will return the collection of the elements like the array
// to display that values we can iterate 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
// for(let val of class12){
//     val=val.innerHTML="getElementsByClassName return the collection of the elements";
//     console.log(val);
// }



// let singleclass=document.getElementsByTagName("p");

// for(let val of singleclass ){
//     val=val.innerHTML="Hello of multiple class with iteration";
//     console.log(val);
// }
// console.log(singleclass);


// let tagName12=document.querySelector("#demoid");
let tagName12=document.querySelector(".rem");

console.log(tagName12.tagName);
