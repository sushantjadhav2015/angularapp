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
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-hocks",
  templateUrl: "./hocks.component.html",
  styleUrls: ["./hocks.component.css"],
})
export class HocksComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  // this decorater used for AfterContentInit and AfterContentInitChecked
  @ContentChild("child", { static: false }) contentChild: ElementRef;

  // this decorater used for get data from parent
  @Input() parentData: string;

  // this decorater is used for
  @ViewChild("childHooks", { static: false }) viewChild: ElementRef;
  constructor() {
    console.log(`HooksComponate constructor called`);
  }

  ngAfterViewChecked(): void {
    // console.log("HooksComponent ngAfterViewChecked called", this.viewChild);
    // this.viewChild.nativeElement.setAttribute(
    //   "style",
    //   `color: ${this.parentData}`
    // );
  }
  ngAfterViewInit(): void {
    // console.log("HooksComponent ngAfterViewInit called", this.viewChild);
    // this.viewChild.nativeElement.setAttribute(
    //   "style",
    //   `color: ${this.parentData}`
    // );
  }
  ngAfterContentChecked(): void {
    // console.log("HooksComponate AfterContentChecked called");
    // this.contentChild.nativeElement.setAttribute(
    //   "style",
    //   `color: ${this.parentData}`
    // );
  }

  ngAfterContentInit(): void {
    // console.log("`HooksComponant ngAfterContentInit called", this.contentChild);
    // this.contentChild.nativeElement.setAttribute(
    //   "style",
    //   `color:${this.parentData}`
    // );
  }

  ngDoCheck(): void {
    // console.log(`HooksComponant ngDoCheck called`);
  }

  ngOnInit(): void {
    // console.log(`HooksComponant OnInit called`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(`HocksComponent ngOnChanges called`, changes);
  }
}
