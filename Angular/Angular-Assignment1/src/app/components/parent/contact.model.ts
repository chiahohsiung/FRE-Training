export class Contact {
    private name = "";

    constructor(name:string){
        this.name = name;
    }
    setName(name:string):void{
        this.name=name;
    }

    getName():string{
        return this.name;
    }
}
