// 1. Where to add (find the parent)
const placesList = document.getElementById("places-list");

// 2. What to be added
const li = document.createElement("li")
li.innerText = "Japan"

// 3. add the child
placesList.appendChild(li)


// 1
const mainContainer = document.getElementById("main-container");

// 2
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My food list"
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li')
li1.innerText = 'biryani';
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = 'roast';
ul.appendChild(li2);

const li3 = document.createElement('li')
li3.innerText = 'salad';
ul.appendChild(li3);

section.appendChild(ul)

mainContainer.appendChild(section)


// set innerHTML directly
// const mainContainer = document.getElementById("main-container");
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section</h1>

<ul>
    <li>T-shirt</li>
    <li>Jeans</li>
    <li>Bandana</li>
    <li>Watch</li>
</ul>
`
mainContainer.appendChild(sectionDress)