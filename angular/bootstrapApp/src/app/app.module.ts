import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { LocationComponent } from './location/location.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [			
    AppComponent,
      NavbarComponent,
      HeaderComponent,
      GreetingsComponent,
      LocationComponent,
      ContactComponent
   ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
