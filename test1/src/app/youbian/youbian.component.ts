import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youbian',
  templateUrl: './youbian.component.html',
  styleUrls: ['./youbian.component.css']
})
export class YoubianComponent implements OnInit {
  tab22acticeID = 'tab1';

  constructor() { }

  ngOnInit() {
  }
  pager = {
    total: 648,
    pageIndex: 1,
    pageSize: 10
  };

}
