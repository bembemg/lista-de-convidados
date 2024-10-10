const input = document.querySelector("input");
const button = document.querySelector("button");

const guests = document.querySelector("ul")

button.addEventListener("click", function (event) {
    // console.log("Click");
    event.preventDefault();
    const itemText = input.value;
    const hasNumbers = /\d+/g;
    
    
    if (itemText !== "" && !hasNumbers.test(itemText)) {
        const newGuest = document.createElement("li");
        newGuest.classList.add("guest");
        
        const guestName = document.createElement("span");
        guestName.textContent = itemText;
        
        const delGuest = document.createElement("a");
        delGuest.classList.add("del-btn")
        
        const delImg = document.createElement("img");
        delImg.classList.add("del-img")
        delImg.src = "./icons/delete.svg"

        
        
        guests.prepend(newGuest);
        newGuest.appendChild(guestName)
        newGuest.appendChild(delGuest)
        delGuest.appendChild(delImg)
        
        
        delGuest.addEventListener("click", function() {
            newGuest.remove();
        })
        
        input.value = "";
    }
    else if (itemText !== "") {
        alert("Não é permitido adicionar números a lista.")
    }
});

function addGabriel() {
        const itemText = "Gabriel"; // itemText com string definida.
        const newGuest = document.createElement("li");
    newGuest.classList.add("guest");
    
    const guestName = document.createElement("span");
    guestName.textContent = itemText;
    
    const delGuest = document.createElement("a");
    delGuest.classList.add("del-btn");
    
    const delImg = document.createElement("img");
    delImg.classList.add("del-img");
    delImg.src = "./icons/delete.svg";
    
    guests.prepend(newGuest);
    newGuest.appendChild(guestName);
    newGuest.appendChild(delGuest);
    delGuest.appendChild(delImg);
    
    delGuest.addEventListener("click", function() {
        newGuest.remove();
    });
}

document.addEventListener("DOMContentLoaded", addGabriel)