export class PC {

    startTime: Date|null = null
    endTime: Date|null  = null
    arrOder: string[] = []
    constructor() {
    }
    totalMoneyPc(){
       if(this.startTime&&this.endTime){
           return  (this.endTime.getMinutes()-this.startTime.getMinutes())*167
       }

    }
    listOder(){
        if (this.arrOder.push())
    }
}


