
var foto = document.getElementById("product-image");
var ul = document.getElementById("image-picker").addEventListener("click", function (event) {
  const id =  event.target;
  console.log(id);
  if (id.classList.contains("blue")) {
    foto.src = "img/iphone_blue.jpg";
  }
  else if(id.classList.contains("green")){
    foto.src = "img/iphone_green.jpg";
  }
  else if(id.classList.contains("silver")){
    foto.src = "img/iphone_silver.jpg";
  }  
  else if(id.classList.contains("golden")){
    foto.src = "img/iphone_golden.jpg";
  }
  else if(id.classList.contains("grafite")){
    foto.src = "img/iphone_grafite.jpg";
  }
});