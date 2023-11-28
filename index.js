function Author(n,b,nat){
this.name = n;
this.birthYear = b;
this.nationality = nat;

}

function Book(t,a,g,p){

    this.title = t;
    this. author = a;
    this.genre = g;
    this.price = p;
}
var Author1= new Author('Munshi premchand',1880,'India')
var Book1= new Book('गोदान, gōdān, lit. Cow donation',Author1,'Novel',299)

console.log(Book1)
