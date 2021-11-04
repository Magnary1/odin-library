const inputTitle = document.getElementById(`title-input`)
const inputAuthor = document.getElementById(`author-input`)
const inputPages = document.getElementById(`pages-input`)
const inputRead = document.getElementById(`read-input`)
const submitInput = document.getElementById(`submit-input`)

let deleteButtons = document.querySelectorAll(`.delete-button`)
deleteButtons.forEach(button => button.addEventListener(`click`, deleteBook))


const table = document.querySelector(`table`)

submitInput.addEventListener(`click`, addBookToLibrary)

console.log(inputRead.ch)

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
    for (let x in myLibrary.at(-1)) {
        const tableData = document.createElement(`td`)
        tableData.textContent = myLibrary.at(-1)[x]
        tableRow.append(tableData)
    }
    table.append(tableRow)



    let tableDelete = document.createElement(`td`)
    let deleteButton = document.createElement(`button`)
    deleteButton.textContent = `X`
    deleteButton.classList.add(`delete-button`)
    tableDelete.append(deleteButton)
    tableRow.append(tableDelete)
    let deleteButtons = document.querySelectorAll(`.delete-button`)
    deleteButtons.forEach(button => button.addEventListener(`click`, deleteBook))
}








function deleteBook(e) {
    e.target.parentElement.parentElement.remove()
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
            const tableRow = document.createElement(`tr`)
            for (let y in myLibrary[x]) {
                const tableData = document.createElement(`td`)
                tableData.textContent = myLibrary[x][y]
                tableRow.append(tableData)
            }
            table.append(tableRow)
        }
    
}