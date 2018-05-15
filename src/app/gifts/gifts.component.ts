import { Component, OnInit } from '@angular/core';
import { Person } from "../person";
import { GiftlistService } from "../giftlist.service";

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

    persons: Person[];

    constructor(private giftlistService:GiftlistService){}

  ngOnInit() {
      this.getGifts();
  }

  getGifts(): void {
        this.giftlistService.getPersons().subscribe(persons => this.persons = persons);
  }

}
