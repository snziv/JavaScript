const ptags = document.querySelectorAll('p');
console.log(ptags[0]);

ptags.forEach(p=> p.textContent = 'Changed is good!')

const buttonElement = document.getElementById('clickMeBtn');

// For compatibility, a non-function object with a `handleEvent` property is
// treated just the same as a function itself.
// buttonElement.addEventListener('click', {
//     handleEvent: function (event) {
//       alert('Element clicked through handleEvent property!');
//     }
//   });
  
buttonElement.addEventListener('click', function(event){
    console.log('Click Me button clicked.')
    // alert('Click Me button clicked.')
    let searchBxEle = document.getElementById('searchBox');
    if(isNaN(searchBxEle.value) || searchBxEle.value < 1 || searchBxEle.value > 20)
    searchBxEle.value = '';
    else
    console.log(searchBxEle.value)
});

const searchBoxEle = document.getElementById('searchBox');

searchBoxEle.addEventListener('change', function(event){
    event.preventDefault();
    console.log(`change event ${event.value}`);
})
searchBoxEle.addEventListener('input', function(event){    
    console.log(`input event ${this.value}`);
    console.log(`input event target ${event.target.value}`);
})