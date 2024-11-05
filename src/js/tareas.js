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

  //Validamos que la tarea no esté vacía
  if (nuevaTareaTexto === "" && nuevaTareaTexto <= 0 && nuevaTareaTexto >= 0) {
    alert("Debes ingresar una tarea");
    return;
  } else if (nuevaTareaTexto <= 0 || nuevaTareaTexto >= 0) {
    alert("No se permiten numeros");
    textoInput.value = "";
    return;
  }
  // Verificar si la tarea ya existe en la lista
  for (let tarea of listaTareas.children) {
    if (tarea.textContent.replace("Eliminar", "").trim() === nuevaTareaTexto) {
      alert("No puedes agregar una tarea igual a otra");
      return;
    }
  }
  //Crear elemento de la lista
  let nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = nuevaTareaTexto + " ";

  //Crear botón de eliminar
  let botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";
  botonEliminar.onclick = function () {
    nuevaTarea.remove();
    //Si el numero de tareas es menor al limite, habilitamos el boton
    if (listaTareas.children.length < maxTareas) {
      btnAgregar.disabled = false;
    }
  };
  botonEliminar.style.color = "white";
  botonEliminar.style.backgroundColor = "black";
  botonEliminar.style.padding = "4px";
  botonEliminar.style.borderRadius = "10px";
  botonEliminar.style.position = "relative";
  botonEliminar.style.minWidth = "60px";
  botonEliminar.style.textAlign = "center";
  //Agregar boton de eliminar de la lista
  nuevaTarea.appendChild(botonEliminar);

  //Agregar el elemento/la tarea a la lista
  document.getElementById("listaTareas").appendChild(nuevaTarea);

  //Limpiar el cuadro de texto del nombre de la tarea
  textoInput.value = "";
}
