import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private service:ApiService) { }
  artist:any

  ngOnInit(): void {
    this.service.getArtists().subscribe((res:any)=>{
      console.log(res)
      this.artist=res
    })
  }

}
