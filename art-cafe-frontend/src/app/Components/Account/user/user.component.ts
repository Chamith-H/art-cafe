import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestServiceService } from '../../Services/request-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private route: ActivatedRoute, private router: Router, private call_Backend:RequestServiceService) {}

  stringify = (obj: any) => JSON.stringify(obj);

  logOut() {
    alert("Logout your Account successfully. . !")
  
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    
  }

  userData:any;

  goCart() {
    this.router.navigate(['/cart'], {queryParamsHandling:'merge'});

    
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
    
  }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {

      this.call_Backend.findUser(JSON.parse(params['user'])).subscribe(res => {
        this.userData = res
      })
    })
  }
}
