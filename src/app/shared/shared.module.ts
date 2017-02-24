import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegistrasiComponent } from './registrasi/registrasi.component';
import { LupaComponent } from './lupa/lupa.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { ModalModule } from 'ng2-bootstrap';

import { HttpModule, Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AuthService } from './auth.service';
import { UserService } from './user.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
	  tokenName: 'access_token'
	  }), http, options);
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpModule
  ],
  providers: [ AuthService , UserService, {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }],
  declarations: [HeaderComponent, FooterComponent, LandingComponent, LoginComponent, RegistrasiComponent, LupaComponent, AboutComponent, WelcomeComponent],
  exports: [HeaderComponent, FooterComponent, LandingComponent, LoginComponent, RegistrasiComponent, AboutComponent, WelcomeComponent]
})
export class SharedModule { }
