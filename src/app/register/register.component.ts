import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../apis/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private apiService:ApiService,private router:Router,private toastr: ToastrService) {
  }
  //private UserArray=[];
  ngOnInit() {
    console.log('call',this.getUserslist());
  }
  public getUserslist()
  {
      this.apiService.getUserslist().subscribe((data) => {
    //  this.Userslist = data;
      // console.log('Userslist',this.Userslist);
  });
  }
  public registerUser(event)
  {

    event.preventDefault()
    const target=event.target
    const firstName=target.querySelector('#firstName').value;
    const lastName=target.querySelector('#lastName').value;
    const inputEmail=target.querySelector('#inputEmail').value;
    const inputPassword=target.querySelector('#inputPassword').value;
    const confirmPassword=target.querySelector('#confirmPassword').value;
     var  user  = {
      firstName:  firstName,
      lastName: lastName,
      email: inputEmail,
      password: inputPassword
     };
     this.apiService.registerUser(user).subscribe((response) => {
          this.parseGetUserResponse(response);
       });
  
  }
  async parseGetUserResponse(res) {
    if(res.status===200){
      var data = res;
      this.toastr.success('Hello world!', 'Toastr fun!');
      console.log('response',data);
  }else{
    this.toastr.success(res.message);
   // alert(this.toastr.success('Hello world!', 'Toastr fun!'));
  }
}
}
