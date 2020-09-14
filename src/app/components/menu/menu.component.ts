import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user/user.service";
import { UserCoinsService } from "src/app/services/user/user-coins.service";
import { User } from "src/app/interfaces/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent implements OnInit {
  userCoins: number;

  constructor(
    private user: UserService,
    private userCoin: UserCoinsService,
    private router: Router
  ) {}

  delete() {
    this.user.deleteUser();
    this.router.navigate(["/"]);
  }

  async ngOnInit() {
    //this.userCoins = await this.userCoin.load();
    this.userCoins = await this.userCoin.load();

    this.userCoin.currentCoin = this.userCoins;
  }
}
