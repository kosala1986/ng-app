import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { BaseService } from '../../services/base.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: BaseService,
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      let payload: object = {
        username: this.form.get('username').value,
        password: this.form.get('password').value
      };

      this.service.post('http://localhost:7300/api/login', payload).subscribe((data) => {
        this.form.reset();
        if (data.status === 'success') {
          this.authservice.setUserLogin(true);
          this.authservice.setUserName(this.form.get('username').value);
          this.router.navigate(['/dashboard']);
        }

      });

    }
  }

}
