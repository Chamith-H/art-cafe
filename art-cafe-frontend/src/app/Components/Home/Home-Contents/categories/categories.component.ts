import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  public categories = [
    {
      name:'Conceptual Arts',
      image:'assets/HomePage/Categories/Conceptual.png',
      status:'Simple text for the this image arte gallery',
      link:'/conceptual'
    },

    {
      name:'Digital Arts',
      image:'assets/HomePage/Categories/Digital.png',
      status:'Simple text for the this image arte gallery',
      link:'/digital'
    },

    {
      name:'Drawings',
      image:'assets/HomePage/Categories/Drawings.png',
      status:'Simple text for the this image arte gallery',
      link:'/drawings'
    },

    {
      name:'Paintings',
      image:'assets/HomePage/Categories/Paintings.png',
      status:'Simple text for the this image arte gallery',
      link:'/paintings'
    }
  ]
}
