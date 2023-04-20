export class PC {
    statusPC: boolean

    startTime: Date|null = null
    endTime: Date|null  = null

    constructor(statusPC: boolean) {
        this.statusPC = statusPC
    }
    totalMoneyPc(){
       if(this.startTime&&this.endTime){
           return  (this.endTime.getMinutes()-this.startTime.getMinutes())*167

       }
    }
}


