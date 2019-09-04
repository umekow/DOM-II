// Your code goes here
//1.mouseover

const images = document.querySelectorAll('img'); 
images.forEach((i) => {
  
  i.addEventListener('mouseover', (item) => {
    item.target.style.transform= "scale(1.5)";
    item.target.style.transition = "all 0.5s";  
  })
}, 500); 

//2.mouseleave 

document.querySelectorAll('.img-content').forEach(image => image.style.overflow='hidden');
document.querySelectorAll('.intro').forEach(image => image.style.overflow='hidden');
document.querySelectorAll('.content-destination').forEach(image => image.style.overflow='hidden');
images.forEach((image) => {
  image.addEventListener('mouseleave', (item) => {
    item.target.style.transform="scale(1)"; 
    item.target.style.transition="all 0.5s";
  })
});
//3.keydown
document.addEventListener('keydown', (key) => {
  document.querySelector('p').textContent = 'You pressed the ' + key.code ; 
});


//4.wheel

document.querySelector('h2').addEventListener('wheel', (item) =>{this.style.fontSize="23px"
}); 


//5.load
window.addEventListener('load', (event) => {
  console.log('This page loaded.');
});

//6.focus
const headerImg = document.querySelector('a');

headerImg.addEventListener('focus', () => { this.style.border = "2px solid pink"}); 

//7.resize

window.addEventListener('resize', () => {
  document.querySelector('body').style.background="red"; 
}); 
//8.scroll
document.addEventListener('scroll', () => {
  document.querySelectorAll('a').forEach((item) => {
    item.style.color="red";  
  })
}); 


//9.select
const paragraph = 
document.querySelector('p').addEventListener('select', () => {
  this.style.color="green"; 
  this.style.background="blue"; 
});
//10.dblclick
const bodyTag = document.querySelector('body');
window.addEventListener('dblclick', () => {bodyTag.style.background="gray"});






//drag and drop
const boxes = document.querySelectorAll('.box'); 
const fill = document.querySelector('.fill'); 

boxes.forEach((box) => {
  box.addEventListener('dragover', (e) => e.preventDefault()); 
  box.addEventListener('dragenter', (e) => e.preventDefault()); 
  box.addEventListener('drop', () => this.append(fill)); 
}); 

//Stop the navigation from items from refreshing the page by using `preventDefault()`

document.querySelectorAll('a').forEach((a) => {
  a.addEventListener('click', (event) => {
    event.preventDefault(); 
  })
}); 


//Nest two similar events somewhere in the site and prevent the event propagation properly

document.querySelector('.destination').addEventListener('click', (e) => {
  
  console.log(` div was clicked`);
  document.querySelector('.destination p').addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(`paragraph was clicked`)
  })
});

