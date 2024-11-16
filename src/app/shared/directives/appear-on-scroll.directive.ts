import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Renderer2, OnInit, AfterViewInit, Input, ViewChild, Inject, PLATFORM_ID, EventEmitter, Output } from '@angular/core';
@Directive({
  selector: '[appAppearOnScroll]',
  standalone: true
})

export class AppearOnScrollDirective implements OnInit {
  private observer!: IntersectionObserver;
  @Output() elementVisible = new EventEmitter<boolean>();

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: object
  ) { }



  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      if (this.el.nativeElement) {
        this.initObserver();
        this.observer.observe(this.el.nativeElement);
      } else {
        console.error('Observer not initialized');
      }
    }
  }


  private initObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0.5) { // Visible when more than 50% in view
            this.renderer.removeClass(this.el.nativeElement, 'hidden');
            this.renderer.addClass(this.el.nativeElement, 'visible');
            this.elementVisible.emit(entry.isIntersecting);

          } else {
            this.renderer.removeClass(this.el.nativeElement, 'visible');
            this.renderer.addClass(this.el.nativeElement, 'hidden');
            this.elementVisible.emit(entry.isIntersecting);

          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: [0.5] // Trigger when 50% of the element is in view
      }
    );
  }
}