const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox.png") {
        myImage.setAttribute("src", "images/firefox2.png");
    } else {
        myImage.setAttribute("src", "images/firefox.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozzila is cool, ${myName}`;
    console.log("new user created successfully!");
    console.error(`... ... ...`);
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
    console.clear;
}

myButton.onclick = () => {
    setUserName();
};

// Check if the user has already created an account
if (localStorage.getItem('hasAccount')) {
    alert('You already have an account!');
  } else {
    // Create the account
    localStorage.setItem('hasAccount', true);
  }

  function validateForm() {
    // Check if the user has already created an account
    if (localStorage.getItem('hasAccount')) {
      alert('You already have an account!');
      return false;
    } else {
      // Create the account
      localStorage.setItem('hasAccount', true);
      return true;
    }
  }



//  the if(!localStorage.getItem) the ! checks if that data exists, for example: if(!localStorage.getItem("tracing"))
// then do this and that.
