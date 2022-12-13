import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]

})
export class LoginComponent {
validateForm: FormGroup;
  loginPayload = {
    email: '',
    password: '',
  };
  submitted = false;
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.validateForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
    this.loginPayload = {
      email: '',
      password: '',
    };
  }

  ngOnInit() {}

  get f() {
    return this.validateForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    if (this.validateForm.invalid) {
      return;
    }

    this.loginPayload.email = this.f['email'].value;
    this.loginPayload.password = this.f['password'].value;

    this.authService.login(this.loginPayload).subscribe(
      (res) => {
        console.log(res);

        if (res.existed) {
          this.router.navigateByUrl('/dashboard');
          console.log('login success');
        } else {
          console.log('login fail');
        }
          // get return url from query parameters or default to home page
      },
      (error) => {
        console.log('Login failed');
        this.loading = false;
        // this.router.navigateByUrl('/home');
      },
    );
  }
}
