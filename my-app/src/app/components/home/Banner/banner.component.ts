import { Component } from '@angular/core';
import { config } from '../../../configurations/local';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  bannerUrl: string | undefined;

  constructor() {
  }

  ngOnInit() {
    this.bannerUrl = config.bannerUrl;
  }
}

