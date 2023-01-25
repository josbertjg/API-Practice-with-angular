import { Injectable,Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  @Output() send: EventEmitter<any> = new EventEmitter;

  constructor() { }
}
