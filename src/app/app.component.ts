import { Component } from '@angular/core';
import { DataProviderService } from './data-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public tabName: string;
  public tabData: any;
  title = 'content-enablers';
  constructor(private readonly service: DataProviderService) {}
  public selectedTab(event: any): void {
    this.tabName = event;
    this.tabData = this.service
      .getApplicationData()
      .find((data) => data.name === this.tabName);
  }
}
