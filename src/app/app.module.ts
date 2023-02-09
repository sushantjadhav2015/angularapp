import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DemoComponent } from "./demo/demo.component";
import { TestComponent } from "./test/test.component";
import { Test2Component } from "./test2/test2.component";
import { FormsModule } from "@angular/forms";
import { CardComponent } from './card/card.component';
import { AutoPasswordComponent } from './auto-password/auto-password.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [AppComponent, DemoComponent, TestComponent, Test2Component, CardComponent, AutoPasswordComponent, OutputDecoratorComponent, NgForComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
