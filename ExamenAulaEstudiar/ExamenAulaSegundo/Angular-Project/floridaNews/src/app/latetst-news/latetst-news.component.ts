import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'latest-news',
  templateUrl: './latetst-news.component.html',
  styleUrls: ['./latetst-news.component.css']
})
export class LatetstNewsComponent implements OnInit {
  @Input() News = [];
  @Input() Text = [];
  index = 0;
  constructor() { }

  ngOnInit() {
    setInterval( ()=>{
    this.index = (this.index+1)%this.News.length;
  }, 4500);
}


}
