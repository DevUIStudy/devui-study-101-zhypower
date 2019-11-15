import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sfq',
  templateUrl: './sfq.component.html',
  styleUrls: ['./sfq.component.css']
})
export class SfqComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   restrictOneOpen = false;
  menu = [{
    title: '通用设置',
    children: [
      {title: '子内容1'},
      {title: '子内容2'},
      {title: '子内容3'},
    ]
  }, {
    title: '项目管理',
    open: true,
    children: [
      {title: '项目设置模版', disabled: false},
      {title: '设置项目创建者', active: true},
      {title: '项目和成员管理'},
    ]
  }, {
    title: '编译构建'
  }, {
    title: '私有依赖库',
    disabled: false,
    children: [
    ]
  }];

  itemClick(event) {
    console.log('item click' + JSON.stringify(event));
  }
  menuToggle(event) {
    console.log('menu toggle' + JSON.stringify(event));

    if (event.open && event.item.needLoadChildren) {
      event.item.loading = true;
      setTimeout(() => {
        event.item.children = [
          {title: '子内容1'},
          {title: '子内容2'}
        ];
        event.item.needLoadChildren = false;
        event.item.loading = false;
      }, 1000);
    }
  }


}
