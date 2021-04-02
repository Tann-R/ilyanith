let activePg="home"
function active(nav) {
  if (nav!=activePg) {
    document.getElementById(activePg).className="nav-inactive";
    document.getElementById(nav).className="nav-active";
    activePg=nav;
    if (nav=="home") {
      document.getElementById("main").innerHTML=home;
    }
    if (nav=="demographics") {
      document.getElementById("main").innerHTML=demographics;
    }
    if (nav=="history") {
      document.getElementById("main").innerHTML=history;
    }
    if (nav=="gallery") {
      document.getElementById("main").innerHTML=gallery;
    }
  }
}

let home = '<h1>Exploration - Discovery - Learning</h1>' +
    '<h2>"I don\'t want to believe.  I want to know." -Carl Sagan</h2>' +
    '<img src="./resources/ilya-at-limsa-1.jpg" alt="A closeup of a miqo\'te woman outside of Limsa Lominsa" title="Ilyanith Vhas" />' +
    '<div class="textbox">' +
    '<p>This will be content.</p>' +
    '</div>'

let demographics = '<h1>Exploration - Discovery - Learning</h1>' +
    '<h2>"I don\'t want to believe.  I want to know." -Carl Sagan</h2>' +
    '<img src="./resources/ilya-in-fc-house-1.jpg" alt="A portrait of a bespectacled miqo\'te with white hair and blue eyes" title="Ilyanith Vhas, created with picrew.me" />' +
    '<div class="textbox">' +
    '<p><b>Nickname(s)/AKA:</b> Ilya, Yani</p>' +
    '<p><b>Age:</b> tbd</p>' +
    '<p><b>Birthplace:</b> Ishgard</p>' +
    '<p><b>Class:</b> machinist, astrologian</p>' +
    '<p><b>Role:</b> damage, healer</p>' +
    '</div>'

let history = '<h1>Exploration - Discovery - Learning</h1>' +
    '<h2>"I don\'t want to believe.  I want to know." -Carl Sagan</h2>' +
    '<div class="journalbox">' +
    '<p>Forthcoming.</p>' +
    '</div>'

let gallery = '<h1>Exploration - Discovery - Learning</h1>' +
    '<h2>"I don\'t want to believe.  I want to know." -Carl Sagan</h2>' +
    '<img src="https://img.nickpic.host/ajJyp1.png" alt="A portrait of a bespectacled miqo\'te with white hair and blue eyes" title="Ilyanith Vhas, created with picrew.me" />' +
    '<div class="textbox">' +
    '<p>Forthcoming.</p>' +
    '</div>'