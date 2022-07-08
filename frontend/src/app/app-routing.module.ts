import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { ClientComponent } from "./client/client.component";


const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule),
        component: AuthComponent 
    },
    {
        path: 'client',
        loadChildren: () => import ('./client/client.module').then(m => m.ClientModule),
        component: ClientComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
