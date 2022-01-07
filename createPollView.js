	// [√] Create textbox for question (title) 
	// [√] Create textboxes for each existing alternative (either radiobutton or textbox)
	// [√] create "+" buttons
	// [√] create "-" button
	// [√] Create finished button
	// [√] Crete username/loggoff button

function createPollView(){
	let html = "";

	// Add textbox for question/title
	html += /*html*/ `
					<input class="questionTextBox" onchange="setQuestionText(this)" type="text" placeholder="Question" value="${model.inputs.createNew.title}"/>
					<br/>
					<br/>
					`;
	
	console.log(model.inputs.createNew.alternatives.length);

	for(let i = 0; i < model.inputs.createNew.alternatives.length; i++){
		html += /*html*/ `
						<input
							class="alternativeName ${(model.inputs.createNew.alternatives[i].type == 1) ? 'textboxAlternative' : 'checkboxAlternative'}"
							onchange="setAlternativeText(this, ${i})"	type="text"
							placeholder="${(model.inputs.createNew.alternatives[i].type == 0) ? 'Checkbox' : 'Textbox'}"
							value="${model.inputs.createNew.alternatives[i].name}"
						/>
						<button onclick="removeAlternative(${i})">-</button>
						<br/>
						`;
	}
	html += /*html*/ `<button onclick="addAlternative()">+</button><br/>`;
	if(model.inputs.createNew.showTypeDropdown){
		html += /*html*/ `
			<div class="typeDropdown">
				<div onclick="createRadioButton()">Pre-defined answer</div>
				<hr/>
				<div onclick="createTextbox()">User-defined answer</div>
			</div>
			`;
	}


	html += /*html*/ `<br/><button onclick="finishPoll()">Finished</button>`;

	html += /*html*/ `<button class="userButton" onclick="logOut()">${model.app.userID}</button>`;
	


	document.getElementById("app").innerHTML = html;
}