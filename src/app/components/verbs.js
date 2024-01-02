//verb array stores correct conjugation
var etre = [
  { subject: "je", verb: "suis" },
  { subject: "tu", verb: "es" },
  { subject: "il", verb: "est" },
  { subject: "elle", verb: "est" },
  { subject: "on", verb: "est" },
  { subject: "nous", verb: "sommes" },
  { subject: "vous", verb: "êtes" },
  { subject: "ils", verb: "sont" },
  { subject: "elles", verb: "sont" },
];

//shuffle verb array
var arr = [...etre];
arr.sort((a, b) => 0.5 - Math.random());

export { etre, arr };
