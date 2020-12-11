import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  id;

  constructor(private route:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.sec;

    console.log("id is : ",this.id);
    
    
  }


  goToHome(){
    this.router.navigate(['about']);
  }



}
