import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const routes: Routes = [{
  path: 'signin', component: LoginScreenComponent
}, {
  path: 'signup', component: SignupPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
