import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap';
import { ProgressbarModule } from 'ng2-bootstrap';

import { ModalModule } from 'ng2-bootstrap';

import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from'./shared/shared.module';
import { GadaiModule } from './gadai/gadai.module';

import { LandingComponent } from './shared/landing/landing.component';
import { LoginComponent } from './shared/login/login.component';
import { RegistrasiComponent } from './shared/registrasi/registrasi.component';

import { LupaComponent } from './shared/lupa/lupa.component';
import { AboutComponent } from './shared/about/about.component';

import { AuthGuard } from './shared/auth.guard';
import { ProgressDialogService } from './shared/progress-dialog.service';


const routingGaol : Routes = [
  {path : 'login', component :  LoginComponent},
  {path : 'registrasi', component :  RegistrasiComponent},
  {path : 'lupa', component : LupaComponent},
  {path : 'about', component : AboutComponent},
  {path : 'gadai', redirectTo : "/gadai", pathMatch: "full"},
  {path : '**', component :  LandingComponent},
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routingGaol),
    DropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    SharedModule,
    GadaiModule
  ],
  providers: [AuthGuard, ProgressDialogService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
