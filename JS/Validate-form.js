function validateform() {

    var emailID = document.detail.email.value;
    x = emailID.indexOf("@");
    y = emailID.lastIndexOf(".");
    
    if (x < 1 || ( y - x < 2 )) {
       alert("Email id must contain '@' and Domain name ")
       document.detail.email.focus() ;
       return false;
    }
          
    if( document.detail.name.value == "" ) {
      alert( "Please provide your Name!" );
      document.detail.name.focus() ;
      return false;
   }
    return( true );
 }