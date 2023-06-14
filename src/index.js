const container = document.querySelector('#container');


const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

const header = document.createElement('h3');
header.textContent = "I'm a blue h3!";
header.style.color = "blue";

const div_block = document.createElement('div');
div_block.style.border = "black";
div_block.style.backgroundColor = "pink";

const headr1 = document.createElement('h1');
headr1.textContent = "I'm in a div";

const paragraph2 = document.createElement('p');
paragraph2.textContent = "ME TOO!";


div_block.appendChild(headr1);
div_block.appendChild(paragraph2);

container.appendChild(paragraph);
container.appendChild(div_block);

