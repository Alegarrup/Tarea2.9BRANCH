const listaTareas = document.querySelector("[id='lista-tareas']");
const inputNuevaTarea = document.querySelector("#input-nueva-tarea");
const botonAgregarTarea = document.querySelector(
  "button[id='boton-nueva-tarea']"
);

const tareas = [];

const app = {
  tareas: tareas,
  listaTareas: listaTareas,
  inputNuevaTarea: inputNuevaTarea,
};

function crearTarea(titulo, estaCompletada = false) {
  return {
    id: Date.now(),
    titulo,
    estaCompletada,
  };
}

function agregarTareaALista(tarea, listaTareas) {
  const elementoTarea = crearElementoTarea(tarea);
  listaTareas.appendChild(elementoTarea);
}

function agregarTarea(app) {
  const nuevoTituloTarea = app.inputNuevaTarea.value;
  const nuevaTarea = crearTarea(nuevoTituloTarea);

  app.tareas.push(nuevaTarea);
  agregarTareaALista(nuevaTarea, app.listaTareas);
}

function crearElementoTarea(tarea) {
  const elementoTarea = document.createElement("li");

  const checkboxTarea = document.createElement("input");
  checkboxTarea.type = "checkbox";
  checkboxTarea.checked = tarea.estaCompletada;

  const textoTarea = document.createElement("span");
  textoTarea.textContent = tarea.titulo;
  textoTarea.classList.toggle("completada", tarea.estaCompletada);
  botonBorrarTarea = document.createElement("button");
  botonBorrarTarea.textContent = "Eliminar";
  botonBorrarTarea.className = "boton-eliminar";
  botonBorrarTarea.addEventListener("click", () => {});
  const divCheckSpan = document.createElement("div");
  divCheckSpan.appendChild(checkboxTarea);
  divCheckSpan.appendChild(textoTarea);
  elementoTarea.appendChild(divCheckSpan);
  elementoTarea.appendChild(botonBorrarTarea);

  return elementoTarea;
}
botonAgregarTarea.addEventListener("click", () => {
  agregarTarea(app);
});
