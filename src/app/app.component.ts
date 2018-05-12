import { Component } from '@angular/core';
import { Show, TvmazeService } from 'tvmaze';
import { Observable } from 'rxjs';

@Component({
  selector: 'ld-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	show$: Observable<Show>;
	showIdx: number = 335;

	constructor(private tvmaze: TvmazeService) {
		this.show$ = this.tvmaze.getShow(this.showIdx);
	}
}
