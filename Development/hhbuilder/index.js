
window.onload = (event) => {
    let addButton = document.querySelector('.add')
    let submitButton = document.querySelector('button[type="submit"]')

    addButton.addEventListener("click", addFamilyMember)
    submitButton.addEventListener("click", submitFamily)
}

