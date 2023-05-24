import { Injectable, Output } from '@angular/core';
// import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../environments/environment.dev'
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url="";
  // url = environment.apiBaseUrl;
  // apiBaseUrl: 'http://localhost:3000/api/v1',
  params!: Observable<any>;

  @Output() public showEditForm = new Subject<boolean>();
  constructor(public http: HttpClient) {}
  modiferCode:any;

  sendShowEditForm(data:any){
    this.showEditForm.next(data);
  }

  modifierCodeApi () {
    const apiData = "modifier";
    return{
      getData : (pageNo:number, pageSize:number,orderType:string,code:any,label:any) => { return this.http.get(`${this.url}/${apiData}/listing?pageNo=${pageNo}&pageSize=${pageSize}&orderBy=id&orderType=${orderType}&code=${code}&label=${label}`)},
      createData : ( payload :any ) =>  { return this.http.post(`${this.url}/${apiData}/create`, payload)},
      updateData : ( id: number, payload: any ) : Observable<any>  =>  { return this.http.put(`${this.url}/${apiData}/${id}`, payload)},
      deleteData : ( id: any ) : Observable<any>  =>  { return this.http.delete(`${this.url}/${apiData}/${id}`)},
    }
  }

}









