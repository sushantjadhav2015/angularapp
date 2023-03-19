import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerRoutingModule } from "./customer-routing.module";
import {MatDividerModule} from '@angular/material/divider';
@NgModule({
  declarations: [CustomerListComponent],
  imports: [CommonModule, CustomerRoutingModule,MatDividerModule],
})
export class CustomerModule {
  constructor() {
    console.log(`customerModule called`);
  }
}
