import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../apis/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private  Userslist:  Array<object> = [];
  constructor(private apiService:ApiService) {

  }
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

}
