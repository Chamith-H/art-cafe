import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute } from '@angular/router';
import { RequestServiceService } from '../../Services/request-service.service';

@Component({
  selector: 'app-chat-ui',
  templateUrl: './chat-ui.component.html',
  styleUrls: ['./chat-ui.component.css']
})
export class ChatUIComponent {

  constructor(private route: ActivatedRoute, private call_Backend:RequestServiceService) {}

  public Msg ='';
  user = '';

  keyboard = false;
  newChat = true;

  public messages:any;

  onSubmit(msg:NgForm) {
    this.route.queryParams.subscribe(params => {
      
      let chat= {
        user:JSON.parse(params['user']).user,
        msg:msg.value.message
      }

      this.call_Backend.saveChat(chat).subscribe(res => {
        if(res) {
          this.messages = res;
          this.newChat = false
        }
      })
    })

    this.Msg = '';
  }

  inputData() {
    this.keyboard = true;
  }

  formClick() {
    this.keyboard = false;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {

      this.call_Backend.getChat(JSON.parse(params['user'])).subscribe(res => {

        if(res != ''){
          this.newChat = false
        }

        this.messages = res; 
      })

      this.user = JSON.parse(params['user']).user;
    })
  }
}
