import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';

@Component({
  selector: 'app-stl',
  templateUrl: './stl.component.html',
  styleUrls: ['./stl.component.css']
})
export class StlComponent implements OnInit {

  constructor(public authHttp: AuthHttp) { }

  ngOnInit() {
  }


  getHargaJualEmas(gram: number): Promise<number> {
    let url = "/api/harga/";

    this.authHttp.get(url)
      .subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Request Complete')
      );

    return Promise.resolve(gram * 575000);
  }

  getHargaBeliEmas(gram: number) {
    return gram * 540000;
  }
}
