import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceProduitService } from '../service-produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.scss']
})
export class AddProduitComponent implements OnInit {
  admin: any;
  adminConnect: any;
  services: any;
  constructor(
    private service: ServiceProduitService,
    private router: Router,
    private toast: ToastrService
  ) { }
 
  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
  this.adminConnect = JSON.parse(this.admin)
}

showToastSuccess() {
  this.toast.success('Admin ajouté avec succès !')
}

showToastError() {
  this.toast.error('Erreur du système !')
}

AjoutService(form: NgForm) {    
  if(form.valid){
    this.services = {'nom': form.value['nom'], 'quantite': form.value['quantite'], 'prix_unitaire': form.value['prix_unitaire'],
     'category': form.value['category'], 'administrateur': this.adminConnect}
     console.log(this.services)
    this.service.addProduit(this.services).subscribe((data: any)=> {
        this.showToastSuccess();
        this.router.navigateByUrl("/listProduit");
        console.log("helle ++++++++++++", data);
      
      
    })
  }else{
    this.showToastError();
  }
}

}
