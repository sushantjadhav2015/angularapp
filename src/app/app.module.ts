import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { TestComponent } from "./test/test.component";
import { Test2Component } from "./test2/test2.component";
import { FormsModule } from "@angular/forms";
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
import { PracticeComponent } from "./practice/practice.component";
import { MatExpansionModule } from "@angular/material/expansion";

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
    PracticeComponent,
  ],
  imports: [
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
