class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
}

function atacarheroi(nome, idade, tipo) {
  let ataque;
  switch (tipo) {
    case "Mago":
      ataque = "Magia!";
      break;
    case "Guerreiro":
      ataque = "Espada!";
      break;
    case "Monge":
      ataque = "Artes Marciais!";
      break;
    case "Ninja":
      ataque = "Shuriken!";
      break;
    default:
      ataque = "usou um ataque indefinido!";
  }

  console.log(`O ${tipo} ${nome} de ${idade} anos, atacou usando ${ataque}`);
}

const shadow = new Hero("Shadow", 450, "Mago");
const blade = new Hero("Blade", 53, "Guerreiro");
const darkBuddha = new Hero("Darkbuddha", 72, "Monge");
const hidden = new Hero("Hidden", 28, "Ninja");

atacarheroi(shadow.nome, shadow.idade, shadow.tipo);
atacarheroi(blade.nome, blade.idade, blade.tipo);
atacarheroi(darkBuddha.nome, darkBuddha.idade, darkBuddha.tipo);
atacarheroi(hidden.nome, hidden.idade, hidden.tipo);
