"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pcmanagement = void 0;
var pc_1 = require("./pc");
var Pcmanagement = /** @class */ (function () {
    function Pcmanagement() {
        this.ListPc = [];
    }
    Pcmanagement.prototype.creatPcAuto = function () {
        for (var i = 0; i <= 10; i++) {
            var total = new pc_1.PC();
            this.ListPc.push(total);
        }
        return this.ListPc;
    };
    Pcmanagement.prototype.TurnOnPc = function (number) {
        this.ListPc[number - 1].startTime = new Date();
        return this.ListPc[number - 1].startTime;
    };
    Pcmanagement.prototype.TurnOffPc = function (number) {
        this.ListPc[number - 1].endTime = new Date();
        return this.ListPc[number - 1].endTime;
    };
    Pcmanagement.prototype.TotalMoneyPC = function (number) {
        console.log("Số tiền cần thanh toán của máy " + (number) + " là:" + this.ListPc[number - 1].totalMoneyPc() + "VNĐ");
        return;
    };
    Pcmanagement.prototype.Showarr = function (number) {
        console.log(this.ListPc[number - 1].listOder());
    };
    return Pcmanagement;
}());
exports.Pcmanagement = Pcmanagement;
