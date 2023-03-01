import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestServiceService } from '../../Services/request-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private router: Router, private call_Backend:RequestServiceService) {}

  ngOnInit() {

  }


  public signData = {
    name:'',
    email:'',
    username:'',
    phone:'',
    country:'',
    region:'',
    password:''
  }

  inputChange(data:any) {
    
  }

  onSubmit(formdata:NgForm)  {
      this.call_Backend.saveUser(formdata.value).subscribe(res => {
        if(res=='1') {
          alert("Registration Successfull")
          this.router.navigate(['/sign-in']);
        }
      })
  }
}
