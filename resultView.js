    // [√] Show question/title 
    // [√] Show number of answers
    // [√] Show alternatives with number of times chosen
    // [√] Create end/download button
    // [√] Create logout button
function resultView() {
    let html = "";
		let curPoll = null;
		let totalVotes = 0;

    //Finner riktig poll
    for (let i = 0; i < model.polls.length; i++) {
        if (model.app.pollID === model.polls[i].ID) {
            curPoll = model.polls[i];
        }
    }

    //Vis titelen
    html += /*html*/ `
			<div><h2>${(curPoll.title)}</h2></div><br/><br/>
			`;


		for(let i = 0; i < curPoll.alternatives.length; i++){
			totalVotes += curPoll.alternatives[i].numVotes;
		}

		html += /*html*/ `
			Antall svar: ${totalVotes}
			<br/>
			<br/>
			`

		for(let i = 0; i < curPoll.alternatives.length; i++){
			let curAlt = curPoll.alternatives[i];
			if (curAlt.type == 0)
				html += /*html*/ `
					${curAlt.name}: ${curAlt.numVotes}
					<br/>
					`
			else if(curAlt.type == 1){
				html += /*html*/ `
					${curAlt.name}: ${curAlt.numVotes}
					<br/>
					<div class="textboxAnswerBG">
					`

					for(let n = 0; n < curAlt.textboxAnswers.length; n++){
						html += /*html*/ `
							- ${curAlt.textboxAnswers[n]}: ${curAlt.textboxAnswersNum[n]}
							<br/>
							`
					}

					html += /*html*/ `
					</div>
					`
			}
		}

		html += /*html*/ `<br/>`

		if(!curPoll.isEnded){
			html += /*html*/ `
				<button onclick="endPoll(${curPoll.ID})">End Poll</button>
				`
		}
		else{
			html += /*html*/ `
				<button onclick="downloadPoll(${curPoll.ID})">Download</button>
				`
		}

		html += /*html*/ `<button class="userButton" onclick="logOut()">${model.app.userID}</button>`;

    document.getElementById("app").innerHTML = html;
}