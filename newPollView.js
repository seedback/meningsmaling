

function newPollView(){
	console.log("a");
	let html = "";

	html += /*html*/ `
		<div style="max-width: 50ch">
		A new poll was made successfully!<br/>
		Send this URL to the poll takers to get their opinions.<br/>
		And log in through the URL to get to the admin page where you can see the results as well as manage it.<br/>
		(There is currently no URL only a poll ID)<br/><br/>
		${model.polls[model.polls.length - 1].ID}

		<br/><br/>
		<br/><br/>

		<button onclick="model.app.page='login'; updateView();">Go back to frontpage</button>
		`

	document.getElementById("app").innerHTML = html;
}