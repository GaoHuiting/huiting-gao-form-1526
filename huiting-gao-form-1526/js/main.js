// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

let fullname=document.querySelector('#fullname');
let email=document.querySelector('#email');
let message=document.querySelector('#message');



// Declare variable that will 
// store regular expression for email

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors



//    +-----------+    
//    | FULL NAME |
//    +-----------+
    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.

function validate(){
    console.clear();
    let data={};
    let errors=[];
    let fnValue = fullname.value;
    let emailValue = email.value;
    let messageValue = message.value;
    let fm = document.querySelector('form'); 
    
    if(fnValue =="") {
        errors[0]= "Full name is missing";
    } else {
        data.fullname =fnValue;
    } 
    
    if(messageValue =="") {
        errors[1]= "Message is missing";
    } else {
        data.message=`Message here: ${messageValue}`;
    } 
    
    let re = /^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i.test(emailValue);
    
    if(emailValue=="") {
        errors[2]= "Email is missing";
    } else if(re==true){
        data.email = emailValue;
    } else {
        errors[2]= "Email format is incorrect";
    }

    
    if(errors.length > 0) {
        console.log("ERRORS");
        console.log(errors);
        
    } else {
        console.log("COLLECTED DATA:");
        console.log(data);
        fm.clear();
        
    }
     
}


//    +-------+    
//    | EMAIL | 
//    +-------+
    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.



//    +---------+    
//    | MESSAGE | 
//    +---------+
    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.


//    +-----------------+
//    | FEEDBACK/ERRORS |
//    +-----------------+
    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.

// Close your function here
    
// Register your form to "click" event.
