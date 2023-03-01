import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestServiceService } from 'src/app/Components/Services/request-service.service';

@Component({
  selector: 'app-all-arts',
  templateUrl: './all-arts.component.html',
  styleUrls: ['./all-arts.component.css']
})
export class AllArtsComponent {

  constructor(private route: ActivatedRoute, private call_Backend:RequestServiceService) {}

  public gallery = [
    {
      image:'../../../../../assets/Categories/23.jpg',
      status:'12'
    },
    {
      image:'../../../../../assets/Categories/24.webp',
      status:'7'
    },
    {
      image:'../../../../../assets/Categories/25.jpg',
      status:'11'
    },
    {
      image:'../../../../../assets/Categories/26.jpg',
      status:'22'
    },
    {
      image:'../../../../../assets/Categories/27.jpg',
      status:'12'
    },
    {
      image:'../../../../../assets/Categories/28.jpg',
      status:'15'
    },
    {
      image:'../../../../../assets/Categories/29.jpg',
      status:'32'
    },
    {
      image:'../../../../../assets/Categories/30.jpg',
      status:'56'
    },
    {
      image:'../../../../../assets/Categories/31.jpg',
      status:'5'
    },
    {
      image:'../../../../../assets/Categories/32.jpg',
      status:'2'
    },
    {
      image:'../../../../../assets/Categories/33.jpg',
      status:'5'
    },
    {
      image:'../../../../../assets/Categories/34.jpg',
      status:'3'
    },
    {
      image:'../../../../../assets/Categories/35.jpg',
      status:'23'
    },
    {
      image:'../../../../../assets/Categories/36.jpg',
      status:'13'
    },
    {
      image:'../../../../../assets/Categories/37.jpg',
      status:'31'
    },
    {
      image:'../../../../../assets/Categories/38.jpg',
      status:'42'
    },
    {
      image:'../../../../../assets/Categories/39.jpg',
      status:'67'
    },
    {
      image:'../../../../../assets/Categories/40.jpg',
      status:'12'
    },
    {
      image:'../../../../../assets/Categories/41.jpg',
      status:'16'
    },
    {
      image:'../../../../../assets/Categories/42.jpg',
      status:'17'
    },
    {
      image:'../../../../../assets/Categories/43.jpg',
      status:'24'
    },
    {
      image:'../../../../../assets/Categories/44.jpg',
      status:'24'
    },
    {
      image:'../../../../../assets/Categories/45.jpg',
      status:'24'
    },
    {
      image:'../../../../../assets/Categories/46.jpg',
      status:'24'
    },
    {
      image:'../../../../../assets/Categories/47.jpg',
      status:'24'
    },
    {
      image:'../../../../../assets/Categories/48.jpg',
      status:'24'
    },
    {
      image:'../../../../../assets/Categories/29.jpg',
      status:'32'
    },
    {
      image:'../../../../../assets/Categories/30.jpg',
      status:'56'
    },
    {
      image:'../../../../../assets/Categories/31.jpg',
      status:'5'
    },
    {
      image:'../../../../../assets/Categories/23.jpg',
      status:'12'
    },
    {
      image:'../../../../../assets/Categories/1.jpg',
      status:'12'
    },
    {
      image:'../../../../../assets/Categories/2.jpg',
      status:'7'
    },
    {
      image:'../../../../../assets/Categories/3.jpg',
      status:'11'
    },
    {
      image:'../../../../../assets/Categories/4.jpg',
      status:'22'
    },
    {
      image:'../../../../../assets/Categories/5.jpg',
      status:'12'
    },
    {
      image:'../../../../../assets/Categories/6.jpg',
      status:'15'
    },
    {
      image:'../../../../../assets/Categories/8.jpg',
      status:'32'
    },
    {
      image:'../../../../../assets/Categories/9.jpg',
      status:'56'
    },
    {
      image:'../../../../../assets/Categories/10.jpg',
      status:'5'
    },
    {
      image:'../../../../../assets/Categories/11.jpg',
      status:'2'
    },
    {
      image:'../../../../../assets/Categories/12.jpg',
      status:'5'
    },
    {
      image:'../../../../../assets/Categories/13.jpg',
      status:'3'
    },
    {
      image:'../../../../../assets/Categories/14.jpg',
      status:'23'
    },
    {
      image:'../../../../../assets/Categories/15.jpg',
      status:'13'
    },
    {
      image:'../../../../../assets/Categories/16.jpg',
      status:'31'
    },
    {
      image:'../../../../../assets/Categories/17.jpeg',
      status:'42'
    },
    {
      image:'../../../../../assets/Categories/18.jpeg',
      status:'67'
    },
    {
      image:'../../../../../assets/Categories/19.jpeg',
      status:'12'
    },
    {
      image:'../../../../../assets/Categories/20.jpg',
      status:'16'
    },
    {
      image:'../../../../../assets/Categories/21.jpg',
      status:'17'
    },
    {
      image:'../../../../../assets/Categories/22.jpg',
      status:'24'
    },
    {
      image:'../../../../../assets/Categories/1.jpg',
      status:'12'
    },
    {
      image:'../../../../../assets/Categories/2.jpg',
      status:'7'
    },
    {
      image:'../../../../../assets/Categories/4.jpg',
      status:'22'
    },
  ]

  selectedItem = {
    user:'',
    image:'',
    status:''
  }

  itemClicked = false
  confirmCart = false

  public addCart(itemData:any) {
    
    this.selectedItem.image = itemData.image;
    this.selectedItem.status = itemData.status

    this.itemClicked = true;
    this.confirmCart = false
  }

  public save_toCart() {
    this.call_Backend.addCart(this.selectedItem).subscribe(res => {
      if(res=='1') {
        this.confirmCart = true
      }
    })
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedItem.user = JSON.parse(params['user']).user
    })
  }
}
