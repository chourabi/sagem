import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-protfolio',
  templateUrl: './protfolio.component.html',
  styleUrls: ['./protfolio.component.css']
})
export class ProtfolioComponent implements OnInit {

  message:any = [];
  constructor(private msg:MessageService) { }

  ngOnInit(): void {
    this.message = this.msg.getMessages();
  }

}
