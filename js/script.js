//#region PseudoCode 
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
      // 6. Clear old message and Append new one
//#endregion

//Namespace
const app = {};

// 6. Clear old message and Append new one
app.showMessage = (messageElement) => {
  app.validationMessageDiv.innerHTML = '';
  app.validationMessageDiv.appendChild(messageElement);
}

// 4. Create eventListener
app.sendMessage = () =>{
  app.contactForm.addEventListener('submit',
  function(event){
    // 3.1. prevent default
    event.preventDefault();

    // 2. Select each field
    const nameElement = document.querySelector('#nameInContact');
    const emailElement = document.querySelector('#emailInContact');
    const messageElement = document.querySelector('#messageInContact');
    
    //3. Create the HTML to be included to div.validationMessage 
    const pElement = document.createElement('p');

    // 5. check if each field has a value = Trueffy
    if(nameElement.value && emailElement.value && messageElement.value){    
      // i) update the value of p with the message
      const message = `${nameElement.value}, your message has been sent successfully! You will soon receive an email with the update. Thanks for your message.`;
      pElement.textContent = message;

      // ii) Show message: Append the p into the div.validationMessage
      app.showMessage(pElement);    

      //Clear the user's information
      nameElement.value = '';
      emailElement.value = '';
      messageElement.value = '';

    } else{    
        // i) update the value of p with the message
        message = `Unfortunately, your message was not sent. Please fill in all the fields so that we can send them.`      
        pElement.textContent = message;

        // ii) Show message
        app.showMessage(pElement);
    }
  });
}

//init method
app.init = () => {
  // 1. Select the form Element
  app.contactForm = document.querySelector('form');

  //2. Getting div.validationMessage
  app.validationMessageDiv = document.querySelector('.validationMessage');

  //Call methods
  app.sendMessage();
}

app.init();