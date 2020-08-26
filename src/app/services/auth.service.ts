import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData$ = new BehaviorSubject<any>([]);

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }

  getUserData() {

  }

  login(postData: any): Observable<any> {
    return this.httpService.post('login', postData);
  }


}
