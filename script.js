function validate(){

  let username = document.getElementById("user").value
  let password = document.getElementById("passwd").value

  if(username == "pwcca" && password == "123") {
      window.location='https://github.com/pwccaa'
  } else {
      window.alert("Invalid user.")
  }
  
  }