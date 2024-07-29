/* Theory
const array = [1, 2, 3, 6, 34];
const arrayString = [a, b, c, null, 12];

const array = new Array(1, 2, 3, 6, 34);

console.log(array.length);

console.log(array[0]);
console.log(array[array.length - 1]);

array[0] = "Hello";
console.log(array);
array[array.length] = World;
*/

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// console.log(inputElement.value);

// const notes = ["Записать блок про массивы", "Рассказать теорию объектов"];

/*
function render() {
 
     for (let i = 0; i < notes.length; i++) {
       listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
     }
 
     for (let note of notes) {
       listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
     }
}

render();
*/

/*
createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }
  // listElement.innerHTML

  listElement.insertAdjacentHTML(
    "beforeend",
    getNoteTemplate(inputElement.value)
  );
  inputElement.value = " ";
};
*/

/*
function getNoteTemplate(title) {
  return `
     <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span>${title}</span>
        <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-denger">&times;</span>
        </span>
    </li>`;
}
*/

/*
    Object Theory

const person = {
  firstName: "Evgeny",
  lastName: "Gor",
  year: 1990,
  hasGirlfriend: false,
  getFullName: function () {
    console.log(person.firstName + " " + person.lastName);
  },
};

console.log(person.year);
console.log(person["firstName"]);
const key = "hasGirlfriend";
console.log(person[key]);
person.hasGirlfriend = true;
console.log(person[key]);
person.getFullName();
*/

// ***

const notes = [
  {
    title: "Записать блок про массивы",
    comleted: false,
  },
  {
    title: "Рассказать теорию объектов",
    comleted: true,
  },
];

function render() {
  //   for (let i = 0; i < notes.length; i++) {
  //     listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i]));
  //   }

  for (let note of notes) {
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(note));
  }
}

render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) {
    return;
  }

  const newNote = {
    title: inputElement.value,
    comleted: false,
  };

  listElement.insertAdjacentHTML("beforeend", getNoteTemplate(newNote));
  inputElement.value = " ";
};

function getNoteTemplate(note) {
  return `
       <li
          class="list-group-item d-flex justify-content-between align-items-center"
      >
          <span class="${
            note.comleted ? "text-decoration-line-through" : ""
          }">${note.title}</span>
          <span>
              <span class="btn btn-small btn-${
                note.comleted ? "warning" : "success"
              }">&check;</span>
              <span class="btn btn-small btn-denger">&times;</span>
          </span>
      </li>`;
}

// 2:25:51
