import { NgModule } from '@angular/core';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistrasiComponent } from './registrasi/registrasi.component';

import { LupaComponent } from './lupa/lupa.component';
import { AboutComponent } from './about/about.component';
import { ProgressDialogService } from './progress-dialog.service';

// function authHttpServiceFactory(http: Http, options: RequestOptions) {
//   return new AuthHttp(new AuthConfig({
//     tokenName: 'access_token'
//   }), http, options);
// }

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthService,
    ProgressDialogService,
    // {
    //   provide: AuthHttp,
    //   useFactory: authHttpServiceFactory,
    //   deps: [Http, RequestOptions]
    // }
  ],declarations: [HeaderComponent, FooterComponent, LandingComponent, LoginComponent, RegistrasiComponent, LupaComponent, AboutComponent],
  exports: [HeaderComponent, FooterComponent, LandingComponent, LoginComponent, RegistrasiComponent, AboutComponent]
})
export class SharedModule { }
