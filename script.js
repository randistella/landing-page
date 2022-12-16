function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    } 
  }

  function ty() {
    let myTy = "Thank you! Your Ebook should arrive shortly!";
    alert(myTy);
  }