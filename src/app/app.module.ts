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
import { CustomDirective } from "./custom.directive";
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
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateAssignComponent } from './template-assign/template-assign.component';
import { MatModule } from "./appModules/mat.module";
import { PracticeComponent } from './practice/practice.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AngularCalcuComponent } from './angular-calcu/angular-calcu.component';
import { AssiRecativeComponent } from './assi-recative/assi-recative.component';
import { AssiReactive2Component } from './assi-reactive2/assi-reactive2.component';
import { MyserviceService } from "./services/myservice.service";
import { PasswordComponent } from './password/password.component';
import { ServicePracticeComponent } from './service-practice/service-practice.component';
import { HttpClientModule } from "@angular/common/http";
import { MyappComponent } from './myapp/myapp.component';
import { AssignReactive2Component } from './assign-reactive2/assign-reactive2.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { CustomPipe } from './custom.pipe';
import { SearchPipe } from './search.pipe';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { SearchUserPipe } from './search-user.pipe';

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
    CustomDirective,
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
    MyappComponent,
    AssignReactive2Component,
    PipeexampleComponent,
    CustomPipe,
    SearchPipe,
    ProductFilterComponent,
    SearchUserPipe,
  ],
  imports: [UserModule,
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
    HttpClientModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
