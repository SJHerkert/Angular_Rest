import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: 
  [] 
  
})

export class ContactComponent implements OnInit{

  messageForm:FormGroup;
  submitted=false;
  success=false;

constructor(private formBuilder:FormBuilder){
this.messageForm=this.formBuilder.group({
  name:['',Validators.required],
  message:['',Validators.required]
});
}

onSubmit(){
  this.submitted=true;
  
  if(this.messageForm.invalid){
    return;
  }

  this.success=true;
}

ngOnInit() {  
}
}
