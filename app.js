let pronoun = ['the','our','my', 'this', 'that'];
let adj = ['great', 'big', 'nice', 'pretty', 'giant'];
let noun = ['jogger','racoon', 'mamut', 'cat', 'fox'];
let domain = ['.com', '.cl', '.org', '.us', '.dev']
const domainGenerator = () => {
    
    for(p of pronoun) {
        for (a of adj){
            for (n of noun){
                for (d of domain) {
                    console.log(p + a + n + d)                   
                }
                
            }
        }       
    }
}
domainGenerator();