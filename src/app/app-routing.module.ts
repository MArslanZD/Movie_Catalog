import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieCatalogComponent } from './movie-catalog/movie-catalog.component';

const routes: Routes = [
  { path: '', component: MovieCatalogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
