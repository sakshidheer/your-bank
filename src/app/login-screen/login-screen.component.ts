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
  signInColor = "primary";
  userNameLabel:string ="User name";
  userName:string = "userName";
  passwordLabel:string ="Password";
  passwordName:string = "password";
  passwordType:string = "password";
  constructor() { }

  ngOnInit(): void {
  }

  doSignIn(event:Event):void {
    console.log("Sign in button clicked")
  }

}
