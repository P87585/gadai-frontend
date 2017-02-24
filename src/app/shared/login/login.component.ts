import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
// import { ProgressDialogService } from '../progress-dialog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // username: string;
  // password: string;

  username: string = "user001";
  password: string = "u00123";

  constructor(private auth: AuthService, private router: Router
  // ,private progressService: ProgressDialogService
  ) { }

  ngOnInit() {
  }

  login() {
    console.log('Username :' + this.username);
    console.log('password :' + this.password);

    // this.progressService.showDialog("Memeriksa username dan password");

    // setTimeout(() => {
    //   if (this.auth.login(this.username, this.password)) {
    //     console.log("Login sukses");
    //     this.router.navigate(["/"]);
    //   } else {
    //     console.log("Login gagal");
    //   }

    //   this.progressService.hideDialog();
    // }, 3 * 1000);


    this.auth.login(this.username, this.password)
      .then(sukses => {
        if (sukses) {
          this.router.navigate(['/']);
        } else {
          console.log("Login gagal");
        }
      });

  }
}
