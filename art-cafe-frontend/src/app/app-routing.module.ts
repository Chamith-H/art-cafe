import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './Components/about-page/about-page.component';
import { SignInComponent } from './Components/Account/sign-in/sign-in.component';
import { SignUpComponent } from './Components/Account/sign-up/sign-up.component';
import { UserComponent } from './Components/Account/user/user.component';
import { WarningComponent } from './Components/Account/warning/warning.component';
import { ArtistPageComponent } from './Components/artist-page/artist-page.component';
import { CartComponent } from './Components/cart/cart.component';
import { AllArtsComponent } from './Components/Categories/Category-Contents/all-arts/all-arts.component';
import { ConceptualComponent } from './Components/Categories/Category-Contents/conceptual/conceptual.component';
import { DigitalComponent } from './Components/Categories/Category-Contents/digital/digital.component';
import { DrawingsComponent } from './Components/Categories/Category-Contents/drawings/drawings.component';
import { PaintingsComponent } from './Components/Categories/Category-Contents/paintings/paintings.component';
import { CategoryPageComponent } from './Components/Categories/category-page/category-page.component';
import { HomePageComponent } from './Components/Home/home-page/home-page.component';

const routes: Routes = [
  { 
    path:'',
    component:HomePageComponent
  },

  {
    path:'sign-in',
    component:SignInComponent
  },

  {
    path:'sign-up',
    component:SignUpComponent
  },

  {
    path:'user',
    component:UserComponent
  },

  {
    path:'categories',
    component:CategoryPageComponent
  },

  {
    path:'conceptual',
    component:ConceptualComponent
  },

  {
    path:'digital',
    component:DigitalComponent
  },

  {
    path:'drawings',
    component:DrawingsComponent
  },

  {
    path:'paintings',
    component:PaintingsComponent
  },

  {
    path:'all-arts',
    component:AllArtsComponent
  },

  {
    path:'warning',
    component:WarningComponent
  },

  {
    path:'cart',
    component:CartComponent
  },

  {
    path:'artists',
    component:ArtistPageComponent
  },

  {
    path:'about',
    component:AboutPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
