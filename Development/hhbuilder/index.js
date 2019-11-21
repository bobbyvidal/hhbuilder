
window.onload = (event) => {
    let addButton = document.querySelector('.add')
    let submitButton = document.querySelector('button[type="submit"]')

    addButton.addEventListener("click", addFamilyMember)
    submitButton.addEventListener("click", submitFamily)
}

function getAge() {
    let ageInput = document.querySelector('input[name="age"]')
    let ageValue = parseInt(ageInput.value)

    if (isNaN(ageValue) || ageValue <= 0){
        alert("Please input at valid age.")
        return
    }
    return ageValue
}

function getRelationship() {
    let relationshipInput = document.querySelector('select[name="rel"]')
    let relationshipValue = relationshipInput.value

    if (relationshipValue === '') {
        alert("You must choose the appropriate relationship.")
        return
    }
    return relationshipValue

}

function getSmoker() {
    let smokerInput = document.querySelector('input[name="smoker"]')
    let smokerValue = smokerInput.checked

    return smokerValue
}

function createButton() {
    
    var btn = document.createElement("BUTTON")
    btn.innerHTML = "Remove"

    btn.addEventListener("click", removeFamilyMember)

    return btn
}