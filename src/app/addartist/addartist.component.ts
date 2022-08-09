import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addartist',
  templateUrl: './addartist.component.html',
  styleUrls: ['./addartist.component.css']
})
export class AddartistComponent implements OnInit {
 Artists=this.fb.group({
   name:['',Validators.required],
   dob:['',Validators.required],
   bio:['',Validators.required]
 })

 public getfb(){
   return this.Artists.controls
 }
  constructor(private fb:FormBuilder,private service:ApiService) {
    // $(document).ready(function(){
    //   var date_input=$('input[name="date"]'); //our date input has the name "date"
    //   var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
    //   var options={
    //     format: 'mm/dd/yyyy',
    //     container: container,
    //     todayHighlight: true,
    //     autoclose: true,
    //   };
    //   date_input.datepicker(options);
    // })
   }
   Onchange(event:any){
     console.log(event.target.value)

   }
   onSubmit(){
     console.log(this.Artists.value)
     const data={
       Aid:this.i+1,
       Aname:this.Artists.get('name')?.value,
       ADOB:this.Artists.get('dob')?.value,
       Asongs:this.Artists.get('bio')?.value

     }
     console.log(data,"data")
     this.service.Postartist(data).subscribe(res=>{
       alert("added")
     })
   }
   i:any
  ngOnInit(): void {
    this.service.getArtists().subscribe((res:any)=>{
      this.i=res.length
      console.log(this.i)
    })

  }

}
