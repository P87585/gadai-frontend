import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }   from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PengajuanComponent } from './pengajuan/pengajuan.component';
import { HistoryComponent } from './history/history.component';
import { SimulasiComponent } from './simulasi/simulasi.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../shared/auth.guard';
import { StlComponent } from './stl/stl.component';


const routingGadai : Routes = [
	{path : 'gadai/simulasi', component : SimulasiComponent, canActivate: [AuthGuard]},
	{path : 'gadai/pengajuan', component : PengajuanComponent, canActivate: [AuthGuard]},
	{path : 'gadai/history', component : HistoryComponent, canActivate: [AuthGuard]},
  {path : 'gadai/stl', component : StlComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
   RouterModule.forChild(routingGadai),
  ],
  declarations: [PengajuanComponent, HistoryComponent, SimulasiComponent,FileSelectDirective, StlComponent]
})
export class GadaiModule { }
