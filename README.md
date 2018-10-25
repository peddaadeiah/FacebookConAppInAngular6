# FacebookConAppInAngular6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

1. Create a facebook application in Angular6

    Goto developer.facebook.com
    Login with your facebook credential.
    Create New App, it will give you an Application ID for your new App.    
2. Run this command  angular-6-social-login in command prompt for connect application to Facebook
  - npm install --save angular-6-social-login 
  Add bellow code in app.module.ts
  - Import SocialLoginModule, AuthServiceConfig, FacebookLoginProvider from angular-6-social-login 
             
              export function getAuthServiceConfigs() {

               let config = new AuthServiceConfig(
                  [
                    {
                      id: FacebookLoginProvider.PROVIDER_ID,
                      provider: new FacebookLoginProvider("Your Application ID")
                    }
                  ]);
                   return config;
              }
              
   My  Application ID  is 514740599002781
  - Add SocialLoginModule in imports array of @Ngmodule decorator
  - Add below object in providers array in app.module.ts
    
        {
          provide: AuthServiceConfig,
          useFactory: getAuthServiceConfigs
        }
        
 3.Create the components
 Run `ng generate component component-name` to generate a new componennt
 I creted two components in this application.those compnents are LoginFacebookComponent,AddEmployeeDetailComponent.this component is LoginFacebookComponent for connecting facebook and navigate to AddEmployeeDetailComponent this component is AddEmployeeDetailComponent for diaplaying employee details And adding employee details
    
 4 Run  this ngx-order-pipe in node command promt for sorting the table.
 
   Add belloew code in app .module.ts
   import { OrderModule } from 'ngx-order-pipe';
   add imports: [OrderModule] in @NgModule decorator
   
   -add below code in your component ts file
   import { OrderPipe } from 'ngx-order-pipe';
   
   constructor(orderPipe: OrderPipe){
   orderPipe.transform(objectsofArrayjson);
  }
  
  key: string = 'name';
    sort(key){
       this.key = key;
       this.reverse = !this.reverse;
     }
     
  -Add bellow code in your html file of your component
  
  <th [class.active]="order === 'key'"
    (click)="setOrder('key')">ID<span [hidden]="reverse">▼</span
        ><span [hidden]="!reverse">▲</span></th>
        
   <tr *ngFor = "objects | orderBy: order:reverse:'case-insensitive'"></tr>
          
 5. Run ng serve for Compile and Run application

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
