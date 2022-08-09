import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:ApiService) { }
  artist:any
  songs:any

  ngOnInit(): void {
    this.service.getArtists().subscribe((res:any)=>{
      this.artist=res
     this.songs.filter((e:any)=>{
      for(let i=0;i<e.Rating;i++){
        this.star[i]=true
      }
     })
      console.log(res)
    })
    this.service.getsongs().subscribe((res:any)=>{
      console.log(res,'songs')
      this.songs=res

    })
  }
  star:boolean[]=[false,false,false,false,false]
  Onstar(value:number){
    // for(let i=0;i<=value;i++){
    //   this.star[i]=true
    // }
    if(value==0){
      this.star[0]=!this.star[0]
      for(let i=1;i<=4;i++){
        this.star[i]=false
      }
    }else{
      this.star=[false,false,false,false,false]
      for(let i=0;i<=value;i++){
        this.star[i]=true
      }
    }

  }

}
