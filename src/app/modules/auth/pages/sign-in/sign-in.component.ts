import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { faKey, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  faUser = faUserCircle;
  faPassword = faKey;
  faGoogle = faGoogle;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
