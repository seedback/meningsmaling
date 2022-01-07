
function updateView(){
	if (model.app.page == "newpoll"){
		newPollView();
	}

	if (model.app.page == "login"){
		loginView();
	}

	else if(model.app.page == "poll"){
		if(model.app.pollID == null && model.app.userID == null){
			model.app.page = "login";
			updateView();
			return;
		}

		if(model.app.pollID == null && model.app.userID != null){
			createPollView();
			return;
		}

		if(model.app.pollID != null && model.app.userID == null){
			pollView();
			return;
		}

		if(model.app.pollID != null && model.app.userID != null){
			let curPoll;
			for (let i = 0; i < model.polls.length; i++) {
        if (model.app.pollID === model.polls[i].ID) {
            curPoll = model.polls[i];
        }
   		}

			if(curPoll.userID != model.app.userID){
				model.app.userID = null;
				pollView();
				return;
			}

			resultView();
			return;
		}
	}
}