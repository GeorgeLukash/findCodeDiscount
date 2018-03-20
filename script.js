const pre = document.getElementsByTagName('PRE')[0];
const div = document.getElementById('some-container');
const ul = document.getElementsByClassName('list-container')[0];
const body = document.getElementsByTagName('BODY')[0];

console.log('Count of node in body : ', body.childElementCount);
console.log('DIV tag children : ')
for (let i = 0; i < div.children.length; i++) {
    console.log(div.children[i].textContent);
}

console.log('Text in element PRE : ',pre.textContent);