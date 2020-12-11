import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myform = new FormGroup({
    input1: new FormControl('', [ Validators.required ] ),
    input2: new FormControl('', [ Validators.required , Validators.email ] ),

    location : new FormGroup({
      address: new FormControl(''),
      codepostal: new FormControl(''),
      ville: new FormControl(''),
    })
   
  });
  
  inputVal="hello";

  constructor() { }

  ngOnInit(): void {
  }

  checkifemail(val){
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val))
    {
      return (true)
    }
     
      return (false)

  }

  getFormValues(){
    const v = this.myform.value;

    console.log(v);

    
    
  }




  checkInputVal(){
    console.log(this.inputVal);
    
  }

}
