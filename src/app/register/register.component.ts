import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../apis/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private  Userslist:  Array<object> = [];
  constructor(private apiService:ApiService) {

  }
  //private UserArray=[];
  ngOnInit() {
    console.log('call',this.getUserslist());
  }
  public getUserslist()
  {
      this.apiService.getUserslist().subscribe((data:Array<object>) => {
      this.Userslist  =  data;
      console.log('Userslist',this.Userslist);
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
    console.log('firstName',firstName);
    console.log('lastName',lastName);
    console.log('inputEmail',inputEmail);
    console.log('inputPassword',inputPassword);  
     console.log('confirmPassword',confirmPassword);
     var  user  = {
      firstName:  firstName,
      lastName: lastName,
      email: inputEmail,
      password: inputPassword
     };
     this.apiService.registerUser(user).subscribe((response:Array<object>) => {
      this.Userslist  =  response;
      
      console.log('User Response',this.Userslist.status);
          console.log(response);
       });
  }


}
