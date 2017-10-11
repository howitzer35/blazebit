import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/expand';
import 'rxjs/add/observable/empty';

@Injectable()
export class DataService {

    private baseUrl = 'https://blaze-bit.herokuapp.com/api/'

    found = false;

    constructor (private http: Http) {}

    getRecords(endpoint: string): Observable<any[]> {
        let apiUrl = this.baseUrl+endpoint;
        return this.http.get(apiUrl, { withCredentials: true })
            .map(this.extractData)
            .catch(this.handleError);
    }

    getRecord(endpoint: string, id): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        return this.http.get(apiUrl, { withCredentials: true })
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteRecord(endpoint: string, id:number): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        return this.http.delete(apiUrl, { withCredentials: true })
            .map(this.extractData)
            .catch(this.handleError);
    }

    editRecord(endpoint: string, record:object, id:number): Observable<object> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        return this.http.put(apiUrl, record, { withCredentials: true })
            .map(this.extractData)
            .catch(this.handleError);
    }

    addRecord(endpoint: string, record:object): Observable<any> {
        let apiUrl = `${this.baseUrl}${endpoint}`;
        console.log(apiUrl)
        return this.http.post(apiUrl, record, { withCredentials: true })
            .map(this.extractData);
    }


    private extractData(res: Response) {
        let results = res.json();
        return results || [];
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if(typeof error._body === "string"){
            errMsg = error._body
        }else{
            if (error instanceof Response) {
                if(error.status === 0){
                    errMsg = "Error connecting to API"
                }else{
                    const errorJSON = error.json();
                    errMsg = errorJSON.message;
                }
            }
        }
        return Observable.throw(errMsg);
    }

    // checkNameNotTaken(Response, username: string) {
    //     if (typeof Response != username)
    //         errMsg = error._body
    //     }else{
    //         if (error instanceof Response) {
    //             if(error.status === 0){
    //                 errMsg = "Error connecting to API"
    // }
        



    // checkNameNotTaken(endpoint: string, username: string) {
    //     let apiUrl = this.baseUrl+endpoint; 
    //     return this.http.get(apiUrl)
    //       .get('assets/users.json')
    //       .delay(1000)
    //       .map(res => res.json())
    //       .map(users => users.filter(user => user.username === username))
    //       .map(users => !users.length);
    //   }

    //come back after lunch and reconfigure this to check the error status, not the actual user DB 

}
