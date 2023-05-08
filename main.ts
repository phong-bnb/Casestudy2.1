 const {PlayerManagement} = require("./playerManagement");
 const {Profileclient} = require( "./profileclient");
 const {Pcmanagement} = require("./Pcmanagement");
const readlineSync = require('readline-sync');
const pcManagement = new Pcmanagement()
const play = new PlayerManagement()
let listaccountonline: string[] = []
pcManagement.creatPcAuto()
let numberPc: number
let numberPcclient: number
let choice1 = 0
let admin = new Profileclient('phong', 123123, 'admin', '123')//khởi tạo mặc định admin

numberPc = +readlineSync.question("numberPC: ")
if (numberPc == 1) {
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
                        do {
                            let testName = /^[a-z]{1,6}/;
                            let testPhone = /^[0-9]{1,6}/;
                            let testid = /^[0-9]{1,3}/;
                            let name1 = readlineSync.question('Name: ')
                            let pass1 = readlineSync.question('Pass: ', {hideEchoBack: true})
                            let phone1 = readlineSync.question(' Phone: ')
                            let id1 = readlineSync.question('Id: ')
                            let testPass = /^[0-9]{1,6}/;
                            let confirmPassword = readlineSync.question("Confirm password: ", {hideEchoBack: true});
                            let test0 = testName.test(name1);
                            let test1 = testPass.test(pass1);
                            let test2 = testPhone.test(phone1);
                            let test3 = testPass.test(id1);
                            if (test0 && test1 && test3 && test2) {
                                 {
                                    let client = new Profileclient(name1, phone1, id1, pass1)
                                    play.addClient(client)
                                    console.log("===========Sign Up Success===========");
                                    break
                                }
                            } else {
                                console.log("===========Invalid password and account===========");
                            }
                        } while (true)
                        break;
                    case 2:
                        let id2 = readlineSync.question(' Nhap id ')
                        let name2 = readlineSync.question(' Nhap name ')
                        let pass2 = readlineSync.question(' Nhap pass ', {hideEchoBack: true})
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
                        do {
                            let i = 0
                            let check = false
                            console.log('============================')
                            console.table(pcManagement.ListPc)
                            numberPcclient = +readlineSync.question("numberPCclient: ")
                            if (numberPcclient <= 10 && numberPcclient >= 2) {
                                console.log("Mời bạn đăng nhập: ")
                                let accountClient: string
                                let passwordClient: string
                                do {
                                    accountClient = readlineSync.question("account: ")
                                    passwordClient = readlineSync.question("password: ", {hideEchoBack: true})
                                    const currentPc = pcManagement.ListPc[numberPcclient - 1].idclient

                                    if(currentPc !== null && currentPc !== accountClient){
                                        console.log("máy đã được nguoi khac truy cập");
                                        break
                                    }
                                    for (i = 0; i < play.listClient.length; i++) {
                                        console.log(pcManagement.ListPc[numberPcclient - 1].idclient)
                                        if (accountClient == play.listClient[i].Name && passwordClient == play.listClient[i].Pass) {
                                            pcManagement.ListPc[numberPcclient - 1].idclient = accountClient
                                            listaccountonline.push(pcManagement.ListPc[numberPcclient - 1].idclient)
                                            if (accountClient == pcManagement.ListPc[numberPcclient - 1].idclient) {
                                                pcManagement.TurnOnPc(numberPcclient)
                                                console.log("đăng nhập thành công")
                                                console.log(" Cyber C0223G1 kính chào quý khách")
                                                console.table(pcManagement.ListPc)
                                                choice1 = -1;
                                                do {
                                                    console.log((`
                              ------ Menu Function Client  ------
                                     1:Checkout 
                                     2:Log list
                                     3:Oder
                                     4:Back 
`))
                                                    choice1 = +readlineSync.question(" Enter choice1 : ")
                                                    switch (choice1) {
                                                        case 1:
                                                            pcManagement.TurnOffPc(numberPcclient)
                                                            pcManagement.TotalMoneyPC(numberPcclient)
                                                            pcManagement.ListPc[numberPcclient - 1].count = 0
                                                            pcManagement.ListPc[numberPcclient - 1].arrOder = []
                                                            pcManagement.ListPc[numberPcclient - 1].startTime = null
                                                            pcManagement.ListPc[numberPcclient - 1].endTime = null
                                                            pcManagement.ListPc[numberPcclient - 1].idclient = null
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
                                                            if (oder == 1) {
                                                                pcManagement.ListPc[numberPcclient - 1].arrOder.push("sting")

                                                            } else if (oder == 2) {
                                                                pcManagement.ListPc[numberPcclient - 1].arrOder.push("Chicken egg noodles")

                                                            } else if (oder == 3) {
                                                                pcManagement.ListPc[numberPcclient - 1].arrOder.push("Coca")

                                                            } else if (oder == 4) {
                                                                pcManagement.ListPc[numberPcclient - 1].arrOder.push("Aqua")

                                                            } else if (oder == 5) {
                                                                pcManagement.ListPc[numberPcclient - 1].arrOder.push("Pepsi")
                                                            }
                                                            break
                                                        case 4:
                                                            // Player()
                                                            break
                                                    }
                                                }
                                                while (choice1 !== 4);
                                                break
                                            } else {
                                                console.log("máy đã được truy cập")
                                            }
                                        } else {
                                            check = false
                                            console.log("Sai tài khoản hoặc mật khẩu")
                                            // Player()
                                        }
                                    }
                                } while (accountClient !== play.listClient[i].Name || passwordClient !== play.listClient[i].Pass)
                            } else {
                                console.log('=== Số máy không tồn tại!\n Nhập số máy phù hợp.')
                                // Player()
                            }
                        } while (choice1 == 4)
                        break
                }
            }
            while (choice !== 0);
        } else {
            console.log("Sai tài khoản hoặc mật khẩu")
            break
        }
    } while (account == admin.Name || password == admin.Pass)
}
