import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceBoutiqueService } from '../service-boutique.service';

@Component({
  selector: 'app-update-boutique',
  templateUrl: './update-boutique.component.html',
  styleUrls: ['./update-boutique.component.scss']
})
export class UpdateBoutiqueComponent implements OnInit {

  id: any;
  services: any;
  constructor(
    public service: ServiceBoutiqueService,
    public  route: ActivatedRoute,
    public toast: ToastrService,
     public router : Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailBoutique(this.id).subscribe(data=>{
      console.log(data);
      this.services = data;

    })
  }

  onUpdate(){
    this.service.updateBoutique(this.id, this.services).subscribe((res)=> {
      this.showToast();
      console.log(res);
      this.router.navigateByUrl('/listBoutique');
    })
  }
  showToast(){
    this.toast.success("Modification effectuer avec succes !!!");
  }


}
