import { Mechanic } from './mechanic.model';

export interface Card {
    cardId: string;
    dbfId: string;
    name: string;
    cardSet: string;
    type: string;
    faction: string;
    rarity: string;
    cost: number;
    attack: number;
    health: number;
    text: string;
    flavor: string;
    artist: string;
    collectible: boolean;
    elite: boolean;
    playerClass: string;
    img: string;
    imgGold: string;
    locale: string;
    mechanics: Mechanic[];
}