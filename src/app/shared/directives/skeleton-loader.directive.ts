import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: 'img[appSkeletonLoader]',
  standalone: true
})
export class SkeletonLoaderDirective implements OnInit {

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    const img: HTMLImageElement = this.el.nativeElement;
    const parent = img.parentElement;

    if (parent) {
      // Add skeleton loading class
      this.renderer.addClass(parent, 'skeleton-loading');

      // Remove skeleton on image load
      img.addEventListener('load', () => {
        this.renderer.removeClass(parent, 'skeleton-loading');
        this.renderer.addClass(parent, 'skeleton-loaded');
      }, { once: true });

      // Handle error case
      img.addEventListener('error', () => {
        this.renderer.removeClass(parent, 'skeleton-loading');
      }, { once: true });
    }
  }
}
