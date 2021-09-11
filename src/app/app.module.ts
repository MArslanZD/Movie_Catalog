import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';
import { MovieApiService } from './movie-catalog/movie-api.service';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog';
import { MoviedialogComponent } from './movie-dialog/moviedialog/moviedialog.component';

@NgModule({
  entryComponents:[MovieCatalogComponent],
  declarations: [
    AppComponent,
    MovieCatalogComponent,
    MoviedialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule
  ], 
  exports:[
    
  ],  
  providers: [
    MovieApiService    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
