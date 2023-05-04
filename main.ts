import {PlayerManagement} from "./playerManagement";
import {Profileclient} from "./profileclient";
import {Pcmanagement} from "./Pcmanagement";


const readlineSync = require('readline-sync');
let pcManagement = new Pcmanagement()
let play = new PlayerManagement()
pcManagement.creatPcAuto()
let numberPc: number
let numberPcclient: number
let admin = new Profileclient('phong', 123123, 'admin', '123')//khởi tạo mặc định admin
//------------------------Tạo function làm việc trên 1 PC---------------------------------

function WorkOnThePc() {
    numberPc = +readlineSync.question("numberPC: ")
    if (numberPc == 1) { //nhập số máy chỉ từ 1->30 vì quán chỉ có 30 máy thôi
                       console.log("Mời bạn đăng nhập: ")
        let account: string
        let password: string
        do {
            account = readlineSync.question("account: ")
            password = readlineSync.question("password: ")
            if (account === admin.Name && password === admin.Pass) { // check tài khoản mật khẩu admin
                        console.log("đăng nhập thành công")
                let choice = -1;

                do {
                        console.log((`
                              ------ Menu Client in ListClient ------
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
                            let pass1 = readlineSync.question('Pass: ',{hideEchoBack:true})
                            let id1 = readlineSync.question('Id: ')
                            let client = new Profileclient(name1, phone1, id1, pass1)
                            play.addClient(client)

                            break;
                        case 2:
                            let id2 = readlineSync.question(' Nhap id ')
                            let name2 = readlineSync.question(' Nhap name ')
                            let pass2 = readlineSync.question(' Nhap pass ',{hideEchoBack:true})
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
                            Player()
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

WorkOnThePc()

//------function người chơi----------
function Player() {
    console.log('============================')
    console.table(pcManagement.ListPc)
    numberPcclient = +readlineSync.question("numberPCclient: ")
    if (numberPcclient <= 10 && numberPcclient >= 2) { //nhập số máy chỉ từ 1->30 vì quán chỉ có 30 máy thôi
                         console.log("Mời bạn đăng nhập: ")
        let accountclient: string
        let passwordclient: string
        do {
            accountclient = readlineSync.question("account: ")
            passwordclient = readlineSync.question("password: ",{hideEchoBack:true})
            console.log('list',play.listClient)
            console.log('bumber----',numberPcclient)
            if (accountclient === play.listClient[numberPcclient-2].Name && passwordclient === play.listClient[numberPcclient-2].Pass) { // check tài khoản mật khẩu admin
                pcManagement.TurnOnPc(numberPcclient)
                         console.log("đăng nhập thành công")
                         console.log(" Cyber C0223G1 kính chào quý khách")
                console.table(pcManagement.ListPc)

                let choice1 = -1;
                do {
                         console.log((`
                              ------ Menu Function Client  ------
                                     1:Checkout 
                                     2:logout
                                     3:Oder
                                     4:return
                                     
`))
                    choice1 = +readlineSync.question(" Enter choice1 : ")
                    switch (choice1) {
                        case 1:
                            pcManagement.TurnOffPc(numberPcclient)
                            pcManagement.TotalMoneyPC(numberPcclient)

                            pcManagement.ListPc[numberPcclient-1].count = 0
                            pcManagement.ListPc[numberPcclient-1].arrOder = []
                            console.log( pcManagement.ListPc[numberPcclient-1].listOder())

                            break
                        case 2:
                            pcManagement.Showarr(numberPcclient)
                            break
                        case 3:
                            console.log(
                                `------ Menu Oder  ------

                                   1:Sting  
                                   2:Chicken egg noodles
                                   3: Coca
                                   4: Aqua
                                   5:Pepsi
                                   6: Beer Hanoi
                                   0: back`)
                            let oder = readlineSync.question("Menu (sting, chicken egg noodles, coca, aqua,pepsi ,bee):  ")
                            if(oder==1){
                                pcManagement.ListPc[numberPcclient-1].arrOder.push("sting")

                            }else if (oder == 2){
                                pcManagement.ListPc[numberPcclient-1].arrOder.push("Chicken egg noodles")

                            } else if (oder == 3){
                                pcManagement.ListPc[numberPcclient-1].arrOder.push("Coca")

                            }else if(oder == 4){
                                pcManagement.ListPc[numberPcclient-1].arrOder.push("Aqua")

                            }else if (oder==5){
                                pcManagement.ListPc[numberPcclient-1].arrOder.push("Pepsi")
                            }
                            break
                        case 4:
                            Player()
                            break
                    }
                }
                while (choice1 !== 0);
            } else {
                console.log("Sai tài khoản hoặc mật khẩu")
                Player()
                return
            }
        } while (accountclient !== play.listClient[0].Name || passwordclient !== play.listClient[0].Pass)
    }
}
Player()



