function validateForm() {
    var name = document.validate_form.firstname.value;
    var lname = document.validate_form.lastname.value;
    var text = document.validate_form.text.value;

        if(name == "" && lname == "" && text == ""){
            $(document.getElementsByName('firstname')).addClass('false');
            $(document.getElementsByName('lastname')).addClass('false');
            $(document.getElementsByName('text')).addClass('false');
            return false;
        }
        else if(name == "" || name.length <= 2){
           alert("First name is too short!, should be atleast 3 characters long.");
           document.validate_form.firstname.focus();
           $(document.getElementsByName('firstname')).addClass('false');
           return false;
        }

        else if(lname == "" || lname.length <= 2){
          alert("Last name is too short!, should be atleast 3 characters long.");
          document.validate_form.lastname.focus();
          $(document.getElementsByName('lastname')).addClass('false');
          return false;
      }

      else if(text == "" ) {
        alert("OOPS! The message is not there!");
        document.validate_form.text.focus();
        $(document.getElementsByName('text')).addClass('false');
        return false;
}}

function dropdown(){
    var x = document.getElementsByClassName("dropdown");
    $(x).toggleClass('d-block');
}
