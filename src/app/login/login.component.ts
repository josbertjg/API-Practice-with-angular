import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from "@angular/forms";
import { Router } from "@angular/router";

//SERVICES
import { AccessService } from "../services/access.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private access:AccessService,private router:Router) { }

  formulario = this.formbuilder.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })

  username=this.formulario.controls.username;
  password=this.formulario.controls.password;

  ngOnInit(): void {
  }

  submit(event:any){
    console.log(event)
    console.log(this.formulario.controls)
    let envio ={
      user:this.username.value,
      pass:this.password.value
    }
    this.router.navigate(['producto'])
    this.access.send.emit(envio);
  }

}
