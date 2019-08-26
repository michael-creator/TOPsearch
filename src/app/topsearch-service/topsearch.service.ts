import { Injectable } from '@angular/core';
import { Topsearch } from '../topsearch';

@Injectable({
  providedIn: 'root'
})
export class TopsearchService {

  getTopsearch(){
    return Topsearch
  }

  constructor() { }
}