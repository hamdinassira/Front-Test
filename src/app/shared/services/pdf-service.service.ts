import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PdfServiceService {
  URL=environment.apiUrl;

  constructor(private http:HttpClient) { }


  // generatePDF(): Observable<Blob>
  // {
  //     let url = this.URL + 'application/pdf';
  //     var authorization = 'Bearer '+sessionStorage.getItem("access_token");

  //     const headers = new HttpHeaders({ 'Content-Type': 'application/json',
  //     "Authorization": authorization, responseType : 'blob'});

  //     return this.http.get<Blob>(url, { headers : headers,responseType :
  //     'blob' as 'json'});
  // }

  uploadPhoto(formData:FormData): Observable<HttpEvent<{}>>{
    //let formData:FormData=new FormData();
    return this.http.post<string[]>(`${this.URL}uploadPhoto`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

}
