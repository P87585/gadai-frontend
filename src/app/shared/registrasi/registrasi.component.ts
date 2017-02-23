import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProgressDialogService } from '../progress-dialog.service';

@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.component.html',
  styleUrls: ['./registrasi.component.css']
})
export class RegistrasiComponent implements OnInit {

  username: string;
  password: string;

  constructor(private auth: AuthService,
    private router: Router,
    private progressService: ProgressDialogService) { }

  ngOnInit() {
  }

  register() {
    console.log('Username :' + this.username);
    console.log('password :' + this.password);

    // this.progressService.showDialog("Memeriksa username dan password");

    // setTimeout(() => {
    //   if (this.auth.register(this.username, this.password)) {
    //     console.log("Register sukses");
    //     this.router.navigate(["/login"]);
    //   } else {
    //     console.log("Register gagal");
    //   }

    //   this.progressService.hideDialog();
    // }, 3 * 1000);
  }
}
