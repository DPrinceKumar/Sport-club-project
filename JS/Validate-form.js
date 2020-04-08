function validateform() {
      
    if( document.detail.name.value == "" ) {
       alert( "Please provide your Name!" );
       document.detail.name.focus() ;
       return false;
    }
    if( document.detail.email.value == "" ) {
       alert( "Please provide your Email!" );
       document.detail.email.focus() ;
       return false;
    }
    return(true);
}
function validateform() {
    var emailID = document.detail.email.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    
    if (atpos < 1 || ( dotpos - atpos < 2 )) {
       alert("Email id must contain '@' and Domain name ")
       document.detail.email.focus() ;
       return false;
    }
    return( true );
 }