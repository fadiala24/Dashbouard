import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceProduitService } from '../service-produit.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.scss']
})
export class DetailProduitComponent implements OnInit {

  detailProduit: any;
  id: any;
  loginData:any
  constructor(
    public service: ServiceProduitService, 
    public route : ActivatedRoute) { }

  ngOnInit(): void {
    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.id = this.route.snapshot.params['id'];
    this.service.detailProduit(this.id).subscribe(data=>{
      this.detailProduit = data;
      console.log(data);
    })
  }

}
