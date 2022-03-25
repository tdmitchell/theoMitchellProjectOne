// Pseudo code

// a) Cache selectors
    // 1. Select the form Element
    // 2. Select each field

// b) Listen to the submit event
    // 3. Create eventListener
    //     3.1. prevent default

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

// Getting fields value entered by user
nameElementValue = nameElement.value;
emailElementValue = emailElement.value;
messageElementValue = messageElement.value;


// 3. Create eventListener
contactForm.addEventListener('submit',
function(event){
  // 3.1. prevent default
  event.preventDefault();

  // 4. check if each field has a value = Trueffy       //(length !=0)
  if(nameElementValue){
    //4.1. Create the HTML to be included to ul.validationMessage 
    const listItemElement = document.createElement('li');
    const pElement = document.createElement('p');
    // i) update the value of p with the message
      const message = `${nameElementValue}, your message was sent to our organization! You will receive an email answering this message soon.`
      pElement.textContent = message;

    // ii) Append the pElement into the listItemElement    
      listItemElement.appendChild(pElement);
      console.log(listItemElement.textContent);

    // iii) Append the listItemElement into the ul
       document.querySelector('ul').appendChild(listItemElement);

    //Clear the user's information
    nameElement.value = '';
    emailElement.value = '';
    messageElement.value = '';

  }else{
    console.log("not preenchido");
  }



  //Test
  console.log("Submited!");

});

// 4. check if each field has a value (length !=0)


// 5. Compare if values correspond to the expected field value