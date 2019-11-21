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

function removeFamilyMember() {

    this.parentNode.remove()

}

function addFamilyMember(event) {
    
    event.preventDefault();

    let age = getAge();
    let relationship = getRelationship();
    let smoker = getSmoker();
    let button = createButton();

    console.log(relationship)
    
    let form = document.querySelector("form")
    let householdList = document.querySelector('.household')
    
    if (age && relationship !== undefined ){
        let familyMember = document.createElement("li")
        familyMember.textContent = `${age} ${relationship} ${smoker}`
        
        familyMember.appendChild(button)
        householdList.append(familyMember)
        setTimeout( () => {
            form.reset();
        }, 500)
    }

    return
    
}

function submitFamily(event) {
    
    event.preventDefault()
    
    let householdList = document.querySelector('.household')

    if(householdList.getElementsByTagName('li').length <= 0){
        alert("You are unable to submit a family with no one in it. Please add family members.")
        return;
    }    

    let familyObject = { household: [] }

    let members = householdList.children
    for (let i = 0; i < members.length; i++){
        let memberArray = members[i].textContent.split(' ')
        if(memberArray[2] === "falseRemove"){
            memberArray[2] = "false"
        }
        else if(memberArray[2] === "trueRemove"){
            memberArray[2] = "true"
        }
        
        let memberObject = {Age: parseInt(memberArray[0]), Relationship: memberArray[1], Smoker: memberArray[2]}
        familyObject.household.push(memberObject)
    }
    
    let debug = document.querySelector("pre")
    
    let stringifiedFamilyObject = JSON.stringify(familyObject)

    debug.textContent = stringifiedFamilyObject
    debug.style.display = "inline-block" ;

 
}