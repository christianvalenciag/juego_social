window.onload = function () {
  const level01 = () => {
    /** elemnto que se puede mover (draggable) */
    let circles = [].slice.call(
      document.querySelectorAll(".circle_draggable"),
      0
    );

    /** elemntos sobre los que podemos soltar (droppable) */
    const bars = [].slice.call(document.querySelectorAll(".bar_ondragg"), 0);

    let circleTwos = document.querySelector(".circle_two");

    let currentlyDragging = null;

    circles.forEach((circle) => {
      circle.ondragstart = function (ev) {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.setData("text/html", this.innerHTML);
        currentlyDragging = ev.target;
      };
    });

    bars.forEach((bar) => {
      bar.ondragenter = bar.ondragover = function (ev) {
        ev.preventDefault();
        bar.classList.add("hovering");
      };

      bar.ondragleave = function () {
        bar.classList.remove("hovering");
      };

      bar.ondrop = function (ev) {
        // Si el dropzone (bar) contiene un hijo con la misma clase que tiene el elemento que esto moviendo
        // Entonces muestra alert
        // else hago lo de abajo

        // console.log(currentlyDragging.className.split(" ")[0])

        if (bar.children.length > 0) {
          if (
            bar.children[0].classList.contains(
              currentlyDragging.className.split(" ")[0]
            ) ||
            bar.children.length > 1
          ) {
            alert("Este elemento ya está añadido");
          } else {
            var p_prime = currentlyDragging.cloneNode(true);
            bar.appendChild(p_prime);
            bar.classList.remove("hovering");
            // circleTwos.classList.add('margin_el');

            currentlyDragging = null;
          }
        } else {
          var p_prime = currentlyDragging.cloneNode(true);
          bar.appendChild(p_prime);
          bar.classList.remove("hovering");
          // circleTwos.classList.add('margin_el');

          currentlyDragging = null;
        }
      };
    });
  };

  level01();


  // ***********************  RESULTS  **************************


  // const level01_result = () => {
      
   let buttonResult = document.querySelector(".end_one");

    buttonResult.addEventListener("click", () => {
      let barOne = document.querySelector(".bar_one");
      let barTwo = document.querySelector(".bar_two");

      let classCircleOne = "circle_one";
      let classCircleTwo = "circle_two";

      let classBarOneCircleOne = barOne.children[0].className.split(" ")[0];
      let classBarTwoCircleTwo = barTwo.children[0].className.split(" ")[0];

      let deconstructor = document.querySelector(".option_01");
      let conservador = document.querySelector(".option_02");

      if (
        classCircleOne == classBarOneCircleOne &&
        classCircleTwo == classBarTwoCircleTwo
      ) {
        conservador.classList.add("visibility");
      } else {
        deconstructor.classList.add("visibility");
      }
    });
  


};
