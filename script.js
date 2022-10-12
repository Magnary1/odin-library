const inputTitle = document.getElementById(`title-input`)
const inputAuthor = document.getElementById(`author-input`)
const inputPages = document.getElementById(`pages-input`)
const inputRead = document.getElementById(`read-input`)
const submitInput = document.getElementById(`submit-input`)

let deleteButtons = document.querySelectorAll(`.delete-button`)
deleteButtons.forEach(button => button.addEventListener(`click`, deleteBook))

const table = document.querySelector(`table`)

submitInput.addEventListener(`click`, addBookToLibrary)

let myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    event.preventDefault()
    let newBook = new Book(
        inputTitle.value,
        inputAuthor.value,
        inputPages.value,
        inputRead.checked,
    )
    myLibrary.push(newBook)

    // ADDS BOOK TO THE LAST ROW OF TABLE
    const tableRow = document.createElement(`tr`)
    for (let x in myLibrary.at(-1)) {   // selects last item of myLibrary array
        if (tableRow.dataset.currentIndex == undefined) {
            tableRow.dataset.currentIndex = myLibrary.indexOf(newBook)
        }
        const tableData = document.createElement(`td`)

        if (myLibrary.at(-1)[x] === true) {                                // creates checkmark in table
            let readCheckBox = document.createElement(`input`)
            readCheckBox.type = "checkbox"
            readCheckBox.checked = true
            readCheckBox.classList.add(`readCheckmarks`)
            tableData.append(readCheckBox)
        } else if (myLibrary.at(-1)[x] === false) {
            let readCheckBox = document.createElement(`input`)
            readCheckBox.type = "checkbox"
            readCheckBox.checked = false
            readCheckBox.classList.add(`readCheckmarks`)
            tableData.append(readCheckBox)
        } else tableData.textContent = myLibrary.at(-1)[x]

        tableRow.append(tableData)
    }
    table.append(tableRow)

    // CREATES DELETE BUTTON
    let tableDelete = document.createElement(`td`)
    let deleteButton = document.createElement(`button`)
    deleteButton.textContent = `X`
    deleteButton.classList.add(`delete-button`)
    tableDelete.append(deleteButton)
    tableRow.append(tableDelete)
    let deleteButtons = document.querySelectorAll(`.delete-button`)
    deleteButtons.forEach(button => button.addEventListener(`click`, deleteBook))

    checkIfRead()
    deleteTextContent()
}

function deleteBook(e) {
    let bookPosition = e.target.parentElement.parentElement.dataset.currentIndex
    myLibrary.splice(bookPosition, 1)
    e.target.parentElement.parentElement.remove()
    let tableRow = document.querySelectorAll(`tr`)
    let pos = 0

    for (i = 1; i < myLibrary.length + 1; i++) {
        tableRow[i].dataset.currentIndex = i - 1
    }
}

function checkIfRead() {
    const readCheckmarks = document.querySelectorAll(`.readCheckmarks`)
    readCheckmarks.forEach(checkmark => checkmark.addEventListener(`click`, changeReadStatus))
}

function changeReadStatus(e) {
    let bookPosition = e.target.parentElement.parentElement.dataset.currentIndex
    if (myLibrary[bookPosition].read === true) {
        myLibrary[bookPosition].read = false
    } else myLibrary[bookPosition].read = true
}

function deleteTextContent() {
    inputTitle.value = ``
    inputAuthor.value = ``
    inputPages.value = ``
    inputRead.checked = false
}

function firstAttemptOfAddingTable() {
    //MANUALLY GOES THROUGH EACH INPUT AND ADDS TO TABLE

    let tableRow = document.createElement(`tr`)
    let tableTitle = document.createElement(`td`)
    let tableAuthor = document.createElement(`td`)
    let tablePages = document.createElement(`td`)
    let tableRead = document.createElement(`td`)
    let tableDelete = document.createElement(`td`)
    let deleteButton = document.createElement(`button`)

    tableTitle.textContent = myLibrary.at(-1).title
    tableAuthor.textContent = myLibrary.at(-1).author
    tablePages.textContent = myLibrary.at(-1).pages
    tableRead.textContent = myLibrary.at(-1).read



    deleteButton.textContent = `X`
    deleteButton.classList.add(`delete-button`)
    tableDelete.append(deleteButton)

    tableRow.append(tableTitle)
    tableRow.append(tableAuthor)
    tableRow.append(tablePages)
    tableRow.append(tableRead)
    tableRow.append(tableDelete)
    table.append(tableRow)
}
function addWholeLibrary() {
    // ADDS WHOLE LIBRARY ARRAY TO TABLE
    for (let x in myLibrary) {
        const tableRow = document.createElement(`tr`)            //creates each row of the library
        for (let y in myLibrary[x]) {                            // gets each property of each item
            const tableData = document.createElement(`td`)       // creates each box
            tableData.textContent = myLibrary[x][y]              // adds property text
            tableRow.append(tableData)                           // adds box to the row
        }
        table.append(tableRow)                                   // adds the row to the table
    }

}