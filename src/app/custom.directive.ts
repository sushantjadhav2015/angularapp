import { Directive, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appCustom]",
})
export class CustomDirective {
  constructor(private elem: ElementRef, private render:Renderer2) {
    elem.nativeElement.style.backgroundColor = "gray";

    // elem.nativeElement.style.display="none"

    render.setStyle(elem.nativeElement, 'backgroundColor','red')
  }
}

