let myInput = document.querySelector("input");
let myList = document.querySelector("ul");

const handleKeyPress = function(e){
    if(e.key == 'Enter'){
        let newLi = document.createElement("li");
        newLi.append(myInput.value);
        myInput.value = '';
        myList.appendChild(newLi)
    };
};

myInput.addEventListener('keypress', handleKeyPress);