import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistrasiComponent } from './registrasi/registrasi.component';


import { LupaComponent } from './lupa/lupa.component';
import { AboutComponent } from './about/about.component';

import { AuthService } from './auth.service';
import { ProgressDialogService } from './progress-dialog.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
 providers: [ AuthService, ProgressDialogService ],
  declarations: [HeaderComponent, FooterComponent, LandingComponent, LoginComponent, RegistrasiComponent, LupaComponent, AboutComponent],
  exports : [HeaderComponent, FooterComponent, LandingComponent, LoginComponent, RegistrasiComponent, AboutComponent]
})
export class SharedModule { }
