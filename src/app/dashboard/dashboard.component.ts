import { Component, OnInit } from '@angular/core';
import { Person } from "../person";
import { GiftlistService } from "../giftlist.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  persons: Person[] = [];

  constructor(private giftListService: GiftlistService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons(): void {
    this.giftListService.getPersons().subscribe( persons => this.persons = persons.slice(1,5));
  }

}
