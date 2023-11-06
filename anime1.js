const affirmations = {
    1: "You're wonderful",
    2: "You are deserving of all the love in this world",
    3: "You're worth it",
    4: "You'll always have me",
    5: "I'm always proud of you",
    6: "You make life bearable for me",
    7: "I'm willing to take all the weight on your shoulder if life becomes too heavy",
    8: ""
};

const affirmationDiv = document.getElementsByTagName("div")[0];
const affirmationButton = document.getElementsByTagName("button")[0];
let currentAffirmationIndex = 1;

function displayNextAffirmation() {
    if (currentAffirmationIndex <= Object.keys(affirmations).length) {
        affirmationDiv.innerText = affirmations[currentAffirmationIndex];
        currentAffirmationIndex++;

        if (currentAffirmationIndex > Object.keys(affirmations).length) {
            // If all affirmations are displayed, you can redirect to the next page
            window.location.href = "newpage6.html";
        }
    }
}

affirmationButton.addEventListener("click", displayNextAffirmation);
