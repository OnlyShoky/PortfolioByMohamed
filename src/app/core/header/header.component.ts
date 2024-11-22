import { Component, ViewChild } from '@angular/core';
import { SharedMaterialModule } from '../../shared/material/shared-material.module';
import { MatDrawer } from '@angular/material/sidenav';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedMaterialModule,MatSidenavModule,RouterLink,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('drawer') drawer: MatDrawer | undefined;
  isLargerThan768: boolean = true; // Placeholder for the media query logic

  toggleDrawer() {
  this.drawer?.toggle();
  }
}
