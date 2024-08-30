import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeartService {

  constructor() { }

  setHeartStatus(status: boolean): void {
    sessionStorage.setItem('heartStatus', JSON.stringify(status));
  }

  getHeartStatus(): boolean {
    const status = sessionStorage.getItem('heartStatus');
    return status ? JSON.parse(status) : false;
  }
}
