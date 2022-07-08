import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
   LoginComponent,
   RegisterComponent,
   AuthComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
