import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { userData } from 'src/FacebookLoginMock'
import {
  AuthService,
  FacebookLoginProvider
} from 'angular-6-social-login';
import {Router} from '@angular/router';

import { LoginFacebookComponent } from './login-facebook.component';
import {Location} from "@angular/common";
import {fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {
  AddEmployeeDetailComponent,
  AppComponent,
  routes
} from "src/app/home/routes"
describe('LoginFacebookComponent', () => {
  let location: Location;
  let router: Router;
  let component: LoginFacebookComponent;
  let fixture: ComponentFixture<LoginFacebookComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFacebookComponent,AddEmployeeDetailComponent ,AppComponent],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [
        {
          provide: AuthService,
          useClass:userData
        },
        {
          provide: Router, useValue: mockRouter
        },
      ]
    })
    .compileComponents();
    router = TestBed.get(Router); 
    location = TestBed.get(Location); 
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should verify signInWithFB',fakeAsync( () => {
   component.signInWithFB();
    expect(FacebookLoginProvider.PROVIDER_ID).toBe("facebook");
    expect(location.path()).toBe('');
  }));
});
