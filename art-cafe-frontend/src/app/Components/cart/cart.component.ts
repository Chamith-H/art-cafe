import { Component } from '@angular/core';
import { RequestServiceService } from '../Services/request-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private route: ActivatedRoute, private call_Backend:RequestServiceService) {}

  cart:any;
  userData:any;

  showCart = false;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.call_Backend.getCart(JSON.parse(params['user'])).subscribe(res => {
        

        if(res==''){
          this.showCart = false
        }

        else{
          this.showCart = true;
          this.cart = res;
        }
      })

      this.call_Backend.findUser(JSON.parse(params['user'])).subscribe(res => {
        this.userData = res
      })
    })
  }
}
