function validatelogin(){
    var Uname=document.login.Uname.value;
    if(Uname==""||Uname==null){
        alert("Please enter correct Username!")
        document.login.Uname.focus();
        return flase;
    }
    var passwd=document.login.passwd.value;
    if(passwd<6){
        alert("Password must be greater then 6 digit and must include spaecial character!")
        document.login.passwd.focus();
        return flase;
    }
    else{
        alert("You are Sucessfully Loged in!")
        return true;

    }
}
