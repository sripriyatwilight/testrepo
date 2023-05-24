import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  getDashboardMenuJson(){
   console.log("dashboard service");
    return this.http.get<any>("/assets/dashboardmenu.json");

  }
}
