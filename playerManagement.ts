import {Profileclient} from "./profileclient";
// lớp quản lí danh sách tài khoản:
export class PlayerManagement {
    listClient: Profileclient[] = []
    addClient(client: Profileclient) { //phương thức thêm tk mới
        let exits = false;
        for (let i = 0; i < this.listClient.length; i++) {
            if(this.listClient[i].getName() == client.getName()){
                console.log('Tai khoan da ton tai', this.listClient[i].getName());
                exits = true;
                break;
            }
        }
        if (exits == false) {
            this.listClient.push(client);
        }
    }
    deleteClient(Id: string) { // phương thức xóa tài khoản
        var id = this.findUser(Id)
        if (!id) {
            console.log("-----Không tìm thấy tài khoản phù hợp để xóa-----")
        } else {
            let index = this.listClient.indexOf(id)
            if (index!== -1) {
                this.listClient.splice(index, 1)
            } else {
                console.log("-----Không tìm thấy tài khoản phù hợp để xóa-----")
            }
        }
    }
    findUser(Id: string) { // phương thức tìm tài khoản qua Id tài khoản
        console.log(this.listClient[0].Id)
            for (let i = 0; i < this.listClient.length; i++) {
                if (Id === this.listClient[i].Id) {
                    return this.listClient[i]
                }
            }
    }
    upload(Id: string, Name: string, Pass: string, Phone: string) { // phương thức sửa thông tin tài khoản.
        console.log(Id)
        const user = this.findUser(Id)

        if (!user) {
            console.log("Tài khoản không tồn tại!")
        } else {
            const pass = user.Pass
            const name = user.Name
            const phone = user.Phone
            // @ts-ignore
            this.listClient = this.listClient.map((i) => {
                if (i.Id === Id) {
                    console.log(i)
                    return {
                        ...i,
                        Pass: Pass || pass,
                        Name: Name || name,
                        Phone: Phone || phone
                    }
                }
                return i
            })
        }
    }
}


