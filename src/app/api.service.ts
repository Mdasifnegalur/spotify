import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  getArtists(){
    return this.http.get(this.url+"artists")
  }
  Postartist(data:any){
    return this.http.post(this.url+"Artist",data)
  }
  
  getsongs(){
    return this.http.get(this.url+"songs")
  }
  Postsongs(data:any){
    return this.http.post(this.url+"songs",data)
  }
}
