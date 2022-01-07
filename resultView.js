    // [√] Show question/title 
    // [ ] Show number of answers
    // [ ] Show alternatives with number of times chosen
    // [ ] Create end/download button
    // [√] Create logout button
function resultView() {
    let html = "";

    //Finner riktig pollId
    let curPollId = null;
    for (let i = 0; i < model.polls.length; i++) {
        if (model.app.pollID === model.polls[i].ID) {
            curPollId = i;
        }
    }

    //Vis titelen
    html += /*html*/ `
    <h1>${(model.polls[curPollId].title)}</h1>
    <!--Antall deltagere-->
    <div>${''}</div>
    `;

    //+ eventuelt download
    html += /*html*/ `<button onclick="endPoll()">End</button>`;

    html += `<button class="userButton" onclick="logOut()">${model.app.userID}</button>`;

    document.getElementById("app").innerHTML = html;
}