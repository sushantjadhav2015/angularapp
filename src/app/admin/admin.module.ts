import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminListComponent } from "./admin-list/admin-list.component";
import { AdminRoutingModule } from "./admin-routing.module";

// const adminRoutes: Routes = [{ path: "", component: AdminListComponent }];

@NgModule({
  declarations: [AdminListComponent],
  imports: [CommonModule,AdminRoutingModule],
})
export class AdminModule {
  constructor() {
    console.log(`AdminModule called`);
  }
}
