import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ProfileDataService } from './ProfileData.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class PreloadService {



  private logos : string[] = [];
  private images : string[] = [];


  constructor(privaterofileDataService: ProfileDataService,@Inject(PLATFORM_ID) private platformId: Object) { 
    this.logos = privaterofileDataService.getLogos();
    this.images = privaterofileDataService.getImages();
  }

  preloadImage(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      const img = new Image();
      img.src = url;
    }
  }

  preloadImages() {
    this.images.forEach((image) => {
      this.preloadImage(`${image}`);
    });
  }
  

  preloadLogos() {
    this.logos.forEach((logo) => {
      this.preloadImage(`assets/logos/${logo}.jpg`);
    });
  }

}