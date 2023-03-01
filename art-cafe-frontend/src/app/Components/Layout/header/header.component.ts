import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private route: ActivatedRoute, private router: Router) {}

  public user = false
  public chat = false

  goAccount() {
    if(this.user) {
      this.router.navigate(['/user'], {queryParamsHandling:'preserve'})
    }

    if(!this.user) {
      this.router.navigate(['/warning'])
    }
  }

  getChat() {
    if(this.user) {
      this.chat = !this.chat
    }
    
    if(!this.user) {
      this.router.navigate(['/warning'])
    }
  }

  scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }

  ngOnInit() {
    this.user = false
    this.route.queryParams.subscribe(params => {
      if(JSON.parse(params['user']).state == '1') {
        this.user = true
      }
    })
  }
}
