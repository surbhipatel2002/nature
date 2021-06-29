function setLocation() {
  window.location.href = "about.html";
}
function homepage() {
  window.location.href = "index.html";
}
function productpage(){
  window.location.href = "product.html";
}
function changeImage(data) {
  console.log(data)
  if(data=="first"){
    document.getElementById('myImage').src="images/images(1).jpg";
  }
  if(data=="second"){
    document.getElementById('myImage').src="images/lantern-light-pendant-wall-combo-of-three-matching-lamp-with-original-imaex9msgu6dsshj.jpeg";
  }
  if(data=="third"){
    document.getElementById('myImage').src="images/images.jpg";
  }
  if(data=="four"){
    document.getElementById('myImage').src="images/stripped-shade-wooden-table-lamp-by-the-light-house-stripped-shade-wooden-table-lamp-by-the-light-ho-k1jtnv.jpg";
  }

}

function review(){
  //Add
  document.getElementById("reviews").classList.add("active")
  document.getElementById("reviews").classList.add("show");
  document.getElementById("nav-review").classList.add("active");

  
  //Remove
  document.getElementById("specifications").classList.remove("show")
  document.getElementById("specifications").classList.remove("active");
  document.getElementById("nav-specification").classList.remove("active");
  

  document.getElementById("about").classList.remove("show");
  document.getElementById("about").classList.remove("active");
  document.getElementById("nav-about").classList.remove("active");
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