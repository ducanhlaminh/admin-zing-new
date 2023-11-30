import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment.development";
interface UserInterface {
    name: string;
    userName: string;
    email: string;
    avatar: string;
    password: string;
    role_id: number;
}
interface account {
    email: string;
    password: string;
}
interface dataLoginResp {
    message: string;
    status: boolean;
    token: string;
}
@Injectable({
    providedIn: "root",
})
export class UserService {
    constructor(private http: HttpClient) {}
    inforUser$ = new BehaviorSubject<any>({});
    user: any;
    getDataInforUser() {
        this.http.get(environment.API_GET_INFOR_USER).subscribe((data: any) => {
            if (data) {
                this.inforUser$.next(data);
            }
        });
    }
    getAll(data: any) {
        return this.http.get(environment.API_ADMIN_USER, {
            params: { ...data },
        });
    }
    getDetail(id: any) {
        return this.http.get(environment.API_ADMIN_USER + "/" + id);
    }
    deleteUser(id: any) {
        return this.http.delete(environment.API_ADMIN_USER, { params: { id } });
    }
    createUser(data: any) {
        return this.http.post(environment.API_ADMIN_REGISTER, data);
    }
    update(data: UserInterface, id: number) {
        return this.http.put(environment.API_USER + "/" + id, data);
    }
    login(data: account) {
        return this.http.post<dataLoginResp>(environment.API_LOGIN, data);
    }
}
