import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.css']
})
export class AddsongComponent implements OnInit {
    addsongs=this.fb.group({
  songname:[''],
  DOR:[''],
  artwork:[''],
  artist:[''],
    })
   public getfb(){
    return this.addsongs.controls
   }
  constructor(private service:ApiService,private fb:FormBuilder) { }
  artist:any
  songs:any
  ngOnInit(): void {
    this.service.getArtists().subscribe(r=>{
    this.artist=r
    })
    this.service.getsongs().subscribe(r=>{
this.songs=r
    })
  }
  image:any
  imagefile:any
  profileimage:any
  Onchange(event:any){
    this.image=[]
    var file=event.target.files;
    this.imagefile=event.target.files[0]
    if(file){
      for(var f of file){
        var multiple=new FileReader();
        multiple.onload=(e:any)=>{
          this.profileimage=e.target.result
          console.log(this.profileimage)
        }
        multiple.readAsDataURL(f)
      }
    }
    console.log(event.target.value,this.imagefile.name)
  }
  onSubmit(){
    var data={
      id:this.songs.length+1,
      image:this.imagefile.name,
      songsname:this.addsongs.get('songname')?.value,
      DOR:this.addsongs.get('DOR')?.value,
      Artists:this.art
    }
    this.service.Postsongs(data).subscribe((res:any)=>{
      alert("added")
    })
    console.log(this.addsongs.value,data)

  }
  art:any
  artists(event:any){
    
    this.art=event.target.value
    console.log(event.target.value)
  }

}
