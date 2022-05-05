function register() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var pass1 = document.getElementById("pass1").value;
  var pass2 = document.getElementById("pass2").value;
  var vendedor = document.getElementById("vendedor").checked;
  var comprador = document.getElementById("comprador").checked;
  console.log(vendedor);

  if (
    name == "" ||
    email == "" ||
    phone == "" ||
    address == "" ||
    pass1 == "" ||
    pass2 == ""
  ) {
    swal({
      icon: "error",
      text: "Te falta llenar el Campo"
    });
  } else {

    swal({
       icon: "success",
        text: name + " tu Registro ha sido completado",
       timer: 20000,
     })    
      setTimeout(function() {
        if (vendedor) {
          window.location.href = "dashboard/";
        } else {
          window.location.href = "login.html";
        }
      }, 2000)

    
  }
}

function login() {
  var pass = document.getElementById("pass").value;
  var email = document.getElementById("email").value;

  if (email == "" || pass == "") {
    swal({
      icon: "error",
      text: "Error al logearse"
    });
  } else if (email == "admin@gmail.com") {
    swal({
        icon: "success",
        text: "Ingresando",
       
      });
      setTimeout(() => {
        window.location.href = "favorites.html"
      }, 3000);
     
    }else{
        alert(window.location.href = "favorites.html")
    }


}

//swal({
//   icon: "success",
//    text: name + "Registro completado",
//   timer: 90000,
// })
