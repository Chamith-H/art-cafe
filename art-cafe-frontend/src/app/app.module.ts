import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Layout/header/header.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { HomePageComponent } from './Components/Home/home-page/home-page.component';
import { IntroductionComponent } from './Components/Home/Home-Contents/introduction/introduction.component';
import { CategoriesComponent } from './Components/Home/Home-Contents/categories/categories.component';
import { ArtistsComponent } from './Components/Home/Home-Contents/artists/artists.component';
import { HistoryComponent } from './Components/Home/Home-Contents/history/history.component';
import { SignInComponent } from './Components/Account/sign-in/sign-in.component';
import { SignUpComponent } from './Components/Account/sign-up/sign-up.component';
import { UserComponent } from './Components/Account/user/user.component';
import { CategoryPageComponent } from './Components/Categories/category-page/category-page.component';
import { ConceptualComponent } from './Components/Categories/Category-Contents/conceptual/conceptual.component';
import { DigitalComponent } from './Components/Categories/Category-Contents/digital/digital.component';
import { DrawingsComponent } from './Components/Categories/Category-Contents/drawings/drawings.component';
import { PaintingsComponent } from './Components/Categories/Category-Contents/paintings/paintings.component';
import { AllArtsComponent } from './Components/Categories/Category-Contents/all-arts/all-arts.component';
import { WarningComponent } from './Components/Account/warning/warning.component';
import { CartComponent } from './Components/cart/cart.component';
import { ChatUIComponent } from './Components/Chat/chat-ui/chat-ui.component';
import { ArtistPageComponent } from './Components/artist-page/artist-page.component';
import { AboutPageComponent } from './Components/about-page/about-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    IntroductionComponent,
    CategoriesComponent,
    ArtistsComponent,
    HistoryComponent,
    SignInComponent,
    SignUpComponent,
    UserComponent,
    CategoryPageComponent,
    ConceptualComponent,
    DigitalComponent,
    DrawingsComponent,
    PaintingsComponent,
    AllArtsComponent,
    WarningComponent,
    CartComponent,
    ChatUIComponent,
    ArtistPageComponent,
    AboutPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
