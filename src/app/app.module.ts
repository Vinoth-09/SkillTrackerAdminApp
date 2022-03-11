import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchProfileComponent } from './search-profile/search-profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component'
import { SearchService } from './services/search.service';
import { environment } from 'src/environments/environment';
import { MockSearchService } from './services/mock-search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchProfileComponent,
    ProfileDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: SearchService, useClass: environment.production == false ? MockSearchService : SearchService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
