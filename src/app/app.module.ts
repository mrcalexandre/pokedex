import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { PageBoutiqueComponent } from "./components/page-boutique/page-boutique.component";
import { PageDeckComponent } from "./components/page-deck/page-deck.component";
import { MenuComponent } from "./components/menu/menu.component";
import { LoginComponent } from "./components/page-login/page-login.component";
import { FormLoginComponent } from "./components/forms/form-login/form-login.component";
import { Page404Component } from "./components/page-404/page-404.component";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { PokemonService } from "./services/pokemon/pokemon.service";
import { UserService } from "./services/user/user.service";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "./pipe/filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PageBoutiqueComponent,
    PageDeckComponent,
    MenuComponent,
    LoginComponent,
    Page404Component,
    FormLoginComponent,
    FilterPipe
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [PokemonService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
