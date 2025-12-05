import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ProfileDataService } from './profile-data.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class PreloadService {



  private logos: string[] = [];
  private images: string[] = [];


  constructor(private profileDataService: ProfileDataService, @Inject(PLATFORM_ID) private platformId: Object) {
    this.logos = profileDataService.getLogos();
    this.images = profileDataService.getImages();
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
