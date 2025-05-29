import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  personForm: FormGroup;
  isEditMode = false;
  personId: string;

  constructor(
    private fb: FormBuilder,
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.personForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]]
    });
  }

  ngOnInit() {
    this.personId = this.route.snapshot.paramMap.get('id');
    if (this.personId) {
      this.isEditMode = true;
      this.loadPerson();
    }
  }

  loadPerson() {
    this.personService.getPerson(this.personId).subscribe(
      (person: Person) => {
        this.personForm.patchValue(person);
      },
      error => {
        console.error('Error loading person:', error);
      }
    );
  }

  onSubmit() {
    if (this.personForm.valid) {
      const person: Person = this.personForm.value;
      
      if (this.isEditMode) {
        this.personService.updatePerson(this.personId, person).subscribe(
          () => {
            this.router.navigate(['/']);
          },
          error => {
            console.error('Error updating person:', error);
          }
        );
      } else {
        this.personService.createPerson(person).subscribe(
          () => {
            this.router.navigate(['/']);
          },
          error => {
            console.error('Error creating person:', error);
          }
        );
      }
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
} 