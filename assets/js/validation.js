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
      timer: 20000
    });
    setTimeout(function() {
      if (vendedor) {
        window.location.href = "dashboard/index.html";
      } else {
        window.location.href = "login.html";
      }
    }, 2000);
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
      timer: 20000
    });
    setTimeout(function() {
      window.location.href = "dashboard/index.html";
    }, 2000);

    
  } else {
    swal({
      icon: "success",
      text: "Ingresando",
      timer: 20000
    });
    setTimeout(function() {
     
    window.location.href = "tienda.html";
    }, 2000);

  }
}


function perfilAdmin() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var pass1 = document.getElementById("pass1").value;
 
  swal({
        icon: "success",
        text: name + " Campos actualizados",
        timer: 20000
      });


  // if (
  //   name == "" ||
  //   email == "" ||
  //   phone == "" ||
  //   pass1 == "" 

  // ) {
  //   swal({
  //     icon: "error",
  //     text: "Te falta llenar el Campo"
  //   });
  // } else {
  //   swal({
  //     icon: "success",
  //     text: name + " Campos actualizados",
  //     timer: 20000
  //   });
    
  // }
}


function addProduct() {
  var name = document.getElementById("name").value;
  var price = document.getElementById("price").value;
  var place = document.getElementById("place").value;
  var img = document.getElementById("img").value;
 


  if (
    name == "" ||
    price == "" ||
    place == "" ||
    img == "" 

  ) {
    swal({
      icon: "error",
      text: "Te falta llenar un Campo"
    });


  } else {
    swal({
      icon: "success",
      text: "El producto " + name + " fue agregado",
      timer: 20000
    });
    setTimeout(function() {
      window.location.href = "agregar-producto.html";
    }, 2000);
    
  }
}



function pago() {
  
 
  swal({
    icon: "success",
    text: "Gracias por comprar en MercaCultivo"
  });
  setTimeout(function() {
    window.location.href = "tienda.html";
  }, 2000);

  
}


//swal({
//   icon: "success",
//    text: name + "Registro completado",
//   timer: 90000,
// })
