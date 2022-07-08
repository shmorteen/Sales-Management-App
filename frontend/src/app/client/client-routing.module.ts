import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../utility/auth.guard";
import { CartComponent } from "./cart/cart.component";
import { ItemcardComponent } from "./itemcard/itemcard.component";
import { MarketComponent } from "./market/market.component";
import { ReportsalesComponent } from "./reportsales/reportsales.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'itemcard',
        pathMatch: 'full'
    },
    {
        path: 'itemcard',
        component: ItemcardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'market',
        component: MarketComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'report',
        component: ReportsalesComponent,
        canActivate: [AuthGuard]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class ClientRoutingModule {}
