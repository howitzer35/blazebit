import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { User } from '../models/user';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/expand';
import 'rxjs/add/observable/empty';

@Injectable()
export class FunFastUserService {

  public userChanged: Subject<User>;
  public currentUser: User;

  private LocalStorageManager = {
    setValue: function (key, value) {
      window.localStorage.setItem(key, JSON.stringify(value));
    },
    getValue: function (key) {
      try {
        return JSON.parse(window.localStorage.getItem(key));
      } catch (e) {
        return null;
      }
    },
    removeValue: function(key) {
      window.localStorage.removeItem(key);
    }
  };

  constructor(private dataService: DataService) {
    this.userChanged = new Subject<User>();
    this.currentUser = this.LocalStorageManager.getValue("user");
  }

  login(username: string, password: string): Observable<User> {
    const payload = { username, password }
    return this.dataService
    .editRecord('session', payload, 'mine')
    .do(user => this.userChanged.next(user))
    .do(user => this.currentUser = user)
    .do(user => this.LocalStorageManager.setValue("user", user))
    .catch(e => {
      this.userChanged.next(null);
      this.LocalStorageManager.removeValue("user");
      return Observable.throw(e);
    });
  }

  logout(): Observable<any> {
    this.currentUser = null;
    return this.dataService
      .deleteRecord('session', 'mine')
      .do(user => this.userChanged.next(null))
      .do(user => this.LocalStorageManager.removeValue("user"))
      .catch(e => {
        this.userChanged.next(null);
        this.LocalStorageManager.removeValue("user");
        return Observable.throw(e);
      });
  }



  signup(username: string, password: string): Observable<User> {
    return this.dataService
      .addRecord('users/new', { username, password })
      .do(user => this.userChanged.next(user))
      .do(user => this.LocalStorageManager.setValue("user", user))
      .do(user => this.currentUser = user);
  }

}
