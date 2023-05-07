
export class PC {
    idclient: string |null = null
    count:number
    startTime: Date | null = null
    endTime: Date | null = null
    arrOder: string[] = []
    // oder: string
    constructor() {
        this.count = 0
    }

    listOder() {
        if (this.arrOder) {
            for (let i = 0; i < this.arrOder.length; i++) {
                this.count += 10000
            }
        }
        return [this.arrOder,this.count]
    }
    totalMoneyPc() {
        if (this.startTime && this.endTime) {
            let totalpc = ((this.endTime.getMinutes() - this.startTime.getMinutes()) * 167)
            // @ts-ignore
            return (totalpc + this.listOder()[1])
        }
    }
}





