import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceProduitService {
  url='http://localhost:8080/api/';

  constructor(
    private http : HttpClient
  ) 
  { }

 //-------------------------------------------------------Produit  APi service --------------

 getAllProduit():Observable<any>{
  return this.http.get(this.url+"Produit/listProduit");
}
addProduit(data:any){
    
  return this.http.post(this.url+"Produit/addProduit",data, {responseType:'text'});
}

deleteProduit(id:any){
  return this.http.delete(this.url+"Produit/deleteProduit/"+id, {responseType:'text'});
}


detailProduit(id:any){
  return this.http.get(this.url +"Produit/infoProduit/"+id, {responseType:'text'});
}
updateAdmin(id: number, data: any){
  return this.http.put(this.url+"Admin/updateAdmin/"+id, data,  {responseType:'text'});
}
}
