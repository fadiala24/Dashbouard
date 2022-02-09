import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-add-boutique',
  templateUrl: './add-boutique.component.html',
  styleUrls: ['./add-boutique.component.scss']
})
export class AddBoutiqueComponent implements OnInit {
  admin: any;
  adminConnect: any;
  services: any;
  constructor(
    private service: ServiceBoutiqueService,
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
    this.services = {'nom': form.value['nom'], 'quartier': form.value['quartier'], 'ville': form.value['ville'],
     'adresse': form.value['adresse'], 'administrateur': this.adminConnect}
     console.log(this.services)
    this.service.addBoutique(this.services).subscribe((data: any)=> {
        this.showToastSuccess();
        this.router.navigateByUrl("/listBoutique");
        console.log("helle ++++++++++++", data);
      
      
    })
  }else{
    this.showToastError();
  }
}
    }