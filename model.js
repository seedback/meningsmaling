const model = {
	// 1: tilstanden selve applikasjonen er i
	app: {
		// if userID != null make poll
		// if pollID != null show poll
		// if neither is null show admin page for poll (results)
		userID: "Team3",
		pollID: 0,
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
					type: 0,
					name: "",
				},
				{
					type: 0,
					name: "",
				},
				{
					type: 1,
					name: "",
				},
			],
		},
	},

	// 3: felles data
	polls: [
		{
			ID: 0,
			userID: "Team3",
			title: "Hvilket team er best?",
			alternatives: [
				{
					type: 0, // 0 is radioButton, 1 is textbox
					name: "Team 1",
					numVotes: 2,
					textboxAnswers: [],
					textboxAnswersNum: []
				},
				{
					type: 0, // 0 is radioButton, 1 is textbox
					name: "Team 2",
					numVotes: 3,
					textboxAnswers: [],
					textboxAnswersNum: []
				},
				{
					type: 0, // 0 is radioButton, 1 is textbox
					name: "Team 3",
					numVotes: 7,
					textboxAnswers: [],
					textboxAnswersNum: []
				},
				{
					type: 1, // 0 is radioButton, 1 is textbox
					name: "Annet",
					numVotes: 3,
					textboxAnswers: ["Lærerne", "Alumni"],
					textboxAnswersNum: [2, 1]
				},
			],
			isEnded: false,
		}
	],
}