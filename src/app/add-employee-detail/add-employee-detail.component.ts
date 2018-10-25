import { Component, OnInit,ViewChild } from '@angular/core';
import {Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';
import {EmployeeDetailModel} from 'src/app/EmployeeDetailModel'
import { OrderPipe } from 'ngx-order-pipe';
@Component({
  selector: 'app-add-employee-detail',
  templateUrl: './add-employee-detail.component.html',
  styleUrls: ['./add-employee-detail.component.css']
})
export class AddEmployeeDetailComponent implements OnInit {
  
  model: any = {};
  order: string = 'this.data.employee.id';
  reverse: boolean = false;
  private apiUrl = "src/app/info.json";
  data:any = {};
  @ViewChild('myForm') formValues; 
  constructor(private http : Http,private orderPipe: OrderPipe){
  this.getInfo();
  this.getData();
   orderPipe.transform(this.data.employee, 'this.data.employee.id');
  }
  ngOnInit() {
  }
  key: string = 'name';
    sort(key){
       this.key = key;
       this.reverse = !this.reverse;
     }
  onSubmit() {
    let empmodel= new EmployeeDetailModel();
    empmodel.id=this.model.id;
    empmodel.name=this.model.name;
    empmodel.email=this.model.email;
    empmodel.colony=this.model.colony;
    empmodel.street=this.model.street;
    empmodel.city=this.model.city;
    empmodel.birthday=this.model.birthday;
    empmodel.gender=this.model.gender;
    this.data.employee.push(empmodel);
    this.formValues.resetForm();
  }
  
  getData(){
   return this.http.get(this.apiUrl)
   .pipe(map((res:Response) => res.json()))
  }
  getInfo(){
    this.getData().subscribe(data => {
      this.data=data;
    })
  }
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
