let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function decrease() {
    count = count - 1
    countEl.innerText = count
}

function save() {
    let container = count + " - "
    saveEL.textContent += container
    countEl.textContent = 0
    count = 0
    console.log(count)
}

alert("RUN THAT CODE BACK, EA!")