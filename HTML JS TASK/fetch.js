const url = "https://official-joke-api.appspot.com/random_joke";

let btn = document.querySelector("#btn");
let para = document.querySelector("#para");

const data = async () => {
  console.log("Fetching data from the api's");
  let response = await fetch(url); //it will return the promise..
  console.log(response);
  let anotheresponse = await response.json();
//   para.innerHTML = `
// <p><b>Setup</b>${anotheresponse.setup}</p>`;

para.innerText=anotheresponse.setup;
// console.log(anotheresponse.setup);
};
// data();

btn.addEventListener("click", data);
