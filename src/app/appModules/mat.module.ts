import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';

const material = [MatButtonToggleModule, MatChipsModule,MatDatepickerModule,MatGridListModule];
@NgModule({
  declarations: [],
  imports: [material],
  exports: [material],
})
export class MatModule {}
