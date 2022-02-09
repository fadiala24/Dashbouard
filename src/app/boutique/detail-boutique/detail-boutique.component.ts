import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-detail-boutique',
  templateUrl: './detail-boutique.component.html',
  styleUrls: ['./detail-boutique.component.scss']
})
export class DetailBoutiqueComponent implements OnInit {

  detailBoutiques: any;
  id: any;
  loginData:any
  constructor(
    public service: ServiceBoutiqueService, 
    public route : ActivatedRoute) { }

  ngOnInit(): void {

    this.loginData=JSON.parse(localStorage["isLogin"]);
    this.id = this.route.snapshot.params['id'];

    this.service.detailBoutique(this.id).subscribe(data=>{
     
      console.log(data);
    })
  }
}
