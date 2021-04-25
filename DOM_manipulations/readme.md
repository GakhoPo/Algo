# DOM manipulations

1. HTML part:

   ```html
   <!DOCTYPE html>
   <html lang="en">
       <head>
           <meta charset="UTF-8" />
           <meta http-equiv="X-UA-Compatible" content="IE=edge" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <script src="./code.js" defer></script>
           <title>DOM Test</title>
       </head>
       <body>
           <div>
               <span id="hi" data-test="Test" title="hello">Hi</span>
               <span id="bye">Bye</span>
           </div>
       </body>
   </html>
   ```

   

2. Adding elements to the DOM:

   ```javascript
   const body = document.body;
   const div = document.createElement("div");
   //body.append("Hi"); //It can append strings and multiple elements
   //body.appendChile(div) // it can only accept element tags.
   
   //div.textContent = "Hi 2" // Show the content exactly shown in codes.
   //div.innerHTML = "<strong>Hi strong</strong>";//It can mainipulate the tag directly, unsafe.
   const strong = document.createElement("strong");
   strong.append("Hi");
   div.append(strong);
   body.append(div);
   ```

   

3. remove element

   ```javascript
   const body = document.body;
   const div = document.createElement("div");
   const spanHi = document.querySelector("#hi");
   const spanBye = document.querySelector("#bye");
   
   spanBye.remove();//remove tags from HTML
   div.removeChild(spanBye); //remove child from father;
   div.append(spanBye);//it can appear again, so it doesn't remove permanently.
   ```

   

4. Attribute Staff

   ```javascript
   //Get Attribute
   spanHi.getAttribute("title");
   console.log(spanHi.title);
   
   //set Attribute
   spanHi.setAttribute("title", "fine");
   spanHi.title = "fine";
   
   //remove attributes
   spanHi.removeAttribute("title");
   ```

   

5. data attributes

   ```javascript
   console.log(spanHi.dataset); //contains every "data-" fromat contents
   //it will automatically convert hyphens to camelCase
   console.log(spanHi.dataset.test);
   //set new data
   spanHi.dataset.newName = "My new Name";
   //remove
   spanHi.removeAttribute("new-name");//camel case to hyphen case
   ```

   

6. class list

   ```javascript
   //<span title="hello" id="hi" data-test="Test" class="h1 h2">Hi</span>
   //add class in classlist
   spanHi.classList.add("new-class");
   //remove class in classlist
   spanHi.classList.remove("h2");
   
   //toggle will add if it doesn't exist or remove if it exists
   spanHi.classList.toggle("h3", false); //add h3
   spanHi.classList.toggle("h1", true); //remove h1
   // false means delete auto, true means add auto;
   ```

   