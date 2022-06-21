let pron = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let path = ['.com' , '.io' , '.net']


let DomainGen = (pron, adj, noun, path) => { 
for (let i = 0; i < pron.length ; i++) { 
  for (let j = 0; j < adj.length ; j++) {
   for (let k = 0; k < noun.length ; k++) {
     for (let l = 0; l < path.length ; l++) {

console.log(`${pron[i]}${adj[j]}${noun[k]}${path[l]}`);

      }
     }
    }
  }
}


DomainGen(pron, adj, noun, path);