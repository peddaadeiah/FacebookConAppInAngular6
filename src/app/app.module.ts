import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginFacebookComponent } from './login-facebook/login-facebook.component';
import { AddEmployeeDetailComponent } from './add-employee-detail/add-employee-detail.component';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { FilterPipe } from ''./filter.pipe';';
import { OrderModule } from 'ngx-order-pipe';
import {
  SocialLoginModule,
  AuthServiceConfig,
  FacebookLoginProvider,
} from "angular-6-social-login";
var routes:Routes=[{path:"",component:LoginFacebookComponent},
{path:"login",component:LoginFacebookComponent},
{path:"addDetail",component:AddEmployeeDetailComponent}]
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("514740599002781")
        }
      ]
  )
  return config;
  }
  var routes1=RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    LoginFacebookComponent,
    AddEmployeeDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    routes1,
    SocialLoginModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
