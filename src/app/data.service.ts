import { User } from './models/user';
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

    getRecord(endpoint: string, id): Observable<any> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        return this.http.get(apiUrl, { withCredentials: true })
            .map(this.extractData)
            .catch(this.handleError);
    }

    deleteRecord(endpoint: string, id:number | string): Observable<any> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        return this.http.delete(apiUrl, { withCredentials: true })
            .map(this.extractData)
            .catch(this.handleError);
    }

    editRecord(endpoint: string, record: any, id:number | string): Observable<any> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}`;
        return this.http.put(apiUrl, record, { withCredentials: true })
            .map(this.extractData)
            .catch(this.handleError);
    }

    //deletes 1 hike from the list wishlist hikes with for currentUser with a DELETE REQUEST
    deleteWishlistRecord(endpoint: string, id:number | string): Observable<any> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}/remove/wishlist`;
        return this.http.delete(apiUrl, { withCredentials: true })
            .map(this.extractData)
            .catch(this.handleError);
    }

    //adds 1 hike to list of completed hikes for currentUser with a PUT request
    manageHikeRecord(endpoint: string, id:number): Observable<any> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}/add/completed`;
        return this.http.put(apiUrl, {}, { withCredentials: true })
        .map(this.extractData);
    }

    //adds 1 hike to list of wishlists hikes for currentUser with a PUT request
    manageWishRecord(endpoint: string, id:number): Observable<any> {
        let apiUrl = `${this.baseUrl}${endpoint}/${id}/add/wishlist`;
        return this.http.put(apiUrl, {}, { withCredentials: true })
        .map(this.extractData);
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
}
