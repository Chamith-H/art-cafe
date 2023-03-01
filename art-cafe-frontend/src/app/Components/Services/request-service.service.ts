import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  url_signUp = 'http://localhost:8000/saveUser';
  url_signIn = 'http://localhost:8000/loginUser';
  url_toCart = 'http://localhost:8000/addCart';
  url_getUser = 'http://localhost:8000/findUser';
  url_fromCart = 'http://localhost:8000/getCart';
  url_saveMessages = 'http://localhost:8000/saveChat';
  url_getMessages = 'http://localhost:8000/getChat';

  constructor(private http : HttpClient) {}

  saveUser(data:any) {
    return this.http.post(this.url_signUp, data)
  }

  loginUser(data:any) {
    return this.http.post(this.url_signIn, data)
  }

  addCart(data:any) {
    return this.http.post(this.url_toCart, data)
  }

  getCart(data:any) {
    return this.http.post(this.url_fromCart, data)
  }

  findUser(data:any) {
    return this.http.post(this.url_getUser, data)
  }

  saveChat(data:any) {
    return this.http.post(this.url_saveMessages, data)
  }

  getChat(data:any) {
    return this.http.post(this.url_getMessages, data)
  }
}
