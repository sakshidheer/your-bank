import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {
  hide = true;
  signInText= "Sign In";
  cancelText = "Cancel";
  signInColor = "primary"
  constructor() { }

  ngOnInit(): void {
  }

}
