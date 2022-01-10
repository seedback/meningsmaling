
function endPoll() {
    let curPoll = null;
    for (let i = 0; i < model.polls.length; i++) {
        if (model.app.pollID === model.polls[i].ID) {
            curPoll = model.polls[i];
        }
    }
    curPoll.isEnded = true;
    updateView();
}

function downloadPoll() {
    let curPoll = null;
    for (let i = 0; i < model.polls.length; i++) {
        if (model.app.pollID === model.polls[i].ID) {
            curPoll = model.polls[i];
        }
    }
    if (curPoll.isEnded = true) {
    console.log(curPoll);
    }
}

function logOut(){
	model.app.userID = null;
	updateView();
}