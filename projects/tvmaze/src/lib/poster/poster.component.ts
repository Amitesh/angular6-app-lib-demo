import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Show } from '../tvmaze.models';
import { TvmazeService } from '../tvmaze.service';

@Component({
  selector: 'tm-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {
  @Input() showId: number;
  posterUrl$: Observable<string>;

  constructor(private tvmaze: TvmazeService) {}

  ngOnInit() {
  	this.getShowInfo();
  }

  ngOnChanges() {
    this.getShowInfo();
  }

  private getShowInfo(){
    this.posterUrl$ = this.tvmaze
      .getShow(this.showId)
      .pipe(map(show => show.image.medium))
  }

}
