import { Injectable } from '@angular/core';
import { Person } from "./person";
import { PERSONS } from "./mock-persons";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GiftlistService {

  constructor() { }

  getPersons(): Observable<Person[]>{

    return of(PERSONS);

  }
}

