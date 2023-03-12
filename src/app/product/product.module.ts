import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CameraComponent } from "./camera/camera.component";
import { LaptopComponent } from "./laptop/laptop.component";
import { WatchComponent } from "./watch/watch.component";
import { ProductComponent } from "./product.component";
import { RouterModule } from "@angular/router";
import { UtilityModule } from "../shared/utility/utility.module";

@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    CameraComponent,
    WatchComponent,
  ],
  imports: [CommonModule, RouterModule,UtilityModule],

})
export class ProductModule {}
