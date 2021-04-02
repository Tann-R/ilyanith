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
    if (nav=="hooks") {
      document.getElementById("main").innerHTML=hooks;
    }
  }
}

let home = '<h1>Exploration - Discovery - Learning</h1>' +
    '<h2>"I don\'t want to believe.  I want to know." -Carl Sagan</h2>' +
    '<img src="./resources/ilya-at-limsa-1.jpg" alt="A closeup of a miqo\'te woman outside of Limsa Lominsa" title="Ilyanith Vhas" />' +
    '<div class="textbox">' +
    '<p>With an insatiable curiosity and an agile mind, Ilya is a clever and resourceful woman, perpetually eager to explore and discover ever more about the world around her.' +
    '  She is eternally questioning, both within and without, and more than one haples victim has been trapped beneath a flurry of questions.  Despite her willingness to pursue ' +
    'information, however, she should not be mistaken for outgoing; indeed, unless her curiosity is well piqued, it is rare for her to approach a stranger.  Instead, in crowds, ' +
    'she can most often be found occupying her time with people-watching silently.</p>' +
    '<p>Though not shy, as such, Ilyanith is socially awkward and frequently socially inept (and oblivious).  As such, she is prone to missing sometimes seemingly obvious social' +
    ' cues, apologizes often to excess out of an uncertainty as to whether or not she has commited some social faux pas, and blushes frequently and easily, much to her chagrin.</p>' +
    '<p>None of this, however, should be taken to mean that she is a fearful creature.  Though she seeks to avoid such awkwardness where possible, given the proper motivation, ' +
    'she can be fiercely passionate and even bold.  Ilya is marked by a strong, possibly overdeveloped sense of justice, quick to stick up for the underdog and only too willing to' +
    ' leap to the defense of the perceived defenseless, whether they ask it of her or no - a tendency that has more than once gotten her into trouble.</p>'
    '</div>'

let demographics = '<h1>Exploration - Discovery - Learning</h1>' +
    '<h2>"I don\'t want to believe.  I want to know." -Carl Sagan</h2>' +
    '<img src="./resources/ilya-in-fc-house-1.jpg" alt="A closeup of a miqo\'te woman sitting in an industrial structure" title="Ilyanith Vhas" />' +
    '<div class="textbox">' +
    '<table>' +
    '<tr><td><b>Nickname(s) / AKA</b></td><td><b>: </b>Ilya, Yani</td></tr>' +
    '<tr><td><b>Age</b></td><td><b>: </b>30</td></tr>' +
    '<tr><td><b>Sex / Gender</b></td><td><b>: </b>female / nonbinary (pronouns: any)</td></tr>' +
    '<tr><td><b>Orientation</b></td><td><b>: </b>demisexual panromantic' +
    '<tr><td><b>Relationship Status</b></td><td><b>: </b>single' +
    '<tr><td>&nbsp;</td><td>&nbsp;</td></tr>' +
    '<tr><td><b>Birthplace</b></td><td><b>: </b>Ishgard</td></tr>' +
    '<tr><td><b>Homeland</b></td><td><b>: </b>Ul\'dah</td></tr>' +
    '<tr><td><b>Residence</b></td><td><b>: </b>various innrooms' +
    '<tr><td>&nbsp;</td><td>&nbsp;</td></tr>' +
    '<tr><td><b>Job</b></td><td><b>: </b> machinist, astrologian</td></tr>' +
    '<tr><td><b>Role</b></td><td><b>: </b>damage, healer</td></tr>' +
    '</table>' +
    '</div>'

let history = '<h1>Exploration - Discovery - Learning</h1>' +
    '<h2>"I don\'t want to believe.  I want to know." -Carl Sagan</h2>' +
    '<div class="journalbox">' +
    '<p>Forthcoming.</p>' +
    '</div>'

let hooks = '<h1>Exploration - Discovery - Learning</h1>' +
    '<h2>"I don\'t want to believe.  I want to know." -Carl Sagan</h2>' +
    '<img src="./resources/ilya-near-crystal-tower-1.jpg" alt="A closeup of a miqo\'te woman examining a crystaline structure" title="Ilyanith Vhas" />' +
    '<div class="textbox">' +
    '<p><b>The Curiosity</b><br/>' +
    'Is there something atypical about your character?  Some notable characteristic, uncommon mannerism, unique area of expertise, or just interesting ' +
    'history or experience?  Ilya is interested.  She wants to know.</p>' +
    '<p>&nbsp;</p>' +
    '<p><b>The Advisor</b><br/>' +
    'Is there some matter on which your character needs some advice, or is there some lofty goal your character is pursuing that would benefit from having ' +
    'someone around to bounce ideas off of or to offer insights and unusual perspectives on?  Ilya may be your person.</p>' +
    '<p>&nbsp;</p>' +
    '<p><b>The Interloper</b><br/>' +
    'Look, it\'s not that Ilya is <i>trying</i> to get herself into trouble or go places she doesn\'t belong.  It just sort of comes naturally to her, whether ' +
    'she means it to or not.  Is there something your character is up to that is best kept quiet?  A secret, perhaps, that could be discovered that would be...' +
    'less than pleasing to have revealed?  A place where others do not belong?  If you\'re interested in exploring what might happen were that to occur, Ilya ' +
    'can probably help with that.</p>' +
    '<p>&nbsp;</p>' +
    '<p><b>Have another idea?</b><br/>' +
    'Talk to me!  I\'m very open to discussing other options.  These are just a few suggestions off the top of my head.  It is by no means an inclusive list!</p>' +
    '</div>'