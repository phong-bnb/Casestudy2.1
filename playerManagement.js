"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerManagement = void 0;
// lớp quản lí danh sách tài khoản:
var PlayerManagement = /** @class */ (function () {
    function PlayerManagement() {
        this.listClient = [];
    }
    PlayerManagement.prototype.addClient = function (client) {
        var exits = false;
        for (var i = 0; i < this.listClient.length; i++) {
            if (this.listClient[i].getName() == client.getName()) {
                console.log('Tai khoan da ton tai', this.listClient[i].getName());
                exits = true;
                break;
            }
        }
        if (exits == false) {
            this.listClient.push(client);
        }
    };
    PlayerManagement.prototype.deleteClient = function (Id) {
        var id = this.findUser(Id);
        if (!id) {
            console.log("-----Không tìm thấy tài khoản phù hợp để xóa-----");
        }
        else {
            var index = this.listClient.indexOf(id);
            if (index !== -1) {
                this.listClient.splice(index, 1);
            }
            else {
                console.log("-----Không tìm thấy tài khoản phù hợp để xóa-----");
            }
        }
    };
    PlayerManagement.prototype.findUser = function (Id) {
        console.log(this.listClient[0].Id);
        for (var i = 0; i < this.listClient.length; i++) {
            if (Id === this.listClient[i].Id) {
                return this.listClient[i];
            }
        }
    };
    PlayerManagement.prototype.upload = function (Id, Name, Pass, Phone) {
        console.log(Id);
        var user = this.findUser(Id);
        if (!user) {
            console.log("Tài khoản không tồn tại!");
        }
        else {
            var pass_1 = user.Pass;
            var name_1 = user.Name;
            var phone_1 = user.Phone;
            // @ts-ignore
            this.listClient = this.listClient.map(function (i) {
                if (i.Id === Id) {
                    console.log(i);
                    return __assign(__assign({}, i), { Pass: Pass || pass_1, Name: Name || name_1, Phone: Phone || phone_1 });
                }
                return i;
            });
        }
    };
    return PlayerManagement;
}());
exports.PlayerManagement = PlayerManagement;
