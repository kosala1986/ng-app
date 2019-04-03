import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userName: string = '';

  constructor(
    private router: Router,
    private authservice: AuthService
  ) { }

  ngOnInit() {

    if (!this.authservice.isUserLogin()) {
      this.router.navigate(['/']);
    } else {
      this.userName = this.authservice.getUserName();
    }
  }
}
