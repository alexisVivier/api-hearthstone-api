import { CardService } from "./../services/card.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  cards;
  imgSrc = "";
  cardName = "Leeroy Jenkins";
  cardSet;
  cardNameInput;

  constructor(private cardService: CardService) {}

  getCard(name) {
    this.cardService.getCardByName(name).subscribe(data => {
      this.cards = data;
      this.imgSrc = data[0].img;
      this.cardSet = data[0].cardSet;
      this.cardName = data[0].name;
      console.log(this.cards);
    });
  }

  ionViewWillEnter() {
    this.getCard("Leeroy Jenkins");
  }
}
