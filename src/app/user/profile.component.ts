import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { TOASTR_TOKEN, Toastr } from "../common/toastr.service";

@Component({
  templateUrl: './profile.component.html',
  styles: [`
      em {float:right; color:#e04c65; padding-left: 10px}
      .error ::-webkit-input-placeholder {color: #999;}
      .error input {background-color: #e3c3c5;}
      .error ::-moz-placeholder {color: #999;}
      .error :-moz-placholder {color: #999;}
      .error :ms-input-placeholder {color: #999;}
  `]
})


export class ProfileComponent implements OnInit {
  profileForm: FormGroup
  private firstName: FormControl
  private lastName: FormControl

  constructor(private authService: AuthService, private router: Router, @Inject(TOASTR_TOKEN) private toastr: Toastr ){}

  ngOnInit(){
    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]) //pattern on the text should appear, it shouldnt accept a number
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })

  }
  saveProfile(formValues){
    if (this.profileForm.valid){
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
      this.toastr.success('Profile Saved');
      this.router.navigate(['articles/newarticles'])
    }

  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  cancel(){
    this.router.navigate(['articles'])
  }
}
