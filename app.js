let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["joger", "racoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let z = 0; z < adj.length; z++)
    for (let x = 0; x < noun.length; x++) {
      console.log(pronoun[i], adj[z], noun[x] + ".com");
    }
}
