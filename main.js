var PlayerManagement = require("./playerManagement").PlayerManagement;
var Profileclient = require("./profileclient").Profileclient;
var Pcmanagement = require("./Pcmanagement").Pcmanagement;
var readlineSync = require('readline-sync');
var pcManagement = new Pcmanagement();
var play = new PlayerManagement();
var listaccountonline = [];
pcManagement.creatPcAuto();
var numberPc;
var numberPcclient;
var choice1 = 0;
var admin = new Profileclient('phong', 123123, 'admin', '123'); //khởi tạo mặc định admin
//------------------------Tạo function làm việc trên 1 PC---------------------------------
// function WorkOnThePc() {
numberPc = +readlineSync.question("numberPC: ");
if (numberPc == 1) {
    console.log("Mời bạn đăng nhập: ");
    var account = void 0;
    var password = void 0;
    do {
        account = readlineSync.question("account: ");
        password = readlineSync.question("password: ");
        if (account === admin.Name && password === admin.Pass) { // check tài khoản mật khẩu admin
            console.log("đăng nhập thành công");
            var choice = -1;
            do {
                console.log(("\n                              ------ Menu Client in ListClient ------\n                                     1. Add new Client\n                                     2. Edit profile Client\n                                     3. Delete Client\n                                     4. Show all Client\n                                     5. Find Client via ID\n                                     6  Return in Menu\n                                                          "));
                choice = +readlineSync.question(" Enter choice : ");
                switch (choice) {
                    case 1:
                        do {
                            var testName = /^[a-z]{1,6}/;
                            var testPhone = /^[0-9]{1,6}/;
                            var testid = /^[0-9]{1,3}/;
                            var name1 = readlineSync.question('Name: ');
                            var pass1 = readlineSync.question('Pass: ', { hideEchoBack: true });
                            var phone1 = readlineSync.question(' Phone: ');
                            var id1 = readlineSync.question('Id: ');
                            var testPass = /^[0-9]{1,6}/;
                            var confirmPassword = readlineSync.question("Confirm password: ", { hideEchoBack: true });
                            var test0 = testName.test(name1);
                            var test1 = testPass.test(pass1);
                            var test2 = testPhone.test(phone1);
                            var test3 = testPass.test(id1);
                            if (test0 && test1) {
                                if (password == confirmPassword) {
                                    var client = new Profileclient(name1, phone1, id1, pass1);
                                    play.addClient(client);
                                    console.log("===========Sign Up Success===========");
                                }
                                else {
                                    console.log("===========Password confirmation failed===========");
                                }
                            }
                            else {
                                console.log("===========Invalid email and account===========");
                            }
                        } while (true);
                        break;
                    case 2:
                        var id2 = readlineSync.question(' Nhap id ');
                        var name2 = readlineSync.question(' Nhap name ');
                        var pass2 = readlineSync.question(' Nhap pass ', { hideEchoBack: true });
                        var phone2 = readlineSync.question(' Nhap phone ');
                        var idUser = play.findUser(id2);
                        if (idUser !== undefined) {
                            play.upload(idUser.Id, name2, pass2, phone2);
                        }
                        break;
                    case 3:
                        var id3 = readlineSync.question('Enter the ID of the account you want to delete: ');
                        var checket = play.findUser(id3);
                        if (checket !== undefined) {
                            play.deleteClient(checket.Id);
                        }
                        break;
                    case 4:
                        console.table(play.listClient);
                        break;
                    case 5:
                        var id5 = readlineSync.question('Enter the ID of the account you want to Find: ');
                        var idUserr = play.findUser(id5);
                        if (idUserr !== undefined) {
                            play.findUser(idUserr.Id);
                            console.log(play.listClient[0]);
                        }
                        break;
                    case 6:
                        // Player()
                        do {
                            var i = 0;
                            var check = false;
                            console.log('============================');
                            console.table(pcManagement.ListPc);
                            numberPcclient = +readlineSync.question("numberPCclient: ");
                            if (numberPcclient <= 10 && numberPcclient >= 2) {
                                console.log("Mời bạn đăng nhập: ");
                                var accountClient = void 0;
                                var passwordClient = void 0;
                                do {
                                    accountClient = readlineSync.question("account: ");
                                    passwordClient = readlineSync.question("password: ", { hideEchoBack: true });
                                    for (i = 0; i < play.listClient.length; i++) {
                                        console.log('ngu');
                                        console.log(accountClient);
                                        console.log(pcManagement.ListPc[numberPcclient - 1].idclient);
                                        if (accountClient == play.listClient[i].Name && passwordClient == play.listClient[i].Pass) {
                                            pcManagement.ListPc[numberPcclient - 1].idclient = accountClient;
                                            listaccountonline.push(pcManagement.ListPc[numberPcclient - 1].idclient);
                                            if (accountClient == pcManagement.ListPc[numberPcclient - 1].idclient) {
                                                pcManagement.TurnOnPc(numberPcclient);
                                                console.log("đăng nhập thành công");
                                                console.log(" Cyber C0223G1 kính chào quý khách");
                                                console.table(pcManagement.ListPc);
                                                choice1 = -1;
                                                do {
                                                    console.log(("\n                              ------ Menu Function Client  ------\n                                     1:Checkout \n                                     2:Log list\n                                     3:Oder\n                                     4:Back \n"));
                                                    choice1 = +readlineSync.question(" Enter choice1 : ");
                                                    switch (choice1) {
                                                        case 1:
                                                            pcManagement.TurnOffPc(numberPcclient);
                                                            pcManagement.TotalMoneyPC(numberPcclient);
                                                            pcManagement.ListPc[numberPcclient - 1].count = 0;
                                                            pcManagement.ListPc[numberPcclient - 1].arrOder = [];
                                                            pcManagement.ListPc[numberPcclient - 1].startTime = null;
                                                            pcManagement.ListPc[numberPcclient - 1].endTime = null;
                                                            pcManagement.ListPc[numberPcclient - 1].idclient = null;
                                                            break;
                                                        case 2:
                                                            pcManagement.Showarr(numberPcclient);
                                                            break;
                                                        case 3:
                                                            console.log("------ Menu Oder  ------\n                                   1:Sting  \n                                   2:Chicken egg noodles\n                                   3: Coca\n                                   4: Aqua\n                                   5:Pepsi\n                                   6: Beer Hanoi\n                                   0: back");
                                                            var oder = readlineSync.question("Menu (sting, chicken egg noodles, coca, aqua,pepsi ,bee):  ");
                                                            if (oder == 1) {
                                                                pcManagement.ListPc[numberPcclient - 1].arrOder.push("sting");
                                                            }
                                                            else if (oder == 2) {
                                                                pcManagement.ListPc[numberPcclient - 1].arrOder.push("Chicken egg noodles");
                                                            }
                                                            else if (oder == 3) {
                                                                pcManagement.ListPc[numberPcclient - 1].arrOder.push("Coca");
                                                            }
                                                            else if (oder == 4) {
                                                                pcManagement.ListPc[numberPcclient - 1].arrOder.push("Aqua");
                                                            }
                                                            else if (oder == 5) {
                                                                pcManagement.ListPc[numberPcclient - 1].arrOder.push("Pepsi");
                                                            }
                                                            break;
                                                        case 4:
                                                            // Player()
                                                            break;
                                                    }
                                                } while (choice1 !== 4);
                                                break;
                                            }
                                            else {
                                                console.log("máy đã được truy cập");
                                            }
                                        }
                                        else {
                                            check = false;
                                            console.log("Sai tài khoản hoặc mật khẩu");
                                            // Player()
                                        }
                                    }
                                } while (accountClient !== play.listClient[i].Name || passwordClient !== play.listClient[i].Pass);
                            }
                            else {
                                console.log('=== Số máy không tồn tại!\n Nhập số máy phù hợp.');
                                // Player()
                            }
                            // }
                            // Player()
                        } while (choice1 == 4);
                        break;
                }
            } while (choice !== 0);
        }
        else {
            console.log("Sai tài khoản hoặc mật khẩu");
            // return
        }
    } while (account == admin.Name || password == admin.Pass);
}
