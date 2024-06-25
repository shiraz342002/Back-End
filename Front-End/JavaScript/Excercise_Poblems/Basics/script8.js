// The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage

function saveNoteToLocalStorage(name,note){
    localStorage.setItem(name,note)
   console.log(`The value at ${key} is ${localStorage.getItem(key)}`)
}
saveNoteToLocalStorage("Shiraz","I love working out");