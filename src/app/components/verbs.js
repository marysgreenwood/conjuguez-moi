//verb array stores correct conjugation
//for NEXT TIME--how to access
var verbs = {
  etre: [
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
