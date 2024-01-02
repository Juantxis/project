function generarPaginas() {
  for (let index = 0; index < 10; index++) {
    
    let pronoun = ['the', 'our', 'tha','he'];
    let adj = ['great', 'big', 'small', 'awesome'];
    let noun = ['jogger', 'racoon', 'bird', 'dog'];
    let DNS = ['.com', '.net', '.cl', 'io'];

    const indiceAleatorio = Math.floor(Math.random() * pronoun.length);
    const indiceAleatorio1 = Math.floor(Math.random() * adj.length);
    const indiceAleatorio2 = Math.floor(Math.random() * noun.length);
    const indiceAleatorio3 = Math.floor(Math.random() * DNS.length);

    const elementoAleatorio = pronoun[indiceAleatorio];
    const elementoAleatorio1 = adj[indiceAleatorio1];
    const elementoAleatorio2 = noun[indiceAleatorio2];
    const elementoAleatorio3 = DNS[indiceAleatorio3];

    const excusaGenerada = elementoAleatorio + elementoAleatorio1 + elementoAleatorio2 + elementoAleatorio3;
    console.log(excusaGenerada);
  }
}

generarPaginas();

