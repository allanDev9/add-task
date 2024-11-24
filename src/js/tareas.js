function agregarTarea() {
  //Obtenemos el campo de la tarea
  let maxTareas = 3;
  let listaTareas = document.getElementById("listaTareas");
  let btnAgregar = document.getElementById("btn-agregar");
  
  //Verificar si se ha alcanzado el limite de tareas
  if (listaTareas.children.length >= maxTareas) {
    btnAgregar.disabled = true; //Desactivar botón de agregar tareas cuando se llega al límite
    alert("Llegaste al límite de tareas permitidas (" + maxTareas + ")");
    return;
  }
  let nuevaTareaTexto = document.getElementById("nuevaTarea").value;
  let textoInput = document.getElementById("nuevaTarea");
  let botonAgregar = document.getElementById("btn-agregar");
  let mensaje = document.getElementById("mensaje");
  mensaje.style.color = "yellow";
  mensaje.style.fontWeight = "bold";
  
  //Validamos que la tarea no esté vacía
  if (nuevaTareaTexto === "" && nuevaTareaTexto <= 0 && nuevaTareaTexto >= 0) {
    mensaje.innerHTML = "El campo no puede estar vacío";
    return;
  } else if (!isNaN(nuevaTareaTexto)) {
    alert("No se permiten numeros");
    textoInput.value = "";
    return;
  }

  // Verificar si la tarea ya existe en la lista
  for (let tarea of listaTareas.children) {
    if (tarea.textContent.replace("Eliminar", "").trim() === nuevaTareaTexto) {
      mensaje.innerHTML = "Esta tarea ya existe";
      return;
    }
  }
  //Crear elemento de la lista
  let nuevaTarea = document.createElement("li");

  nuevaTarea.textContent = nuevaTareaTexto + " ";

  //Crear botón de eliminar
  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.addEventListener("click", () => {
    nuevaTarea.remove();
    //Si el numero de tareas es menor al limite, habilitamos el boton
    if (listaTareas.children.length < maxTareas) {
      btnAgregar.disabled = false;
    }
  });
  botonEliminar.className = "boton-eliminar"; // Añadir clase para estilos
  //Agregar boton de eliminar de la lista
  nuevaTarea.appendChild(botonEliminar);

  //Agregar el elemento/la tarea a la lista
  document.getElementById("listaTareas").appendChild(nuevaTarea);

  //Limpiar el cuadro de texto del nombre de la tarea
  textoInput.value = "";

  //Reiniciar el mensaje cuando se clickea en el input
  textoInput.addEventListener("click", () => {
    mensaje.innerHTML = "";
  });
}


 