export class Profileclient  {

    Name:string
    Phone:number
    Id:string
    Pass:string
    constructor(Name:string,Phone:number,Id:string,Pass:string) {
        this.Name=Name
        this.Phone=Phone
        this.Id=Id
        this.Pass=Pass
    }
    setName(Name:string){
        this.Name=Name
    }
    getName(){
        return this.Name
    }
    setPhone(Phone:number){
        this.Phone=Phone
    }
    getPhone(){
        return this.Phone
    }
    getId(){
        return this.Id
    }
    setPass(Pass:string){
        this.Pass = Pass
    }
    getPass(){
        return this.Pass
    }
}