const body = document.body;
const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

//add class in classlist
spanHi.classList.add("new-class");
//remove class in classlist
spanHi.classList.remove("h2");

//toggle will add if it doesn't exist or remove if it exists
spanHi.classList.toggle("h3", false); //add h3
spanHi.classList.toggle("h1", true); //remove h1
// false means delete auto, true means add auto;
