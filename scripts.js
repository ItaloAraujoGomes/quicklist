const input = document.getElementById("newItem")
const form = document.querySelector("form")
const fieldset = document.getElementById("items")
const image = document.querySelectorAll(".remove")
const removalAlert = document.querySelector(".removed")

function addItem(){
    const div = document.createElement("div")
    div.classList.add("item")

    const checkboxImage = document.createElement("div")
    checkboxImage.classList.add("checkbox-image")

    const inputCheckbox = document.createElement("input")
    inputCheckbox.setAttribute("type", "checkbox")
    inputCheckbox.setAttribute("name", "item")
    inputCheckbox.setAttribute("id", "item")

    const labelItem = document.createElement("label")
    labelItem.setAttribute("for", "item")
    labelItem.textContent = input.value

    const iconDelete = document.createElement("img")
    iconDelete.setAttribute("src", "/images/icon delete.svg")
    iconDelete.setAttribute("alt", "")
    iconDelete.classList.add("remove")

    fieldset.append(div)
    div.append(checkboxImage, inputCheckbox, labelItem, iconDelete)
}


input.addEventListener("input", () =>{
    const regex = /\d+/g
    input.value = input.value.replace(regex, "")
})

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    addItem()
})

fieldset.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove")) {
        const itemDiv = event.target.closest(".item");
        if (itemDiv) {
            itemDiv.remove();

            removalAlert.classList.add("show");
            setTimeout(() => {
                removalAlert.classList.remove("show")
            }, 2000);
            
        }
    }
});



/*const div2 = document.querySelector("label")
        console.log(div2.parentNode)
        */