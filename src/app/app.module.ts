import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SortDirective } from './directive/sort.directive';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from './httpinterceptor.service';
import { MenuComponent } from './menu/menu.component';
import { FilterEmployeeComponent } from './filter-employee/filter-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    SortDirective,
    LoginComponent,
    MenuComponent,
    FilterEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }