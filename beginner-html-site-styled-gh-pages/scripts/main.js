let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, Monde, desde JS';

myHeading.addEventListener("click", function(){alert("Aie ETV")});

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', '');
    } else {
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
});

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Votre nom, please');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Bienvenue '+myName;
}

if (!localStorage.getItem('nom')) {
    setUserName();    
}
else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Bienvenue de nouveau '+storedName;
}

myButton.addEventListener('click', function() {setUserName();})