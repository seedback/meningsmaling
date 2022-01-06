// [ ] Create div with title
// [ ] Username input 
// [ ] Password input 
// [ ] Login button

function loginView() {
    let html = "";

    html += /*html*/`
<div>Title/forside</div>
<br/>
<br/>
<input onchange="setUsername(this.value)" type="text" placeholder="Brukernavn"/>
<br/>
<input onchange="setPassword(this.value)" type="text" placeholder="Passord"/>
<br/>
<button onclick="login()">Logg inn</button>
    `;

    document.getElementById('app').innerHTML = html;
}

