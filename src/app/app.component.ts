import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name= "Hatem Amer"
  date = new Date();

  names: any[] = []
  firstNameController = new FormControl('')
  formGroup: FormGroup = new FormGroup<any>({
    firstName: this.firstNameController,
    lastName: new FormControl('')
  })

  submit() {
    console.log(this.formGroup.value);
    this.names.push(this.formGroup.value);
    this.formGroup.reset()
  }
}
