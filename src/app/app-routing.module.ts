import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/page-login/page-login.component";
import { PageBoutiqueComponent } from "./components/page-boutique/page-boutique.component";
import { Page404Component } from "./components/page-404/page-404.component";
import { PageDeckComponent } from "./components/page-deck/page-deck.component";
import { MenuComponent } from "./components/menu/menu.component";

// const routes: Routes =
// [
//   { path: 'login', component: LoginComponent },
//   { path: 'deck', component: PageDeckComponent },
//   { path: 'boutique', component: PageBoutiqueComponent } ];

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "",
    component: MenuComponent,
    children: [
      { path: "deck", component: PageDeckComponent },
      { path: "boutique", component: PageBoutiqueComponent },
      { path: "404", component: Page404Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
