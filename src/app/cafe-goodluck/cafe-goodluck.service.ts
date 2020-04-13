import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CafeGoodluckInterface } from '../interfaces/cafe-goodluck';
import data from '../../data/data.json';

@Injectable({
  providedIn: 'root'
})

export class CafeGoodluckService {

  // private jsonData: any = data;

  constructor(private httpClient: HttpClient) {
    // console.log('jsondata', jsonData);
    // this.getJSON().subscribe(cafedata => {
    //   console.log('dataFormService', cafedata);
    // });
   }

  //  public getJSON(): Observable<any> {
  //    return this.httpClient.get<any>(this.jsonData);
  //  }

// baseUrl = data;

// getCafeGoodluckData(): Observable<CafeGoodluckInterface[]> {
//     return this.httpClient.get<CafeGoodluckInterface[]>(this.jsonData);
//   }
}
