import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  message:any = [];

  posts: Post[] =[];

  constructor(private msg:MessageService, private api:ApiService) { }

  ngOnInit(): void {
    this.asyncappel();

    this.getLocation();

    this.getPosts();
  }


  getPosts(){
    this.api.getPosts().subscribe((data:Post)=>{
      
      
    },(err)=>{
      console.log(err);
      
    })
  }


  async asyncappel(){
    console.log(" en train d'appeler f ");

    var res = await this.doAsyncTask(false);
    
    
 
    console.log("fin appel f");
  }

  addMessage(){
    this.msg.addMessage("hello world");
  }



  doAsyncTask(err:boolean){
    var promise  = new Promise( (resolve,reject) =>{
      setTimeout(()=>{
        if (err) {
          reject({success:false,message:"sorry canot get etc.."})
        } else {
          resolve("hello world");
        }

      },6000 );
    })
    return promise;
  }



  getLocation(){

    let watchid:number;

    var locations = new Observable((observer)=>{

      navigator.geolocation.watchPosition((p:Position)=>{
        observer.next(p);
      },(err)=>{
        observer.error(err);
      })
    })


    var x = locations.subscribe((data)=>{
      console.log(data); 
      
    },(err)=>{
      console.log(err);
      
    })

    

    


  }







}
