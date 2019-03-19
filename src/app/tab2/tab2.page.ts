import { Card } from './../models/card.model';
import { Component } from '@angular/core';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  cards:Card[] = [];
  choice = 'Classic';
  trackByFn;

  constructor(private cardService: CardService) {}

  getCardsBySet(){

    this.cards = [];

    this.cardService.getCardsBySet(this.choice).subscribe(data => {

      data.forEach(el => {
        this.cards.push(el);
      })

    })

  }

  ionViewWillEnter(){
    this.getCardsBySet();
  }

}
