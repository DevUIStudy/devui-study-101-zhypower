import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youbian',
  templateUrl: './youbian.component.html',
  styleUrls: ['./youbian.component.css']
})
export class YoubianComponent implements OnInit {
tab2acticeID = 'tab2';
  tabItems = [
    {
      id: 'tab2',
      title: '项目成员',
      content: `Fames ac turpis egestas maecenas pharetra.`
    },
    {
      id: 'tab3',
      title: '待审核',
      content: `Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor.`
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
