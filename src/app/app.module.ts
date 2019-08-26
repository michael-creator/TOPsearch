import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopsearchFormComponent } from './topsearch-form/topsearch-form.component';
import { TopsearchNavbarComponent } from './navbar/navbar.component';
import { TopsearchComponent } from './topsearch/topsearch.component';
import { TopsearchDetailComponent } from './topsearch-detail/topsearch-detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopsearchFormComponent,
    TopsearchNavbarComponent,
    TopsearchComponent,
    TopsearchDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
