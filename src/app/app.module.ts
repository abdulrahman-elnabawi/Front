import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { propertycardcomponent} from './property/property/property.component'
import { PropertyListComponent} from './property/property-list/property-list/property-list.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
@NgModule({
  declarations: [		
    AppComponent,
    propertycardcomponent,
    PropertyListComponent,
      NavBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
