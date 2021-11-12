function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  //             [negro,      azul,      verde,     rojo,     rosa,     amarillo,  blanco]
  const colors = ["#222831", "#14279B", "#4E9525", "#51050F","#FFC7C7", "#F0A500", "#D4ECDD"];
  var r = document.querySelector(':root');
  let colorIndex = parseInt(localStorage.getItem("colorIndex")) || 0;
  const updateColor = function() {
  const equis = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
  const check = '<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16"><path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/></svg>';
      document.getElementById("negroNav").innerHTML = document.getElementById("azulNav").innerHTML = document.getElementById("verdeNav").innerHTML = document.getElementById("rojoNav").innerHTML = document.getElementById("rosaNav").innerHTML = document.getElementById("amarilloNav").innerHTML = document.getElementById("blancoNav").innerHTML = equis;

      if(colorIndex == 0){
        r.style.cssText = '--titulos-color:#11999E; --secondary-color:gray; --text-color: #EEEEEE; --bkg-color:#111; --color-fondo:#222831;'
        document.getElementById("negroNav").innerHTML = check;
      }else if(colorIndex == 1){
        r.style.cssText = '--titulos-color:#F1F2EC; --secondary-color: gray; --text-color: #F1F2EC; --bkg-color:#14279B; --color-fondo:aliceblue;'
        document.getElementById("azulNav").innerHTML = check;
      }else if(colorIndex == 2){
        r.style.cssText = '--titulos-color:white; --secondary-color: #404040; --text-color: #EDF0C7; --bkg-color:#2B7046; --color-fondo:#44B26F;'
        document.getElementById("verdeNav").innerHTML = check;
      }else if(colorIndex == 3){
        r.style.cssText = '--titulos-color:#F2F2F2; --secondary-color: #D9BD30; --text-color: #F2F2F2; --bkg-color:#D90404; --color-fondo:#8C031C;'
        document.getElementById("rojoNav").innerHTML = check;
      }
      else if(colorIndex == 4){
        r.style.cssText = '--titulos-color:#9A91AC; --secondary-color: #404040; --text-color: #9A91AC; --bkg-color:#FFD3D4; --color-fondo:#DDB8C4;'
        document.getElementById("rosaNav").innerHTML = check;
      }else if(colorIndex == 5){
        r.style.cssText = '--titulos-color:black; --secondary-color: gray; --text-color: white; --bkg-color:#F2CB05; --color-fondo:#12090B;'
        document.getElementById("amarilloNav").innerHTML = check;
      }
      else if(colorIndex == 6){
        r.style.cssText = '--titulos-color:#010D26; --secondary-color: #345B63; --text-color: #022859; --bkg-color:#F1F2EC; --color-fondo:#CDD6E1;'
        document.getElementById("blancoNav").innerHTML = check;
      }
  };
  document.querySelector(".negro").addEventListener("click", function() {
      colorIndex = 0;
      localStorage.setItem("colorIndex", colorIndex);
      updateColor();
  });
  document.querySelector(".azul").addEventListener("click", function() {
      colorIndex = 1;
      localStorage.setItem("colorIndex", colorIndex);
      updateColor();
  });
  document.querySelector(".verde").addEventListener("click", function() {
      colorIndex = 2;
      localStorage.setItem("colorIndex", colorIndex);
      updateColor();
  });
  document.querySelector(".rojo").addEventListener("click", function() {
      colorIndex = 3;
      localStorage.setItem("colorIndex", colorIndex);
      updateColor();
  });
  document.querySelector(".rosa").addEventListener("click", function() {
    colorIndex = 4;
    localStorage.setItem("colorIndex", colorIndex);
    updateColor();
});
document.querySelector(".amarillo").addEventListener("click", function() {
  colorIndex = 5;
  localStorage.setItem("colorIndex", colorIndex);
  updateColor();
});
document.querySelector(".blanco").addEventListener("click", function() {
colorIndex = 6;
localStorage.setItem("colorIndex", colorIndex);
updateColor();
});
  updateColor();