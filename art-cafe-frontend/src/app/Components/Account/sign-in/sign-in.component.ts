import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RequestServiceService } from '../../Services/request-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private router: Router, private call_Backend:RequestServiceService) { }

  public showValidation_Box = false;

  public loginCredentials = {
    username:"",
    password:"",
  }

  public signed = {
    user:'',
    state:''
  }

  public showData_Validations = {
    username_Error:false,
    password_Error:false
  };

  public inputChange(inputData:any) {
    
  }

  public handdleData_Error () {
    this.showData_Validations.username_Error = false;
    this.showData_Validations.password_Error = false;
  }

  stringify = (obj: any) => JSON.stringify(obj);    

  public onSubmit(formdata:NgForm) {
    
    this.showValidation_Box = true;

    this.call_Backend.loginUser(formdata.value).subscribe(res => {

      console.log(res)

      if(res=='0') {
        this.showData_Validations.username_Error = true;
      }

      else if(res=='1') {
        this.showData_Validations.password_Error = true;
      }

      if(res == '2') {
        this.signed.user = formdata.value.username;
        this.signed.state = '1'
        this.router.navigate(['/'], {queryParams:{user: this.stringify(this.signed)}});
      }
    })
  }
}
