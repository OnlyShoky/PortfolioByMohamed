import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PreloadService } from '../../shared/services/pre-load.service';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  constructor(preLoadService: PreloadService){
    preLoadService.preloadLogos();
    preLoadService.preloadImages();
  }


}
