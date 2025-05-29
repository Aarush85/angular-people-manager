import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-delete',
  templateUrl: './person-delete.component.html',
  styleUrls: ['./person-delete.component.css']
})
export class PersonDeleteComponent implements OnInit {
  person: Person;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPerson(id);
    } else {
      this.router.navigate(['/']);
    }
  }

  loadPerson(id: string) {
    this.personService.getPerson(id).subscribe(
      (person: Person) => {
        this.person = person;
        this.loading = false;
      },
      error => {
        this.error = 'Error loading person details';
        this.loading = false;
        console.error('Error loading person:', error);
      }
    );
  }

  confirmDelete() {
    this.personService.deletePerson(this.person._id).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      error => {
        this.error = 'Error deleting person';
        console.error('Error deleting person:', error);
      }
    );
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
