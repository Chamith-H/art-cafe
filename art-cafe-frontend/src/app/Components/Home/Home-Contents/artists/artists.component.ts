import { Component } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {
  public Artists = [
    {
      image:'../../../../../assets/HomePage/Artists/1.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/2.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/3.jpeg'
    },

    
    {
      image:'../../../../../assets/HomePage/Artists/7.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/10.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/11.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/12.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/4.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/5.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/6.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/7.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/8.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/9.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/10.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/11.jpeg'
    },

    {
      image:'../../../../../assets/HomePage/Artists/12.jpeg'
    },
  ]

  scroll() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }
}
