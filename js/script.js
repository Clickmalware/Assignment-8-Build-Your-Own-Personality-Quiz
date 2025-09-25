console.log("script.js connected!");

let buttons = document.querySelectorAll(".btn.btn-outline-primary.w-100.answer-btn");
let points = 0;
let totalPoints = 0; 

buttons.forEach(function(button){
    button.addEventListener("click", function() {
    let parent = button.parentElement;

    // DESELECT ALL BUTTONS IN THE SAME QUESTION
    let siblings = parent.querySelectorAll(".btn.btn-primary.w-100.answer-btn");
    siblings.forEach(function(sibling) {
      sibling.classList.remove("btn-primary");
      sibling.classList.add("btn-outline-primary");
    });   
   
    // HIGHLIGHT THE SELECTED ANSWER
    button.classList.remove("btn-outline-primary");
    button.classList.add("btn-primary");

    // RECORD THE SELECTED ANSWER
    let answer = button.getAttribute("data-answer");
    let question = parent.getAttribute("data-question");
    console.log("Question: " + question + ", Answer: " + answer);

    // Assign and store points per question based on answer
    if (answer === "A") {
      points = 1 + points;
    } else if (answer === "B") {
      points = 2 + points;
    } else if (answer === "C") {
      points = 3 + points;
    } else if (answer === "D") {
      points = 4 + points;
    }
    // STORE THE ANSWER IN LOCAL STORAGE
    localStorage.setItem(question + "_points", points);
  //add all answers to a total point value
    localStorage.setItem(question, answer);
    console.log("Points for " + question + ": " + points);
    // Store points in localStorage and calculate total points
    localStorage.setItem(question + "_points", points);
    console.log("Points stored in localStorage for " + question + ": " + localStorage.getItem(question + "_points"));


  });
  
    console.log("Total Points: " + points);
    localStorage.setItem("totalPoints", points);
    console.log("Total Points stored in localStorage: " + localStorage.getItem("totalPoints"));     

})

   // On submit button click, calculate total points and show result
    let submitButton = document.getElementById("show-result");
    submitButton.addEventListener("click", function() {
      totalPoints = points; 
      console.log("Total Points on submit: " + totalPoints);
    
      let resultText = "";
      if (totalPoints >= 5 && totalPoints <= 8) {
        resultText = "You are a calm person.";
      } 
        else if (totalPoints >= 9 && totalPoints <= 12) {
        resultText = "You are an outgoing person.";
      }
        else if (totalPoints >= 13 && totalPoints <= 16) {
        resultText = "You are a creative person.";
      }
        else if (totalPoints >= 17 && totalPoints <= 20) {
        resultText = "You are a adverurous person.";
      } 
        else {
        resultText = "Please answer all questions to see your result.";
      }
      document.getElementById("result-text").innerText = resultText;
      console.log("Result displayed: " + resultText);
    });