import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[
    trigger("valid",[
      state("true",style({border:'none'})),
      state("false",style({border:'1px solid red'})),
      transition("true => false",animate('1100ms ease-out')),
      transition("false => true",animate('1000ms ease-in'))
    ])
  ]
})
export class ContactComponent implements OnInit {

  sendMessege!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.sendMessege = new FormGroup({
      name : new FormControl("", [Validators.required, Validators.pattern('^[A-ZŠĐČĆŽ][a-zšđčćž]{2,15}\\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,15}$')]),
      email : new FormControl("", [Validators.required, Validators.email]),
      message : new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(320)])
    })
  }
  onFormSubmit(){
    alert("Message sent");
    this.sendMessege.reset();
  }

}
