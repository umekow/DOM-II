// Your code goes here
//1.mouseover

const images = document.querySelectorAll('img'); 
images.forEach(
    (image) => { image.addEventListener('mouseover', (item) =>
    {
        image.style.transfrom = "scale(1.1)";
        image.style.transition = 'all 0.5s'; 
    
})};

//2.keydown
document.addEventListener('keydown', (key) => {
  document.querySelector('p').textContent = 'You pressed the ' + key.code ; 
});
//3.wheel
//4.drag / drop
//5.load
//6.focus
//7.resize
//8.scroll
//9.select
//10.dblclick