import { Card } from './../models/card.model';
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class CardService {
  url = "";                                      
  protected apiKey = "e6e0db4cdbmsh1878d9259f8587ep14f7e9jsn4e47fb3caa7f";
  httpOptions = {
    headers: new HttpHeaders({
      "X-RapidAPI-Key": this.apiKey,
      'Content-Type' : 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getAllCards() {
    return this.http
      .get(
        "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards",
        this.httpOptions
      )
      .pipe(map(data => data));
  }

  getCardByName(name) {

    let url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/" + name;

    return this.http
      .get(
        url,
        this.httpOptions
      )
      .pipe(map(data => data));
  }

  getCardsBySet(set):Observable<Array<Card>>{

    let url = "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/" + set;

    return <Observable<Array<Card>>>this.http
      .get(
        url,
        this.httpOptions
      );

  }
}
