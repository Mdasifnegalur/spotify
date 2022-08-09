import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddartistComponent } from './addartist/addartist.component';
import { AddsongComponent } from './addsong/addsong.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'addartist',component:AddartistComponent},
  {path:'addsong',component:AddsongComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
