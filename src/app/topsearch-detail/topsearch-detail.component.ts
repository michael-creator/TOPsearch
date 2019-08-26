import { Component, OnInit, Input} from '@angular/core';
import { Topsearch } from '../topsearch';
@Component({
  selector: 'app-topsearch-detail',
  templateUrl: './topsearch-detail.component.html',
  styleUrls: ['./topsearch-detail.component.css']
})
export class TopsearchDetailComponent implements OnInit {

  @Input() topsearch: Topsearch;
  constructor() { }

  ngOnInit() {
  }

}
