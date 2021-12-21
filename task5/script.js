let input = document.querySelector('input');
input.addEventListener('keyup', function() {

let paragraph = document.querySelector('#duplicateField');
paragraph.textContent = input.value;
})

let button = document.querySelector('button');
button.addEventListener('click', (event) => {
   console.log(input.value); 
   input.value = "";
   let paragraph = document.querySelector('#duplicateField');
   paragraph.textContent = input.value;
   event.preventDefault();
})