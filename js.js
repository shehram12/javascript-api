//const heading = document.getElementById('haeding');
//console.log(heading);

//const heading =document.getElementsByTagName('h1');
//console.log(heading);

//const heading = document.querySelectorAll('.heading');
//console.log(heading);

//const heading = document.querySelector('.heading');
//const parent= heading.parentNode;
//console.log(parent);

//const parent =document.querySelector('.parent');
//console.log(parent.childNodes);

 //const heading =document.querySelector('.heading');

 //console.log(heading.nextElementSibling);

 
 //const subheading=document.querySelector('h3');

 //console.log(subheading.previousElementSibling);

 /*const heading = document.querySelector('.heading');

   heading.innerHTML='Web dev is used for adding functionality';

   heading.style.color='green';
   heading.style.fontSize='100px';

   heading.classList.add('title');
   heading.classList.remove('title');
*/

/*const heading = document.createElement('h1');
heading.innerHTML='js is awesome';
heading.classList.add('title');
const parent=document.querySelector('.parent');
parent.appendChild(heading);

console.log(heading);


const subheading = document.createElement('h3');
subheading.innerHTML='js is awesome';
heading.insertAdjacentElement('beforebegin',subheading);

console.log(heading);*/

/*const button = document.querySelector('#btn');
const heading = document.querySelector('#heading');

button.addEventListener('click',function(event){
    heading.style.color='green';
    heading.style.fontSize='100px';
    console.log('button clicked',event);
})*/

/*
const blubSwitch=document.querySelector('#blubSwitch');
     const blub=document.querySelector('blub');
     blubSwitch.addEventListener('click',function()
    {
      console.log(blub.src);
     if(blub.src.match('off')){
        blub.src='./blub-on.jpeg';
        blubSwitch.innerHTML='Turn off';
     }else{
        blub.src='./blub-off.jpeg';
        blubSwitch.innerHTML='Turn on';
     }


      blub.src  = '/blub-on.jpeg';
    });
*/

const root=document.querySelector('#root');
const button=document.querySelector('button');

function createItem(item){
const card=document.createElement('div');
card.classList.add('card');
const photo = document.createElement('img');
photo.src= item.thumbnailUrl;


const title=document.createElement('h4');
title.innerHTML=item.title;
card.appendChild(photo);
card.appendChild(title);
root.appendChild(card);

}


function displayImages(items){

items.forEach(function(item){
   
createItem(item);
});




console.log(items);







}




button.addEventListener('click',function(){
   fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(items=>{
displayImages(items);
});
});

