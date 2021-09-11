import { Component, OnInit, APP_ID } from '@angular/core';
import { MovieApiService } from './movie-api.service';
import {MovieModel} from 'src/app/models/movie.models';
import { MatDialog } from '@angular/material/dialog';
import { MoviedialogComponent } from '../movie-dialog/moviedialog/moviedialog.component';
@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.scss']
})
export class MovieCatalogComponent implements OnInit {  
  
  movieList: MovieModel[];

  constructor(private movieDataService: MovieApiService, public dialog:MatDialog) { }
  ngOnInit(){}


  searchMovies(input: string): void {
    this.movieDataService.searchMovieByName(input).subscribe(res => {    
      this.movieList = res.Search.slice(0,3);
    });        
  }


  
  openDialog(imdbID:any) {
 
    const dialogRef = this.dialog.open(MoviedialogComponent, {
      width: '30%',
      data: {imdbID: imdbID}
    });
    
  }


}
