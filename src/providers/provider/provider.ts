import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';


@Injectable()
    export class SongService {
    
      constructor(public http: HttpClient) {
        console.log('Hello Provider Provider');
      }
      getSongs(){return this.http.get("http://localhost:8080/v1/canciones")
                                 .map(response => response)
                                 .catch(error => error)}
}