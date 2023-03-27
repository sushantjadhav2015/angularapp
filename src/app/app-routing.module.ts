import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { DemopostComponent } from "./demopost/demopost.component";
import { DemouserComponent } from "./demouser/demouser.component";
import { DemouserdetailsComponent } from "./demouserdetails/demouserdetails.component";
import { EproductComponent } from "./eproduct/eproduct.component";
import { RefrigeratorComponent } from "./eproduct/refrigerator/refrigerator.component";
import { VacuumcleanerComponent } from "./eproduct/vacuumcleaner/vacuumcleaner.component";
import { WashingmachineComponent } from "./eproduct/washingmachine/washingmachine.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { CameraComponent } from "./product/camera/camera.component";
import { LaptopComponent } from "./product/laptop/laptop.component";
import { MobileComponent } from "./product/mobile/mobile.component";
import { ProductComponent } from "./product/product.component";
import { WatchComponent } from "./product/watch/watch.component";
import { UserdetailsComponent } from "./userdetails/userdetails.component";
import { TemplateformComponent } from "./templateform/templateform.component";
import { OrderlistComponent } from "./orders/orderlist/orderlist.component";
import { FashionComponent } from "./fashion/fashion/fashion.component";
import { BoyswearComponent } from "./fashion/fashion/boyswear/boyswear.component";
import { KidsComponent } from "./fashion/fashion/kids/kids.component";
import { ManswearComponent } from "./fashion/fashion/manswear/manswear.component";
import { WomenwearComponent } from "./fashion/fashion/womenwear/womenwear.component";
import { AddToCardComponent } from "./add-to-card/add-to-card.component";
import { DetailsComponent } from "./fashion/details/details.component";
import { CustomerListComponent } from "./customer/customer-list/customer-list.component";
import { AdminListComponent } from "./admin/admin-list/admin-list.component";
import { TodoComponent } from "./todo/todo.component";
import { FirebasePracticeComponent } from "./firebase-practice/firebase-practice.component";
import { LoginformComponent } from "./loginform/loginform.component";
import { AuthGuard } from "./auth.guard";
import { WikipidiaComponent } from "./wikipidia/wikipidia.component";
import { WikiSearchComponent } from "./wiki-search/wiki-search.component";
import { HocksComponent } from "./hocks/hocks.component";
import { HooksComponent } from "./hooks/hooks.component";
import { HooksChildComponent } from "./hooks/hooks-child/hooks-child.component";
import { AddUserCanDeactiveComponent } from "./add-user-can-deactive/add-user-can-deactive.component";
import { UnsavedchangesGuard } from "./unsavedchanges.guard";
import { DemopostdetailsComponent } from "./demouserdetails/demopostdetails/demopostdetails.component";
import { ResolveGaurdGuard } from "./resolve-gaurd.guard";
import { RxjsComponent } from "./rxjs/rxjs.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
    children: [{ path: "firebase", component: FirebasePracticeComponent }],
  },
  { path: "aboutus", component: AboutusComponent }, //we are providing path of component or maping path of component
  { path: "contactus", component: ContactusComponent },
  {
    path: "product",
    canActivate: [AuthGuard],
    component: ProductComponent,
    children: [
      { path: "laptop", component: LaptopComponent },
      { path: "mobile", component: MobileComponent },
      { path: "camera", component: CameraComponent },
      { path: "watch", component: WatchComponent },
    ],
  },
  {
    path: "eproduct",
    children: [
      { path: "", component: EproductComponent },
      { path: "washingmachine", component: WashingmachineComponent },
      { path: "vacuumcleaner", component: VacuumcleanerComponent },
      { path: "refrigerator", component: RefrigeratorComponent },
    ],
  },
  { path: "post", component: DemopostComponent }, //used for route parameter
  { path: "postdetails/:id", component: DemopostdetailsComponent },

  { path: "user", component: DemouserComponent }, //used for route parameter
  { path: "userdetails/:id", component: DemouserdetailsComponent },

  { path: "userdetail", component: UserdetailsComponent }, // used for open on new page by programaticaly
  { path: "login", component: LoginformComponent }, // used for open on new page by programaticaly

  { path: "order", component: OrderlistComponent },

  {
    path: "fashion",
    component: FashionComponent,
    children: [
      { path: "boys", component: BoyswearComponent },
      { path: "kids", component: KidsComponent },
      { path: "manswear", component: ManswearComponent },
      { path: "womenwear", component: WomenwearComponent },
    ],
  },
  { path: "details/:id", component: DetailsComponent },
  { path: "addtocard", component: AddToCardComponent },

  // {path:'customer',component:CustomerListComponent},//used to show lazy module loading
  // {path:'admin', component:AdminListComponent},
  {
    path: "customer",
    loadChildren: "./customer/customer.module#CustomerModule",
  },
  { path: "admin", loadChildren: "./admin/admin.module#AdminModule" },
  { path: "todo", component: TodoComponent },
  { path: "wikipidia", component: WikipidiaComponent },
  { path: "wikiSearch", component: WikiSearchComponent },
  { path: "hooks", component: HocksComponent },
  {path:"rxjs",component:RxjsComponent},
  {
    path: "hook",
    component: HooksComponent,
    children: [{ path: "hooks_child", component: HooksChildComponent }],
  },

  {
    path: "adduser",
    component: AddUserCanDeactiveComponent,
    canDeactivate: [UnsavedchangesGuard],
  },

  { path: 'userdetails', component: UserdetailsComponent, resolve: {
    data: ResolveGaurdGuard
  }},


  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  //NgModel provide meta data to corsponding modules
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
