// [√] Show question/title 
// [√] Create alternatives with radio or textbox
// [√] Create sendin button
// [√] Create login button

function pollView() {
    let html = "";

        let curAppID = null;
        for(let i = 0; i < model.polls.length; i++) {
            if(model.polls[i].ID == model.app.pollID) {
                curAppID = i;
                }
            }

            html += /*html*/ `
                <div>${model.polls[curAppID].title}</div>
            `;

        for(let i = 0; i < model.polls[curAppID].alternatives.length; i++){
            console.log('model.polls[curAppID].alternatives.name')
            html += /*html*/ `
                <input type="${model.polls[curAppID].alternatives.type}">
                <div>${model.polls[curAppID].alternatives[i].name}</div>

        `;}
            html += /*html*/ `
                <button class="userButton" onclick="logOut()">${model.app.page}</button>
            `;
    

    document.getElementById('app').innerHTML = html;
}