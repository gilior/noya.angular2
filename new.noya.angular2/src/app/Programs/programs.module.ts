import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { ProgramsRoutingModule } from './programs-routing.module';
import { Programs } from "./programs";

@NgModule({
  imports: [
    SharedModule,
    ProgramsRoutingModule
  ],
  declarations: [Programs]
})
export class ProgramsModule { }
