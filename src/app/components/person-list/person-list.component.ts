import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

/**
 * PersonListComponent displays a list of all people and provides
 * functionality to add, edit, and delete people.
 */
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  // Array to store the list of people
  people: Person[] = [];

  constructor(
    private personService: PersonService,  // Service to handle API calls
    private router: Router                 // Service to handle navigation
  ) { }

  // Lifecycle hook that runs when component is initialized
  ngOnInit() {
    this.loadPeople();
  }

  /**
   * Loads all people from the backend API
   * and stores them in the people array
   */
  loadPeople() {
    this.personService.getPeople().subscribe(
      (data: Person[]) => {
        this.people = data;
      },
      error => {
        console.error('Error loading people:', error);
      }
    );
  }

  /**
   * Navigates to the form page to add a new person
   */
  addPerson() {
    this.router.navigate(['/person/new']);
  }

  /**
   * Navigates to the form page to edit an existing person
   * @param id - The ID of the person to edit
   */
  editPerson(id: string) {
    this.router.navigate(['/person/edit', id]);
  }
} 