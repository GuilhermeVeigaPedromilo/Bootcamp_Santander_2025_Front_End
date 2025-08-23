const pessoa = {
  nome: "Guilherme",

  // função normal → o this é o próprio objeto
  falarNormal: function() {
    console.log("Normal:", this.nome);
  },

  // arrow function → o this NÃO é o objeto, mas sim o escopo onde foi criada
  falarArrow: () => {
    console.log("Arrow:", this.nome);
  }
};

pessoa.falarNormal(); // Normal: Guilherme
pessoa.falarArrow();  // Arrow: undefined
