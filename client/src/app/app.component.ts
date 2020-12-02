import { HttpClient } from '@angular/common/http';
import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users:any;
  baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient, private ref: ChangeDetectorRef){

  }
  ngOnInit(){
    this.getUsers();
  }
  getUsers()
  {
    this.http.get(this.baseUrl+'users').subscribe(response => {
      this.users=response;
      this.ref.detectChanges();
    }, error=>{
      console.log(error)
    })
  }
}
