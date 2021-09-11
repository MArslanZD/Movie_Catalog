import { Component, OnInit,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MovieModel } from 'src/app/models/movie.models';
import { MovieApiService } from 'src/app/movie-catalog/movie-api.service';

@Component({
  selector: 'app-moviedialog',
  templateUrl: './moviedialog.component.html',
  styleUrls: ['./moviedialog.component.scss']
})
export class MoviedialogComponent implements OnInit {

  imdbID:string;
  movie: MovieModel;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private movieDataService: MovieApiService) { 
    this.imdbID = data.imdbID;
  }

  ngOnInit(): void {
    this.movieDataService.searchbyId(this.imdbID).subscribe(res => {   
      this.movie = res; 
    });        
  }

}
