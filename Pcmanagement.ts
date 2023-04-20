import {PC} from "./pc";
export class Pcmanagement{
    ListPc: PC[]=[]
    constructor() {
    }
creatPcAuto(){
    for (let i = 0; i <=30; i++) {
        let total = new PC(false)
        this.ListPc.push(total)
    }
    return this.ListPc
}
TurnOnPc(number:number){

         this.ListPc[number-1].statusPC= true
    this.ListPc[number-1].startTime = new Date()
    return this.ListPc[number-1].startTime
}
TurnOffPc(number:number) {
    if (this.ListPc[number - 1].statusPC)
    {
        this.ListPc[number - 1].statusPC = false
        this.ListPc[number - 1].endTime = new Date()
        console.log("--------Trạng thái all-------")
        return this.ListPc[number - 1].endTime
    }
}
TotalMoneyPC(number:number){
    console.log("Số tiền cần thanh toán của máy: "+ (number-1) +"là:"+this.ListPc[number-1].totalMoneyPc())
    return   this.ListPc[number-1].totalMoneyPc()
}
}
