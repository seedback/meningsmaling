// [√] Show question/title 
// [√] Create alternatives with radio or textbox
// [√] Create sendin button
// [√] Create login button

function pollView() {
	let html = "";

	let curAppID = null;
	for (let i = 0; i < model.polls.length; i++) {
		if (model.polls[i].ID == model.app.pollID) {
			curAppID = i;
		}
	}

	html += /*html*/ `
		<div><h2>${model.polls[curAppID].title}</h2></div>
		`;

	for (let i = 0; i < model.polls[curAppID].alternatives.length; i++) {
		console.log('model.polls[curAppID].alternatives.name')
		if (model.polls[curAppID].alternatives[i].type == 0) {
			html += /*html*/ `
				<input class="answer" type="checkbox">
				${model.polls[curAppID].alternatives[i].name}
				<br/>
				`;
		}
		else if (model.polls[curAppID].alternatives[i].type == 1) {
			html += /*html*/ `
				${model.polls[curAppID].alternatives[i].name}
				<br/>
				<input class="answer" type="text" placeholder="${model.polls[curAppID].alternatives[i].name}">
				`;
		}

	}

	html += /*html*/ `
		<br/>
		<br/>
		<button class="answerButton" onclick="submitAnswer()">Submit</button>
		`;

	html += /*html*/ `
		<button class="userButton" onclick="logIn()">Log In</button>
		`;


	document.getElementById('app').innerHTML = html;
}