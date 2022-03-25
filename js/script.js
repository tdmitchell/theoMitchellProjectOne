// Pseudo code

// a) Cache selectors
    // 1. Select the form Element
    // 2. Select each field

// b) Listen to the submit event
    // 3. Create eventListener
    //     - prevent default

// c) Check if fields has been filled
    // 4. check if each field has a value (length !=0)
    //     - If no - show which field has problem
    //     - If yes - chech if has the correct information type

// d) Check if fields are correct
    // 5. Compare if values correspond to the expected field value
    //     - If no - show which field has problem
    //     - If yes - allow submit and show message that comment/message was sent


// 1. Select the form Element
const contactForm = document.querySelector('form');

// 2. Select each field
const nameElement = document.querySelector('#name');
const emailElement = document.querySelector('#email');
const messageElement = document.querySelector('#message');

// 3. Create eventListener

contactForm.addEventListener('submit',
function(event){
  // - prevent default
  event.preventDefault();

});

// 4. check if each field has a value (length !=0)


// 5. Compare if values correspond to the expected field value
