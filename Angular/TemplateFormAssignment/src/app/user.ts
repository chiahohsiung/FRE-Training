export class User {
    
    public lastName!:string;
    public firstName!:string;
    public city!:string;
    public zipcode!:string;
    constructor(ln:string, fn:string, ci:string, zip:string){
        this.lastName = ln;
        this.firstName = fn;
        this.city = ci;
        this.zipcode = zip;
    }

}
