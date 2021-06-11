function setLocation() {
  window.location.href = "about.html";
}
function homepage() {
  window.location.href = "index.html";
}

function submitFunction() {
  onkeyupFunction();
}

function onkeyupFunction() {
  var first = document.getElementById("first");
  var last = document.getElementById("last");
  var email = document.getElementById("email");
  var message = document.getElementById("message");

  if (first.value =="") {
    document.getElementById("first_name").innerHTML = "This field is required";
    first.classList.add("red_border");
  } else {
    document.getElementById("first_name").innerHTML = "";
    first.classList.remove("red_border");
  }

  
  if (last.value =="") {
    document.getElementById("last_name").innerHTML = "This field is required";
    last.classList.add("red_border");
  }
  else {
    document.getElementById("last_name").innerHTML = "";
    last.classList.remove("red_border");
  }


  
  if (email.value =="") {
    document.getElementById("your_email").innerHTML = "This field is required";
    email.classList.add("red_border");
  }
  else {
    document.getElementById("your_email").innerHTML = "";
    email.classList.remove("red_border");
  }


  
  if (message.value =="") {
    document.getElementById("your_message").innerHTML = "This field is required";
    message.classList.add("red_border");
  }
  else {
    document.getElementById("your_message").innerHTML = "";
    message.classList.remove("red_border");
  }
}