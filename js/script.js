// Pseudo code
// a) Cache selectors
    // 1. Select the form Element
    // 2. Select and stores each field and values
    // 3. Create element to receive the message

// b) Listen to the submit event
    // 4. Create eventListener
    //     3.1. prevent default

// c) Check if fields has been filled
    // 5. check if each field has a value
    //     - If no - show which field has problem
    //     - If yes - chech if has the correct information type

// d) Show message


// 1. Select the form Element
const contactForm = document.querySelector('form');

// 4. Create eventListener
contactForm.addEventListener('submit',
function(event){
  // 3.1. prevent default
  event.preventDefault();

  // 2. Select each field
  const nameElement = document.querySelector('#name');
  const emailElement = document.querySelector('#email');
  const messageElement = document.querySelector('#message');

  // 2. Getting fields value entered by user
  nameElementValue = nameElement.value;
  emailElementValue = emailElement.value;
  messageElementValue = messageElement.value;

  //3. Create the HTML to be included to div.validationMessage 
    const pElement = document.createElement('p');

  // 5. check if each field has a value = Trueffy
  if(nameElementValue && emailElementValue && messageElementValue){
    // i) update the value of p with the message
      const message = `${nameElementValue}, your message has been sent successfully! You will soon receive an email with the update. Thanks for your message.`
      pElement.textContent = message;

    // ii) Show message: Append the p into the div.validationMessage
       document.querySelector('div.validationMessage');appendChild(pElement);

    //Clear the user's information
    nameElement.value = '';
    emailElement.value = '';
    messageElement.value = '';

  }else{
      // i) update the value of p with the message
       const message = `Unfortunately, your message was not sent. Please fill in all the fields so that we can send them.`
      
        pElement.textContent = message;

      // ii) Show message: Append the pElement into the div.validationMessage
       document.querySelector('div.validationMessage').appendChild(pElement);
  }
});