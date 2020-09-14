import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../../interfaces/user";

@Injectable()
export class UserService implements OnInit {
  constructor(private http: HttpClient) {}
  user: User;

  ngOnInit() {}

  getTokenUser(name: string): Promise<string> {
    return this.http
      .post<string>("https://lpweblannion.herokuapp.com/api/user/login", {
        name: name
      })
      .toPromise();
  }

  getUser(): Promise<User> {
    //let headers = new HttpHeaders().set('authorization', token );
    //var currentUser = JSON.parse(localStorage.getItem("currentUser"))
    //var token = currentUser.token

    let token = localStorage.getItem("token");
    let headers = new HttpHeaders().set("authorization", token);
    headers.append("Content-Type", "application/json");

    return this.http
      .get<User>("https://lpweblannion.herokuapp.com/api/user", {
        headers: headers
      })
      .toPromise();
  }

  deleteUser(): Promise<User> {
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders().set("authorization", token);
    headers.append("Content-Type", "application/json");

    return this.http
      .delete<User>("https://lpweblannion.herokuapp.com/api/user", {
        headers: headers
      })
      .toPromise();
  }

  async addCard(id: number): Promise<User> {
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders().set("authorization", token);
    headers.append("Content-Type", "application/json");

    this.user = await this.getUser();
    this.user.deck.push(id);

    let url = "https://lpweblannion.herokuapp.com/api/user";
    let body = { coins: this.user.coins, deck: this.user.deck };

    return this.http
      .put<User>(url, body, {
        headers: headers
      })
      .toPromise();
  }
}
