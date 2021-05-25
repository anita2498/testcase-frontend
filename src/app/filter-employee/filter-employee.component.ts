import { Employee } from '../employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-filter-employee',
  templateUrl: './filter-employee.component.html',
  styleUrls: ['./filter-employee.component.css']
})
export class FilterEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  name: string;
  employeesd: Observable<Employee[]>;
  alert:boolean=false

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    //this.employeesd = new Employee();
    this.reloadData();
  } 
 reloadData(){
  this.name = this.route.snapshot.params['name'];
  
    this.employeesd = this.employeeService.getEmployeeByDept(this.name);
  
    
  this.employeeService.getEmployeeByDept(this.name)
    .subscribe(data => {
      console.log(data)
      this.employee = data;
    }, error => console.log(error));
}

 

  
  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
        this.alert=true
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }


  list(){
    this.router.navigate(['employees']);
  }

}




