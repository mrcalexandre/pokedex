import { Component, OnInit, Input } from "@angular/core";
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-form-login",
  templateUrl: "./form-login.component.html",
})
export class FormLoginComponent implements OnInit {
  myUserToken: string;
  myUser: User;
  storageUser: User[] = [];
  @Input() pseudo: string = "";

  constructor(private user: UserService, private router: Router) {}

  ngOnInit() {}

  async getTokenUser(name: string) {
    console.log(name);
    this.myUserToken = await this.user.getTokenUser(name);
    localStorage.setItem("token", this.myUserToken["token"]);

    this.router.navigate(["deck"]);

    this.getUser();
  }

  async getUser() {
    this.myUser = await this.user.getUser();
    // this.storageUser = JSON.parse(localStorage.getItem("poke_user"));
    // this.storageUser.push(
    //   {
    //     name: this.myUser.name,
    //     deck: this.myUser.deck,
    //     coins: this.myUser.coins
    //   });
    // console.log(this.storageUser);
    localStorage.setItem("poke_user", JSON.stringify(this.storageUser));
    // this.storage = localStorage.getItem("poke_user");
    // console.log(JSON.parse(this.storage));
  }
}
