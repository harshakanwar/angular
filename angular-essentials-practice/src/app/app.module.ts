import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule(
    {
        declarations : [ AppComponent, UserComponent, HeaderComponent, InvestmentResultsComponent ],
        imports : [BrowserModule ,FormsModule],
        bootstrap : [AppComponent]
    }
    // BrowserModule includes CurrencyPipe
)
export class AppModule{


}