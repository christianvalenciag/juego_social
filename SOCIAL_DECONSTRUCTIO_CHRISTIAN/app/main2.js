window.onload = function () {
    
  
    const level02 = () => {
      //let totalCircles = document.querySelectorAll('.circle_only');
      const totalPurple = [].slice.call(
        document.querySelectorAll(".purple_circle"),
        0
      );
      const totalBlue = [].slice.call(
        document.querySelectorAll(".blue_circle"),
        0
      );
  
      // TENER EL CUENTA QUE SI TIENE .GRADIENT, ENTONCES QUE LO QUITE
  
      totalPurple.forEach((purple) => {
        purple.addEventListener("click", () => {
          if (purple.parentElement.lastElementChild.classList.contains("blue")) {
            //se tiene que pintar tambien el purple para quitar el gradient
            purple.parentElement.lastElementChild.classList.toggle("purple");
  
            purple.parentElement.lastElementChild.classList.toggle("gradient");
            purple.classList.toggle("purple");
          } else {
            purple.parentElement.lastElementChild.classList.toggle("purple");
            purple.classList.toggle("purple");
          }
        });
      });
  
      totalBlue.forEach((blue) => {
        blue.addEventListener("click", () => {
          if (blue.parentElement.lastElementChild.classList.contains("purple")) {
            //se tiene que pintar tambien el blue para quitar el gradient
            blue.parentElement.lastElementChild.classList.toggle("blue");
  
            blue.parentElement.lastElementChild.classList.toggle("gradient");
            blue.classList.toggle("blue");
          } else {
            blue.parentElement.lastElementChild.classList.toggle("blue");
            blue.classList.toggle("blue");
          }
        });
      });
    };
  
    level02();
  
    // ***********************  RESULTS  **************************
  
  
  

  
    const level02_result = () => {
      
  
      let buttonResult01 = document.querySelector(".end_two");
  
      buttonResult01.addEventListener("click", () => {
        let totalGradient = [].slice.call(document.querySelectorAll(".gradient"),0).length;
        console.log(totalGradient);
  
        let deconstructor = document.querySelector(".option_01");
        let conservador = document.querySelector(".option_02");
  
        if (totalGradient >= 5) {
          deconstructor.classList.add("visibility");
        } else {
          conservador.classList.add("visibility");
        }
      });
    };
  
    level02_result();
  
  
  };
  