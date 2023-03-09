import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

const materialComponents=[
  MatButtonModule,
  MatTableModule,
  MatIconModule

]



@NgModule({
  declarations: [],
  imports: [
    materialComponents
  ],
  exports:[
    materialComponents
  ]
})
export class MaterialModule { }
