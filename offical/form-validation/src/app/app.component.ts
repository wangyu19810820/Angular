import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {forbiddenNameValidator} from './forbidden-validator.directive';
import {identityRevealedValidator, identityRevealedValidator1} from './identity-revealed-validator.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'form-validation';
  hero = new Hero('', '');
  hero1 = new Hero('', '');
  heroForm1: FormGroup;

  ngOnInit(): void {
    this.heroForm1 = new FormGroup({
      'name1': new FormControl(this.hero1.name, [
        Validators.required,
        Validators.minLength(2),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'alterEgo1': new FormControl(this.hero1.alterEgo),
    }, { validators: identityRevealedValidator1 });
  }

  get name1() { return this.heroForm1.get('name1'); }
}
