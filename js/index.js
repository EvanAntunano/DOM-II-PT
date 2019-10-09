// Your code goes here
// #1 button and propogation
const signUpButton = document.querySelector('.btn');
signUpButton.addEventListener('click', function (e){
    e.target.style.backgroundColor = 'blue';
    e.target.style.border = '2px dashed red';
    e.stopPropagation();
});

//#2  doubleclick
const head2click = document.querySelector('header h2');
head2click.addEventListener('dblclick', function(e){
    event.target.style.color = 'purple';
});

//#3 mouseover
let buttons = document.querySelectorAll('.btn');
buttons[1].addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'purple';
    e.target.style.color = 'red';
});
buttons[2].addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'grey';
    e.target.style.color = 'purple';
});

//#4 mouseleave
buttons[1].addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'black';
    e.target.style.color = 'gold';
});
buttons[2].addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'orange';
    e.target.style.color = 'black';
});

//#5 click 
let paragraph = document.querySelector('p');
paragraph.addEventListener('click', (e) => {
    e.target.style.color = 'gold';
});

//#6 remove img
let removeImg = document.querySelector('.img-content img');
removeImg.addEventListener('dblclick', (e) => {
    removeImg.style.display = 'none';
});

//#7 keypress
document.addEventListener('keypress', (e) => {
    alert(e.key);
});

//#8 Load
const introText = document.querySelector('.intro p');
window.addEventListener('load', (e) => {
    introText.style.color = 'green';
});


//#9 MouseMove
let brandNewHeadline = document.querySelectorAll('h2');
brandNewHeadline.forEach((h2) => {
    h2.addEventListener('mousemove', (e) => {
        e.target.textContent = 'This is a new headline!'
    });
});

//#10 inactive nav and preventDefault
let navInactive = document.querySelector('nav').addEventListener('click', (e) => {
e.preventDefault();
});