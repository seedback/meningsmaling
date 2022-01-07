

function setQuestionText(element) {
	model.inputs.createNew.title = element.value;
}

function setAlternativeText(element, index) {
	model.inputs.createNew.alternatives[index].name = element.value;
}

function removeAlternative(index) {
	model.inputs.createNew.alternatives.splice(index, 1);
	createPollView();
}

function addAlternative() {
	if (model.inputs.createNew.showTypeDropdown) {
		model.inputs.createNew.showTypeDropdown = false;
	}
	else {
		model.inputs.createNew.showTypeDropdown = true;
	}
	createPollView();
}

function createRadioButton() {
	model.inputs.createNew.alternatives.push({ type: 0, name: "" });
	model.inputs.createNew.showTypeDropdown = false;
	createPollView();
}

function createTextbox() {
	model.inputs.createNew.alternatives.push({ type: 1, name: "" });
	model.inputs.createNew.showTypeDropdown = false;
	createPollView();
}

function finishPoll() {
	let newPoll = {
		ID: model.polls[model.polls.length - 1].ID + 1,
		userID: model.app.userID,
		title: model.inputs.createNew.title,
		alternatives: [],
		isEnded: false,
	};

	for (let i = 0; i < model.inputs.createNew.alternatives.length; i++) {
		newPoll.alternatives.push(
			{
				type: model.inputs.createNew.alternatives[i].type,
				name: model.inputs.createNew.alternatives[i].name,
				numVotes: 0,
				textboxAnswers: [],
				textboxAnswersNum: [],
			}
		);
	}

	model.polls.push(newPoll);
	model.inputs.createNew = {
		title: "",
		alternatives: [
			{
				type: 0,
				name: "",
			},
			{
				type: 1,
				name: "",
			},
		],
		showTypeDropdown: false,
	}

		updateView();
}