//verb array stores correct conjugation
//for NEXT TIME--how to access
var verbs = {
  être: [
    { subject: "je", verb: "suis" },
    { subject: "tu", verb: "es" },
    { subject: "il", verb: "est" },
    { subject: "elle", verb: "est" },
    { subject: "on", verb: "est" },
    { subject: "nous", verb: "sommes" },
    { subject: "vous", verb: "êtes" },
    { subject: "ils", verb: "sont" },
    { subject: "elles", verb: "sont" },
  ],
  parler: [
    { subject: "je", verb: "parle" },
    { subject: "tu", verb: "parles" },
    { subject: "il", verb: "parle" },
    { subject: "elle", verb: "parle" },
    { subject: "on", verb: "parle" },
    { subject: "nous", verb: "parlons" },
    { subject: "vous", verb: "parlez" },
    { subject: "ils", verb: "parlent" },
    { subject: "elles", verb: "parlent" },
  ],
  manger: [
    { subject: "je", verb: "mange" },
    { subject: "tu", verb: "manges" },
    { subject: "il", verb: "mange" },
    { subject: "elle", verb: "mange" },
    { subject: "on", verb: "mange" },
    { subject: "nous", verb: "mangeons" },
    { subject: "vous", verb: "mangez" },
    { subject: "ils", verb: "mangent" },
    { subject: "elles", verb: "mangent" },
  ],
  avancer: [
    { subject: "j'", verb: "avance" },
    { subject: "tu", verb: "avances" },
    { subject: "il", verb: "avance" },
    { subject: "elle", verb: "avance" },
    { subject: "on", verb: "avance" },
    { subject: "nous", verb: "avançons" },
    { subject: "vous", verb: "avancez" },
    { subject: "ils", verb: "avancent" },
    { subject: "elles", verb: "avancent" },
  ],
  avoir: [
    { subject: "j'", verb: "ai" },
    { subject: "tu", verb: "as" },
    { subject: "il", verb: "a" },
    { subject: "elle", verb: "a" },
    { subject: "on", verb: "a" },
    { subject: "nous", verb: "avons" },
    { subject: "vous", verb: "avez" },
    { subject: "ils", verb: "ont" },
    { subject: "elles", verb: "ont" },
  ],
  finir: [
    { subject: "je", verb: "finis" },
    { subject: "tu", verb: "finis" },
    { subject: "il", verb: "finit" },
    { subject: "elle", verb: "finit" },
    { subject: "on", verb: "finit" },
    { subject: "nous", verb: "finissons" },
    { subject: "vous", verb: "finissez" },
    { subject: "ils", verb: "finissent" },
    { subject: "elles", verb: "finissent" },
  ],

  aller: [
    { subject: "je", verb: "vais" },
    { subject: "tu", verb: "vas" },
    { subject: "il", verb: "va" },
    { subject: "elle", verb: "va" },
    { subject: "on", verb: "va" },
    { subject: "nous", verb: "allons" },
    { subject: "vous", verb: "allez" },
    { subject: "ils", verb: "vont" },
    { subject: "elles", verb: "vont" },
  ],
  faire: [
    { subject: "je", verb: "fais" },
    { subject: "tu", verb: "fais" },
    { subject: "il", verb: "fait" },
    { subject: "elle", verb: "fait" },
    { subject: "on", verb: "fait" },
    { subject: "nous", verb: "faisons" },
    { subject: "vous", verb: "faites" },
    { subject: "ils", verb: "font" },
    { subject: "elles", verb: "font" },
  ],
  rendre: [
    { subject: "je", verb: "rends" },
    { subject: "tu", verb: "rends" },
    { subject: "il", verb: "rend" },
    { subject: "elle", verb: "rend" },
    { subject: "on", verb: "rend" },
    { subject: "nous", verb: "rendons" },
    { subject: "vous", verb: "rendez" },
    { subject: "ils", verb: "rendent" },
    { subject: "elles", verb: "rendent" },
  ],
  préférer: [
    { subject: "je", verb: "préfère" },
    { subject: "tu", verb: "préfères" },
    { subject: "il", verb: "préfère" },
    { subject: "elle", verb: "préfère" },
    { subject: "on", verb: "préfère" },
    { subject: "nous", verb: "préférons" },
    { subject: "vous", verb: "préférez" },
    { subject: "ils", verb: "préfèrent" },
    { subject: "elles", verb: "préfèrent" },
  ],
  prendre: [
    { subject: "je", verb: "prends" },
    { subject: "tu", verb: "prends" },
    { subject: "il", verb: "prend" },
    { subject: "elle", verb: "prend" },
    { subject: "on", verb: "prend" },
    { subject: "nous", verb: "prenons" },
    { subject: "vous", verb: "prenez" },
    { subject: "ils", verb: "prennent" },
    { subject: "elles", verb: "prennent" },
  ],
  boire: [
    { subject: "je", verb: "bois" },
    { subject: "tu", verb: "bois" },
    { subject: "il", verb: "boit" },
    { subject: "elle", verb: "boit" },
    { subject: "on", verb: "boit" },
    { subject: "nous", verb: "buvons" },
    { subject: "vous", verb: "buvez" },
    { subject: "ils", verb: "boivent" },
    { subject: "elles", verb: "boivent" },
  ],
};

const shuffleArray = (ar) => {
  ar.sort((a, b) => 0.5 - Math.random());
};

//var shuffled = { ...verbs };

var shuffled = JSON.parse(JSON.stringify(verbs));

for (const [key, value] of Object.entries(shuffled)) {
  shuffleArray(value);
}

export { verbs, shuffled };
