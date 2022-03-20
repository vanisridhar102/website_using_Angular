import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  n2:any;
  e2:any;
  nu2:any;
  age1:any;
  f1 = new FormGroup({
    n1:new FormControl('',Validators.required),
    e1:new FormControl('',[Validators.email,Validators.required]),
    nu1:new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
    a:new FormControl('',Validators.required),
  });
  validate(){
    return this.n2 = this.f1.value.n1,
     this.e2 = this.f1.value.e1,
     this.nu2= this.f1.value.nu1,
     this.age1 = this.f1.value.a;
  }
  ngOnInit(): void {
  }

}
