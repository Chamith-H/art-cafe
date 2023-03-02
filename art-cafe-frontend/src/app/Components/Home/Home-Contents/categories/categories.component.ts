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
      status:'Click here to see our conceptual arts',
      link:'/conceptual'
    },

    {
      name:'Digital Arts',
      image:'assets/HomePage/Categories/Digital.png',
      status:'Click here to see our digital arts',
      link:'/digital'
    },

    {
      name:'Drawings',
      image:'assets/HomePage/Categories/Drawings.png',
      status:'Click here to see our drawings',
      link:'/drawings'
    },

    {
      name:'Paintings',
      image:'assets/HomePage/Categories/Paintings.png',
      status:'Click here to see our paintings',
      link:'/paintings'
    }
  ]
}
