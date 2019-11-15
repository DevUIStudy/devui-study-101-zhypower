import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding
} from '@angular/core';
import { SourceType, originSource } from '../mock-data';

@Component({
  selector: 'app-liebiao',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './liebiao.component.html',
  styleUrls: ['./liebiao.component.css']
})
export class LiebiaoComponent implements OnInit {

   basicDataSource: Array<SourceType> = JSON.parse(JSON.stringify(originSource.slice(0, 9)));
  dataTableOptions = {
    columns: [
        {
            field: 'firstName',
            header: '用户名称',
            fieldType: 'text'
        },
        {
            field: 'lastName',
            header: '昵称',
            fieldType: 'text'
        },
        {
            field: 'yhbq',
            header: '用户标签',
            fieldType: 'text'
        },
        {
            field: 'qyyh',
            header: '企业用户',
            fieldType: 'text'
        },
        {
            field: 'xmjs',
            header: '项目角色',
            fieldType: 'text'
        },
        {
            field: 'zhtx',
            header: '账号体系',
            fieldType: 'text'
        },
        {
            field: 'sfjy',
            header: '是否禁用',
            fieldType: 'text'
        }
    ]
};


  ngOnInit() {
  }
}