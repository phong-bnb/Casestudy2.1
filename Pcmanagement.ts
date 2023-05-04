import {PC} from "./pc";
export class Pcmanagement{
    ListPc: PC[]=[]
    constructor() {
    }
creatPcAuto(){
    for (let i = 0; i <=10; i++) {
        let total = new PC()
        this.ListPc.push(total)
    }
    return this.ListPc
}

TurnOnPc(number:number){
    this.ListPc[number-1].startTime = new Date()
    return this.ListPc[number-1].startTime
}


TurnOffPc(number:number) {
    this.ListPc[number - 1].endTime = new Date()
    return this.ListPc[number - 1].endTime
}
TotalMoneyPC(number:number){
    console.log("Số tiền cần thanh toán của máy "+ (number) +" là:"+this.ListPc[number-1].totalMoneyPc()+"VNĐ" )
    return
}
Showarr(number:number){
    console.log(this.ListPc[number-1].listOder())
}
}
