import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { DataProviderService } from '../data-provider.service'

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  public tabs: Array<string>
  // public counter = this.tabs.length + 1;
  public active;
  public selectedTab:string
  @Output() getSelectedTabId = new EventEmitter();
  constructor(private readonly service: DataProviderService) { }

  ngOnInit(): void {
    this.getTabs();
    this.selectedTab = this.tabs[0]
    this.getSelectedTabId.emit(this.selectedTab)
  }
  getData() {
    return this.service.getApplicationData();

  }
  public getTabs() {
    this.tabs = this.getData().map((data) => data.name)

  }
  onNavChange(changeEvent: NgbNavChangeEvent) {
    this.selectedTab = changeEvent.nextId;
    this.getSelectedTabId.emit(this.selectedTab)
  }
  // close(event: MouseEvent, toRemove: number) {
  //   this.tabs = this.tabs.filter(id => id !== toRemove);
  //   event.preventDefault();
  //   event.stopImmediatePropagation();
  // }

  // add(event: MouseEvent) {
  //   this.tabs.push(this.counter++);
  //   event.preventDefault();
  // }
}
