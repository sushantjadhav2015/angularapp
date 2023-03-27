import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { TestComponent } from "./test/test.component";
import { Test2Component } from "./test2/test2.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CardComponent } from "./card/card.component";
import { AutoPasswordComponent } from "./auto-password/auto-password.component";
import { OutputDecoratorComponent } from "./output-decorator/output-decorator.component";
import { NgForComponent } from "./ng-for/ng-for.component";
import { NgifComponent } from "./ngif/ngif.component";
import { SwitchCaseComponent } from "./ngswitch-case/ngswitch-case.component";
import { NgstyleComponent } from "./ngstyle/ngstyle.component";
import { NgclassComponent } from "./ngclass/ngclass.component";
import { AssignDirectiveComponent } from "./assign-directive/assign-directive.component";

// angular material modules
// import { CustomDirective } from "./custom.directive";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { TemplateformComponent } from "./templateform/templateform.component";
import { MatSliderModule } from "@angular/material/slider";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatNativeDateModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatStepperModule } from "@angular/material/stepper";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatExpansionModule } from "@angular/material/expansion";
import { UserModule } from "./user/user.module";
import { ReactiveformComponent } from "./reactiveform/reactiveform.component";
import { TemplateAssignComponent } from "./template-assign/template-assign.component";
import { MatModule } from "./appModules/mat.module";
import { PracticeComponent } from "./practice/practice.component";
import { CalculatorComponent } from "./calculator/calculator.component";
import { AngularCalcuComponent } from "./angular-calcu/angular-calcu.component";
import { AssiRecativeComponent } from "./assi-recative/assi-recative.component";
import { AssiReactive2Component } from "./assi-reactive2/assi-reactive2.component";
import { MyserviceService } from "./services/myservice.service";
import { PasswordComponent } from "./password/password.component";
import { ServicePracticeComponent } from "./service-practice/service-practice.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { PipeexampleComponent } from "./pipeexample/pipeexample.component";
import { CustomPipe } from "./custom.pipe";
import { SearchPipe } from "./pipes/search.pipe";
import { ProductFilterComponent } from "./product-filter/product-filter.component";
import { SearchUserPipe } from "./pipes/search-user.pipe";
import { Comp1Component } from "./comp1/comp1.component";
import { Comp2Component } from "./comp2/comp2.component";
import { Comp3Component } from "./comp3/comp3.component";
import { Comp4Component } from "./comp4/comp4.component";
import { Address1Component } from "./address1/address1.component";
import { Address2Component } from "./address2/address2.component";
import { Address3Component } from "./address3/address3.component";
import { Address4Component } from "./address4/address4.component";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { ContactusComponent } from "./contactus/contactus.component";
import { HomeComponent } from "./home/home.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { EproductComponent } from "./eproduct/eproduct.component";
import { WashingmachineComponent } from "./eproduct/washingmachine/washingmachine.component";
import { RefrigeratorComponent } from "./eproduct/refrigerator/refrigerator.component";
import { VacuumcleanerComponent } from "./eproduct/vacuumcleaner/vacuumcleaner.component";
import { MobileComponent } from "./product/mobile/mobile.component";
import { DemopostComponent } from "./demopost/demopost.component";
import { DemouserComponent } from "./demouser/demouser.component";
import { DemouserdetailsComponent } from "./demouserdetails/demouserdetails.component";
import { UserdetailsComponent } from "./userdetails/userdetails.component";
import { ProductModule } from "./product/product.module";
import { OrdersModule } from "./orders/orders.module";
import { FashionModule } from "./fashion/fashion.module";
import { AddToCardComponent } from "./add-to-card/add-to-card.component";
import { FashComponent } from "./fash/fash.component";
import { CustomerModule } from "./customer/customer.module";
import { AdminModule } from "./admin/admin.module";
import { TodoComponent } from "./todo/todo.component";
import { FirebasePracticeComponent } from "./firebase-practice/firebase-practice.component";
import { LoginformComponent } from "./loginform/loginform.component";
import { AuthInterceptorService } from "./auth(interceptor)/auth-interceptor.service";
import { WikipidiaComponent } from "./wikipidia/wikipidia.component";
import { HocksComponent } from "./hocks/hocks.component";
import { WikiSearchComponent } from "./wiki-search/wiki-search.component";
import { PageListComponent } from "./wiki-search/page-list/page-list.component";
import { SearchBarComponent } from "./wiki-search/search-bar/search-bar.component";
import { HooksComponent } from './hooks/hooks.component';
import { HooksChildComponent } from './hooks/hooks-child/hooks-child.component';
import { DemopostdetailsComponent } from "./demouserdetails/demopostdetails/demopostdetails.component";
import { AddUserCanDeactiveComponent } from "./add-user-can-deactive/add-user-can-deactive.component";
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TestComponent,
    Test2Component,
    CardComponent,
    AutoPasswordComponent,
    OutputDecoratorComponent,
    NgForComponent,
    NgifComponent,
    SwitchCaseComponent,
    NgstyleComponent,
    NgclassComponent,
    AssignDirectiveComponent,
    //CustomDirective,
    TemplateformComponent,
    ReactiveformComponent,
    TemplateAssignComponent,
    PracticeComponent,
    CalculatorComponent,
    AngularCalcuComponent,
    AssiRecativeComponent,
    AssiReactive2Component,
    PasswordComponent,
    ServicePracticeComponent,
    PipeexampleComponent,
    CustomPipe,
    SearchPipe,
    ProductFilterComponent,
    SearchUserPipe,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Address1Component,
    Address2Component,
    Address3Component,
    Address4Component,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PagenotfoundComponent,
    EproductComponent,
    WashingmachineComponent,
    RefrigeratorComponent,
    VacuumcleanerComponent,
    MobileComponent,
    DemopostComponent,
    DemopostdetailsComponent,
    DemouserComponent,
    DemouserdetailsComponent,
    UserdetailsComponent,
    AddToCardComponent,
    FashComponent,
    TodoComponent,
    FirebasePracticeComponent,
    LoginformComponent,
    WikipidiaComponent,
    HocksComponent,
    WikiSearchComponent,
    PageListComponent,
    SearchBarComponent,
    HooksComponent,
    HooksChildComponent,
    AddUserCanDeactiveComponent,
    RxjsComponent
  ],
  imports: [
    UserModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatModule,
    HttpClientModule,
    ProductModule,
    OrdersModule,
    FashionModule,
    CustomerModule,
    AdminModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    MyserviceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
