import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoubianComponent } from './youbian/youbian.component';
import { SfqComponent } from './sfq/sfq.component';

const routes: Routes = [
	{ path: 'mains', component: YoubianComponent },
	{ path: 'right', component: SfqComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
