import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const apiUrl = 'http://127.0.0.1:8000/api/';
@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(apiUrl+'articles');
  }
  postData(data){
    return this.http.post(apiUrl+'articles',data);
  }
  updateData(data,id){
    return this.http.put(apiUrl+'articles/'+id,data);
  }
  getArticle(id){
    return this.http.get(apiUrl+'articles/'+id);
  }
  deleteData(id){
    return this.http.delete(apiUrl+'articles/'+id);
  }
}
