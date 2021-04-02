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
    '<img src="./resources/ishgard.jpg" alt="An artistic rendition of the Holy See of Ishgard" title="The Holy See of Ishgard"/>' +
    '<div class="textbox">' +
    '<p>Born in the Holy See, the daughter of a nobleman\'s mistress, Ilya was ill poised for prosperity from the start, but that she bore ' +
    'no traces of an Elezen sire, betraying her mother\'s "infidelity" to the lord whose house provided her comforts did little to help the matter.' +
    '  Having offended the lord not only with her pregnancy, but with the birth of a child that was most certainly not his, Ilya\'s mother found ' +
    'herself turned out of her position, her infant child in tow.  For a time, the woman held out hope of finding a new patron within Ishgard, but ' +
    'after a few failed years of searching, she gave up, bartering for passage with a merchant bearing Ishgardian geldings to sell to the Grand Companies.</p>' +
    '<p>The merchant\'s caravan eventually reached Ul\'dah, and it was here that mother and child departed.  The See had been ill suited to a woman' +
    ' of Ilya\'s mother\'s particular talents, but Ul\'dah, the jewel of the sands, was a beast of a very different colour, and here, she flourished.' +
    '  Indeed, it was only her own inconstancy and the speed with which she grew bored of her daliances, coupled with the copious wealth within the sands,' +
    ' that ever served to hinder the woman in her pursuit of a life of comfort and ease.</p>' +
    '<p>From an early age, there was no question what path had been laid before Ilya\'s feet, but it never sat well with the child, and her perpetual ' +
    'inability to be properly cognizant fo social cues did little to aid the matter.  Her mother never gave up, only too eager to transform her clever, precocious' +
    ' offspring into the perfect little prop, but as time went on, it became more and more clear that, while she might be able to adopt the appearance ' +
    'and wit her mother so desired of her, the charm, social grace, and ambition were all quite entirely beyond her.</p>' +
    '<p>It was among the Thaumaturges that Ilyanith first found a place that felt, if not right, at least infinitely more familiar and comfortable than the ' +
    'vaunted halls and draping elegance that her mother so aggressively pursued.  Eventually, though her mother never gave up on holding her up as a prop, ' +
    'she did resign herself to the fact that it was unlikely she would ever make of her daughter what she had made of herself.  It was far from ideal, but at ' +
    'least the child still served to demonstrate her own beauty and intellect.  It would do.</p>' +
    '</div>' +
    '<div class="journalbox">' +
    '<p>I was too young to remember the place.  Why, then, did it feel so familiar to return?</p>' +
    '</div>' +
    '<div class="textbox">' +
    '<p>Life continued like that for Ilya for some time, with her free time spent almost invariably buried in a tome in a quiet corner somewhere and "home" ' +
    'becoming ever less a one.  As Ilya began to question the ethics of her mother\'s arrangements and grew more resistant to indulging the fashions her ' +
    'mother favoured, a rift grew between the two that continued to widen until, eventually, matters came to a head.</p>' +
    '<p>It was, ironically, no act of her mother\'s that set matters in motion, nor even of one of her patrons, but rather, of her favourite patron\'s son, ' +
    'who returned home from a night of enthusiastic revelry reeking of liquor and clearly not entirely lucid.  When he came upon Ilya, a few stray comments ' +
    'and her usual lack of social grace quickly ignited the tempestuous situation, and before long, the flash of a blade crossed her face, the wild swing too ' +
    'shallow to do any real or lasting harm, but still more than sufficient to send the girl fleeing to the only place that felt secure: the Thaumaturges.</p>' +
    '</div>' +
    '<img src="./resources/painted-uldah.jpg" alt="A watercolour painting of Ul\'dah, as viewed from high in the air" title="Ul\'dah"/>'

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