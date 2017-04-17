
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Http } from "@angular/http";


@Injectable()
export class UserService {

    constructor(private http:Http) {

    }

    getAll(){
        return this.http.get(`${environment.apiUrl}/api/v1/user`)
        .map(response => response.json()).map(body => body.data);
    }

    create(email:string, password:string, role:string){
        return this.http.post(`${environment.apiUrl}/api/v1/user`, {
            email,
            password,
            role
        })
        .map(response => response.json()).map(body => body.data).toPromise();
    }

    update(userId:string, password:string, role:string){
        return this.http.patch(`${environment.apiUrl}/api/v1/user/${userId}`, {
            password,
            role
        })
        .map(response => response.json()).map(body => body.data).toPromise();
    }


}