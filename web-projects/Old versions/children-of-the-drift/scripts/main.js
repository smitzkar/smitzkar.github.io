document.querySelector('li').onclick = function() {
    alert('You found me!'); // only seems to work on the first instance it appears
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sanctuary2.png') {
      myImage.setAttribute('src','images/ark.jpg');
    } else {
      myImage.setAttribute('src','images/sanctuary2.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {   // If myName has no value, run setUserName() again from the start. If it does have a value (if the above statement is not true), then store the value in localStorage and set it as the heading's text.
      setUserName();
    } else {
      localStorage.setItem('name', myName);    // use localStorage.clear(); to clear local storage =)
      myHeading.textContent = 'Father welcomes you, ' + myName;
    }
  }  
  if(!localStorage.getItem('name')) {  //notice the ! in front of localStorage -> NOT operator -> if not
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Father welcomes you back, ' + storedName; // if there was already a name stored locally -> welcome back!
  }
  myButton.onclick = function() {
    setUserName();
  }


// the following stuff is a way to let the script create a completely new list (and paragraph) to the website, user can create new list items  
/* const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item');
    this.textContent = listContent;
  }
} 
new stuff stops here */
