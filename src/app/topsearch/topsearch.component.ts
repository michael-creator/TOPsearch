import { Component, OnInit } from '@angular/core';
import { Topsearch } from '../topsearch';
@Component({
  selector: 'app-topsearch',
  templateUrl: './topsearch .component.html',
  styleUrls: ['./topsearch.component.css']
})
export class TopsearchComponent implements OnInit {
  topsearchs:Topsearch[] = [
  new Topsearch(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
  new Topsearch(2,'Buy Cookies','I have to buy cookies for the parrot'),
  new Topsearch(3,'Get new Phone Case','Diana has her birthday coming up soon'),
  new Topsearch(4,'Get Dog Food','Pupper likes expensive snacks'),
  new Topsearch(5,'Solve math homework','Damn Math'),
  new Topsearch(6,'Plot my world domination plan','Cause I am an evil overlord',),
];

  constructor() { }
  ngOnInit() {
  }
}
