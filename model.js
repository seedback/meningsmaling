const model = {
	// 1: tilstanden selve applikasjonen er i
	app: {
		// if userID != null make poll
		// if pollID != null show poll
		// if neither is null show admin page for poll (results)
		userID: null,
		pollID: null,
		page: "login", // login or poll
	},

	// 2: inputfelter til hver side
	inputs: {
		login: {
			userName: "",
			password: "",
		},
		createNew: {
			title: "",
			alternatives: [
				{
					type: null,
					name: "",
				},
			],
		},
	},

	// 3: felles data
	polls: [
		{
			ID: null,
			userID: null,
			title: "",
			alternatives: [
				{
					type: null, // 0 is radioButton, 1 is textbox
					name: "",
					numVotes: null,
					textboxAnswers: [],
				},
			],
			isEnded: false,
		}
	],
}