import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { Subscription } from "rxjs";
import { DemoService } from "src/app/services/demo.service";

@Component({
  selector: "app-hooks-child",
  templateUrl: "./hooks-child.component.html",
  styleUrls: ["./hooks-child.component.css"],
})
export class HooksChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // this decorater used for AfterContentInit and AfterContentInitChecked
  @ContentChild("childs", { static: false }) contentChild: ElementRef;

  // this decorater used for get data from parent
  @Input() parent_Data: string;

  // this decorater is used for afterViewInt and AfterViewChecked
  @ViewChild("childHooks", { static: false }) viewChild: ElementRef;

  subscription: Subscription;
  // counter:;
  num: any;

  constructor(private demoService: DemoService) {
    console.log(`HooksComponate constructor called`);
  }

  ngOnDestroy(): void {
    console.log("HooksComponent ngOnDestroy called");
    // clearInterval(this.counter);
    this.subscription.unsubscribe();
  }

  ngAfterViewChecked(): void {
    console.log("HooksComponent ngAfterViewChecked called", this.viewChild);
    this.viewChild.nativeElement.setAttribute(
      "style",
      `color: ${this.parent_Data}`
    );
  }


  ngAfterViewInit(): void {
    console.log("HooksComponent ngAfterViewInit called", this.viewChild);
    this.viewChild.nativeElement.setAttribute(
      "style",
      `color: ${this.parent_Data}`
    );
  }
  ngAfterContentChecked(): void {
    console.log("HooksComponate AfterContentChecked called");
    this.contentChild.nativeElement.setAttribute(
      "style",
      `color: ${this.parent_Data}`
    );
  }

  ngAfterContentInit(): void {
    console.log("`HooksComponant ngAfterContentInit called", this.contentChild);
    this.contentChild.nativeElement.setAttribute(
      "style",
      `color:${this.parent_Data}`
    );
  }

  ngDoCheck(): void {
    console.log(`HooksComponant ngDoCheck called`);
  }

  ngOnInit(): void {
    console.log(`HooksComponant OnInit called`);

    this.subscription = this.demoService.getUsers().subscribe((res) => {
      console.log("users from hooks component", res);
    });

// // this code is used for example of distroyed hooks
//     this.counter = setInterval(() => {
//       this.num = this.num + 1;
//       console.log(this.num);
//     }, 1000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`HocksComponent ngOnChanges called`, changes);
  }
}
