const userName = document.getElementById("username");
const saveScoreBtn = document.getElementById("submit-score");
document.getElementById("result").innerHTML = localStorage.getItem("username");
gameOverHtml.innerText = mostRecentScore;

userName.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !userName.nodeValue;
})

saveHighScore = e => {
    console.log("clicked the save button!");
    e.preventDefault();

}