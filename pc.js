"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PC = void 0;
var PC = /** @class */ (function () {
    function PC() {
        this.idclient = null;
        this.startTime = null;
        this.endTime = null;
        this.arrOder = [];
        this.count = 0;
    }
    PC.prototype.listOder = function () {
        if (this.arrOder) {
            for (var i = 0; i < this.arrOder.length; i++) {
                this.count += 10000;
            }
        }
        return [this.arrOder, this.count];
    };
    PC.prototype.totalMoneyPc = function () {
        if (this.startTime && this.endTime) {
            var totalpc = ((this.endTime.getMinutes() - this.startTime.getMinutes()) * 167);
            return (totalpc + this.count);
        }
    };
    return PC;
}());
exports.PC = PC;
