import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopsearchFormComponent } from './topsearch-form/topsearch-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopsearchComponent } from './topsearch/topsearch.component';
import { TopsearchDetailComponent } from './topsearch-detail/topsearch-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopsearchFormComponent,
    NavbarComponent,
    TopsearchComponent,
    TopsearchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
