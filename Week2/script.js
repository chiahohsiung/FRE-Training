console.log('welcome to week 2 at Antra')

function foo(a){
    console.log(arguments)
}
foo(1)

class person{
    constructor(name,age){
        this.name= name;
        this.age= age;
    }
    getName=()=>{
        console.log(this.name)
    }
}
const duy= new person('Duy',30)
duy.getName()