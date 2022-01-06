    // [√] Show question/title 
    // [ ] Show number of answers
    // [ ] Show alternatives with number of times chosen
    // [ ] Create end/download button
    // [ ] Create logout button
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
    <div>${(model.polls[curPollId].title)}</div>
    `;

    document.getElementById("app").innerHTML = html;
}