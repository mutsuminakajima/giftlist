import { Injectable } from '@angular/core';
import { Person } from "./person";
import { PERSONS } from "./mock-persons";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class GiftlistService {

  constructor(private messageService: MessageService) { }

  getPersons(): Observable<Person[]>{

      // TODO: send the message _after_ fetching the persons
    this.messageService.add("GiftListService: fetched persons");
    return of(PERSONS);

  }
}

