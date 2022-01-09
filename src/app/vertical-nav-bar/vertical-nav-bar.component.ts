import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-vertical-nav-bar',
  templateUrl: './vertical-nav-bar.component.html',
  styleUrls: ['./vertical-nav-bar.component.css'],
})
export class VerticalNavBarComponent implements OnInit, OnChanges {
  @Input() verticalTabData: any;
  public tabs: any;
  active: string;
  selectedTab;
  constructor() {}

  ngOnInit(): void {
    this.tabs = this.verticalTabData.tabs;
    this.active = this.verticalTabData?.tabs[0].name;
    this.selectedTab = this.active;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.tabs = changes.verticalTabData.currentValue?.tabs;
  }
  onNavChange(changeEvent: NgbNavChangeEvent) {
    this.selectedTab = changeEvent.nextId;
  }
}
