import {Component} from "@angular/core";
import {Routes} from "@angular/router";

@Component({
  template: 'home'
})
export class LoginFacebookComponent {
}

@Component({
  template: 'addDetail'
})
export class AddEmployeeDetailComponent {
}

@Component({
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
}

export const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'addDetail', component: AddEmployeeDetailComponent}
];