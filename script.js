
let btn = document.getElementById("btn");

btn.addEventListener("click", async () => {
  try { 
    let slip = await fetchAdvice();
    displayAdvice(slip)
  }
  catch (error) {
    console.log(error);
  }
}) 

function fetchAdvice() {
  return fetch("https://api.adviceslip.com/advice")
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    else {
      console.log("The response is not okay!")
    }
  })
  .then(data => {
    return data;
  })
}

function displayAdvice(slip) {
  let main = document.querySelector("main");
  let firstChild = main.firstElementChild;
  
  firstChild.textContent = `ADVICE #${slip.slip.id}`;
  firstChild.nextElementSibling.textContent = `"${slip.slip.advice}"`;
}

window.addEventListener("DOMContentLoaded", () => {
  let line = document.getElementById("lineimg");
  if (window.getComputedStyle(document.body).getPropertyValue("width") == "410px") {
    line.src = "./images/pattern-divider-mobile.svg";
  }
})