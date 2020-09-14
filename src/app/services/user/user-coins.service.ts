import { Injectable } from "@angular/core";
import { User } from "src/app/interfaces/user";
import { UserService } from "./user.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UserCoinsService {
  currentUser: User;
  currentCoin: number;

  constructor(private userService: UserService, private http: HttpClient) {}

  async load(): Promise<number> {
    this.currentUser = await this.userService.getUser();
    this.currentCoin = this.currentUser.coins;
    console.log(this.currentCoin);
    return this.currentCoin;
  }

  async updateCoins(num: number) {
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders().set("authorization", token);
    headers.append("Content-Type", "application/json");

    this.currentUser = await this.userService.getUser();
    this.currentCoin = this.currentUser.coins;

    let url = "https://lpweblannion.herokuapp.com/api/user";
    let body = { coins: this.currentCoin + num, deck: this.currentUser.deck };

    return this.http
      .put<User>(url, body, {
        headers: headers
      })
      .toPromise();
  }
}
