import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data = [
  			[null,null,null], 
  			[null,null,null], 
  			[null,null,null],
  		 ];
  player = 1;

  play(line, cell) {
  	console.log(line, cell);
  	if (this.data[line][cell] == null) {
	  	this.data[line][cell] = this.player;
	  	this.player = this.player == 1 ? 0 : 1;
	}
  }
}
