import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit , AfterViewInit {

  login = new FormGroup({
    password: new FormControl('',Validators.required)
  })


  @ViewChild('inputval',{static:false}) myinput:ElementRef;

  constructor(private router:Router) { }
  ngAfterViewInit(): void {
    this.myinput.nativeElement.focus()
    
  }



  ngOnInit(): void {
    /* works !! but wrong */
    //document.getElementById("inputval").focus();    
  }

  

  auth(){
    const password = this.login.value.password;

    if (password === "admin") {
      console.log("can go to customers");

      localStorage.setItem('token',"123");


      this.router.navigate(['customers']);

      
      
    }else{
      alert("error password");
    }

  }

}
