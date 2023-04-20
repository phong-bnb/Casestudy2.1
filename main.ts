import {PlayerManagement} from "./playerManagement";
import {Profileclient} from "./profileclient";
import {Pcmanagement} from "./Pcmanagement";
const readlineSync = require('readline-sync');
let pcManagement = new Pcmanagement()
let play = new PlayerManagement()
let startPc = pcManagement.creatPcAuto()
let numberPc: number
let numberPcclient: number
let init: number = +readlineSync.question("press any button: ")

let admin = new Profileclient('phong', 123123, 'admin', '123')//khởi tạo mặc định admin
//------------------------Tạo function làm việc trên 1 PC---------------------------------
function WorkOnThePc(init: number) {
    numberPc = +readlineSync.question("numberPC: ")
    if (numberPc = 1) { //nhập số máy chỉ từ 1->30 vì quán chỉ có 30 máy thôi
        console.log("Mời bạn đăng nhập: ")
        let account: string
        let password: string
        do {
            account = readlineSync.question("account: ")
            password = readlineSync.question("password: ")
            if (account === admin.Name && password === admin.Pass) { // check tài khoản mật khẩu admin
                console.log("đăng nhập thành công")
                let choice = -1;
                console.log("-------------Mời chọn chương trình----------")
                do {
                    console.log((`
    ------ Menu Client in ListClient ${play.listClient}------
    1. Add new Client
    2. Edit profile Client
    3. Delete Client
    4. Show all Client
    5. Find Client via ID
    6  Return in Menu
    `))
                    choice = +readlineSync.question(" Enter choice : ")
                    switch (choice) {
                        case 1:
                            let name1 = readlineSync.question('Name: ')
                            let phone1 = readlineSync.question(' Phone: ')
                            let pass1 = readlineSync.question('Pass: ')
                            let id1 = readlineSync.question('Id: ')
                            let client = new Profileclient(name1, phone1, id1, pass1)
                            play.addClient(client)
                            break;
                        case 2:
                            let id2 = readlineSync.question(' Nhap id ')
                            let name2 = readlineSync.question(' Nhap name ')
                            let pass2 = readlineSync.question(' Nhap pass ')
                            let phone2 = readlineSync.question(' Nhap phone ')
                            let idUser = play.findUser(id2)
                            if (idUser !== undefined) {
                                play.upload(idUser.Id, name2, pass2, phone2)
                            }
                            break;
                        case 3:
                            let id3 = readlineSync.question('Enter the ID of the account you want to delete: ')
                            let checket = play.findUser(id3)
                            if (checket !== undefined) {
                                play.deleteClient(checket.Id)
                            }
                            break
                        case 4:
                            console.table(play.listClient)
                            break
                        case 5:
                            let id5 = readlineSync.question('Enter the ID of the account you want to Find: ')
                            let idUserr = play.findUser(id5)
                            if (idUserr !== undefined) {
                                play.findUser(idUserr.Id)
                                console.log(play.listClient[0])
                            }
                            break
                        case 6:
                            Player(unit)
                            break
                    }
                }
                while (choice !== 0);
            } else {
                console.log("Sai tài khoản hoặc mật khẩu")
                return
            }
        } while (account !== admin.Name || password !== admin.Pass)

    }

}
WorkOnThePc(init)
//------function người chơi----------
let unit: number = +readlineSync.question("press any button to client mode: ")nêu
function Player(unit: number) {
    numberPcclient = +readlineSync.question("numberPCclient: ")
    if (numberPcclient <= 30 && numberPcclient >= 2) { //nhập số máy chỉ từ 1->30 vì quán chỉ có 30 máy thôi
        console.log("Mời bạn đăng nhập: ")
        let accountclient: string
        let passwordclient: string
        do {
            accountclient = readlineSync.question("account: ")
            passwordclient = readlineSync.question("password: ")
            if (accountclient === play.listClient[0].Name && passwordclient === play.listClient[0].Pass) { // check tài khoản mật khẩu admin
                console.log("đăng nhập thành công")
                let choice1 = -1;
                console.log("-------------Mời chọn chương trình----------")
                do {
                    console.log((`
    ------ Menu Client in ListClient ------
    1: Login
    2:Checkout
    3:logout

`))

                    choice1 = +readlineSync.question(" Enter choice1 : ")
                    switch (choice1) {
                        case 1:
                            let name11 = readlineSync.question("Name: ")
                            let pass11 = readlineSync.question("Pass: ")
                            if (name11 == play.listClient[0].Name && pass11 == play.listClient[0].Pass) {
                                console.log("Cyber C0223G1 kính chào quý khách")
                                pcManagement.TurnOnPc(unit)
                                break
                            }
                        case 2:
                            pcManagement.TurnOffPc(unit)
                            pcManagement.TotalMoneyPC(unit)
                            break
                        case 3:
                            WorkOnThePc(init)
                    }
                }
                while (choice1 !== 0);
            } else {
                console.log("Sai tài khoản hoặc mật khẩu")
                return
            }
        } while (accountclient !== play.listClient[0].Name || passwordclient !== play.listClient[0].Pass)

    }

}
Player(unit)



