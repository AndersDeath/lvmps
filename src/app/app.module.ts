import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './constants/route.constant';
import { AutofocusDirective } from './directives/autofocus.directive';
import { AppComponent } from './components/app/app.component';
import { SearchComponent } from './components/search/search.component';
import { StorageService } from './services/storage.service';

import {
  MatCardModule,
  MatDividerModule,
  MatButtonModule,
  MatExpansionModule,
  MatListModule,
  MatTooltipModule,
  MatInputModule,
  MatRadioModule,
  MatMenuModule,
  MatIconModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  declarations: [
    AutofocusDirective,
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule,
    MatTooltipModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
