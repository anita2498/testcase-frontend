import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { SortDirective } from "../directive/sort.directive";
import { Sort } from "../util/sort";
import { AuthenticationService } from '../login/auth.service';
////import {AfterViewInit,  ViewChild} from '@angular/core';
//import {MatSort} from '@angular/material/sort';
//import {MatTableDataSource} from '@angular/material/table';
//import { UpdateEmployeeComponent} from '../employee-list/employee-list.component';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  alert:boolean=false
  //isLoggedIn = false;
  
  constructor(private employeeService: EmployeeService,
    //private menuComponent: MenuComponent,
    private router: Router,
   // private route: ActivatedRoute,
    private authenticationService: AuthenticationService) {}


    
  
    
    // handleLogout() {
    //   this.authenticationService.logout();
    // }

    // //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    // dataSource = new MatTableDataSource(this.employees);
  
    // @ViewChild(MatSort) sort: MatSort;
  
    // ngAfterViewInit() {
    //   this.dataSource.sort = this.sort;
    // }

  ngOnInit() {
    this.reloadData();
    //this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    //console.log('menu ->' + this.isLoggedIn);
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
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
}