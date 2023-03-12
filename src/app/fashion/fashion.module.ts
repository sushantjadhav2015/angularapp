import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FashionComponent } from "./fashion/fashion.component";
import { ManswearComponent } from "./fashion/manswear/manswear.component";
import { WomenwearComponent } from "./fashion/womenwear/womenwear.component";
import { KidsComponent } from "./fashion/kids/kids.component";
import { BoyswearComponent } from "./fashion/boyswear/boyswear.component";
import { MatChipsModule } from "@angular/material/chips";
import { RouterModule } from "@angular/router";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { DetailsComponent } from './details/details.component';
import { UtilityModule } from "../shared/utility/utility.module";
import { FormsModule } from "@angular/forms";
import { SearchCatogaryPipe } from "../pipes/search-catogary.pipe";

@NgModule({
  declarations: [
    FashionComponent,
    ManswearComponent,
    WomenwearComponent,
    KidsComponent,
    BoyswearComponent,
    DetailsComponent,
    SearchCatogaryPipe

  ],
  imports: [
    CommonModule,
    MatChipsModule,
    RouterModule,
    MatListModule,
    MatButtonModule,
    UtilityModule,
    FormsModule,
  ],
})
export class FashionModule {}
