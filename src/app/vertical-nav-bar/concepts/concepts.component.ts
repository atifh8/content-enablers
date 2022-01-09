import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.css'],
})
export class ConceptsComponent implements OnInit, OnChanges {
  @Input() conceptList: any;
  updatedConceptList: any;
  constructor() {}

  ngOnInit(): void {
    this.updatedConceptList = this.conceptList;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.updatedConceptList = changes.conceptList.currentValue;
  }
}
