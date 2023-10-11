const firebaseConfig = {
    apiKey: "AIzaSyD4TyXiIONpZ3CE8MSpG0aYsLDDEncyvGQ",
    authDomain: "mailfeedback-790e4.firebaseapp.com",
    databaseURL: "https://mailfeedback-790e4-default-rtdb.firebaseio.com",
    projectId: "mailfeedback-790e4",
    storageBucket: "mailfeedback-790e4.appspot.com",
    messagingSenderId: "410124683443",
    appId: "1:410124683443:web:a5ce7ee4e1d2cd7db708c6"
  };

  firebase.initializeApp(firebaseConfig);  

  var feedbackFormDB=firebase.database().ref('feedback-form'); 

  document.getElementById("feedback-form").addEventListener("submit", submitForm);

  function submitForm(e){
      e.preventDefault();
      
      var email = getElementVal('email');
      var message = getElementVal('message'); 
      console.log(email, message)
  }    

  const saveMessages = (email,message)=>{
    var newfeedBack = feedbackFormDB.push(); 

    newfeedBack.set({
        email:email,
        message:message
    })
  }

  const getElementVal = (id)=>{
    return document.getElementById(id).value;
  }