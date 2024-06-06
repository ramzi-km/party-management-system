import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartiesRoutingModule } from './parties-routing.module';
import { ListPartiesComponent } from './pages/list-parties/list-parties.component';


@NgModule({
  declarations: [
    ListPartiesComponent
  ],
  imports: [
    CommonModule,
    PartiesRoutingModule
  ]
})
export class PartiesModule { }
