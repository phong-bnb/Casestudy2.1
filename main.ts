import {PlayerManagement} from "./playerManagement";
import {PC} from "./pc";
import {Profileclient} from "./profileclient";
import {Pcmanagement} from "./Pcmanagement";
// import readlineSync from "readline-sync";
const readlineSync = require('readline-sync');


let pcManagement = new Pcmanagement()

let play = new PlayerManagement()
let startPc = pcManagement.creatPcAuto()
let numberPc:number
let init:number = +readlineSync.question("press any button: ")
let admin = new Profileclient('phong',123123,'admin','123')//khởi tạo mặc định admin
//------------------------Tạo function làm việc trên 1 PC---------------------------------
function WorkOnThePc (number:number){
 numberPc = +readlineSync.question("numberPC: ")
    if(numberPc<=30&&numberPc>=1){ //nhập số máy chỉ từ 1->30 vì quán chỉ có 30 máy thôi
        console.log("Mời bạn đăng nhập: ")
        let account: string
        let password: string
        do {
            account = readlineSync.question("account: ")
            password = readlineSync.question("password: ")
            if (account===admin.Name&&password===admin.Pass){ // check tài khoản mật khẩu admin
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
   
    `))
                    choice = +readlineSync.question(" Enter choice : ")
                    switch (choice) {
                        case 1:
                            let name1 = readlineSync.question('nhập tên: ')
                            let phone1 = readlineSync.question('nhập phone: ')
                            let  pass1 = readlineSync.question('nhập pass: ')
                            let id1 = readlineSync.question('nhâập id')
                            let client = new Profileclient(name1,phone1,id1,pass1)
                            play.addClient(client)
                            break;
                        case 2:
                            let id = readlineSync.question(' Nhap id ')
                            let name = readlineSync.question(' Nhap name ')
                            let pass = readlineSync.question(' Nhap pass ')
                            let phone = readlineSync.question(' Nhap phone ')
                            let idUser = play.findUser(id)
                           if(idUser !== undefined){
                                play.upload(idUser.Id,name,pass,phone)
                            }
                            break;

                        case 3:
                            let idr = readlineSync.question('Enter the ID of the account you want to delete: ')
                            let checket = play.findUser(idr)
                            if(checket !== undefined){
                                play.deleteClient(checket.Id)
                            }

                        // case 5:
                        //         let idd = readlineSync.question(' Nhap id ')
                        //     let idUserr = play.findUser(idd)
                        //         play.findUser(idUserr.Id)
                        //
                        //     break;
                        case 4:
                                let list = play.listClient
                            console.table(list)
                    }
                }
                while (choice !== 0);
            }else {
                console.log("Sai tài khoản hoặc mật khẩu")
                return
            }
        }while (account!==admin.Name||password!==admin.Pass)

    }

}

WorkOnThePc(init)
