import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})


export class IntroComponent implements OnInit, OnDestroy {
  roles: string[] = ["Software Engineer .", "AI Engineer .", "Robotics Engineer ."];
  roleIndex: number = 0;
  charIndex: number = 0;
  dynamicText: string = '';
  typingDelay: number = 100;
  erasingDelay: number = 100;
  nextRoleDelay: number = 2000;
  typing: boolean = true;
  animationFrameId: number | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startTypingEffect();
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId && isPlatformBrowser(this.platformId)) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  startTypingEffect(): void {
    if (this.typing) {
      if (this.charIndex < this.roles[this.roleIndex].length) {
        this.dynamicText += this.roles[this.roleIndex].charAt(this.charIndex);
        this.charIndex++;
        this.animationFrameId = window.requestAnimationFrame(() => this.delayedStart(this.typingDelay));
      } else {
        this.typing = false;
        this.animationFrameId = window.requestAnimationFrame(() => this.delayedStart(this.nextRoleDelay));
      }
    } else {
      if (this.charIndex > 0) {
        this.dynamicText = this.roles[this.roleIndex].substring(0, this.charIndex - 1);
        this.charIndex--;
        this.animationFrameId = window.requestAnimationFrame(() => this.delayedStart(this.erasingDelay));
      } else {
        this.typing = true;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
        this.animationFrameId = window.requestAnimationFrame(() => this.delayedStart(this.typingDelay));
      }
    }
  }

  delayedStart(delay: number): void {
    setTimeout(() => {
      this.startTypingEffect();
    }, delay);
  }
}