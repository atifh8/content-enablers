import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.css'],
})
export class ScenariosComponent implements OnInit, OnChanges {
  @Input() scenarios: any;
  updatedScenarios: any;
  constructor() {}

  ngOnInit(): void {
    this.updatedScenarios = this.scenarios;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.updatedScenarios = changes.scenarios.currentValue;
  }
}
