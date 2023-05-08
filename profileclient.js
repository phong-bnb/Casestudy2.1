"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profileclient = void 0;
var Profileclient = /** @class */ (function () {
    function Profileclient(Name, Phone, Id, Pass) {
        this.Name = Name;
        this.Phone = Phone;
        this.Id = Id;
        this.Pass = Pass;
    }
    Profileclient.prototype.setName = function (Name) {
        this.Name = Name;
    };
    Profileclient.prototype.getName = function () {
        return this.Name;
    };
    Profileclient.prototype.setPhone = function (Phone) {
        this.Phone = Phone;
    };
    Profileclient.prototype.getPhone = function () {
        return this.Phone;
    };
    Profileclient.prototype.getId = function () {
        return this.Id;
    };
    Profileclient.prototype.setPass = function (Pass) {
        this.Pass = Pass;
    };
    Profileclient.prototype.getPass = function () {
        return this.Pass;
    };
    return Profileclient;
}());
exports.Profileclient = Profileclient;
