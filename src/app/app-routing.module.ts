import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { DetailAdminComponent } from './admin/detail-admin/detail-admin.component';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { AddBoutiqueComponent } from './boutique/add-boutique/add-boutique.component';
import { DetailBoutiqueComponent } from './boutique/detail-boutique/detail-boutique.component';
import { ListBoutiqueComponent } from './boutique/list-boutique/list-boutique.component';
import { UpdateBoutiqueComponent } from './boutique/update-boutique/update-boutique.component';
import { LoginComponent } from './login/login.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { DetailProduitComponent } from './produit/detail-produit/detail-produit.component';
import { ListProduitComponent } from './produit/list-produit/list-produit.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },
  {path: 'listAdmin', component: ListAdminComponent},
  {path: 'addAdmin', component: AddAdminComponent},
  {path: 'updateAdmin/:id', component: UpdateAdminComponent},
  {path: 'detailAdmin/:id', component: DetailAdminComponent},

  {path: 'addBoutique', component: AddBoutiqueComponent},
  {path: 'listBoutique', component: ListBoutiqueComponent},
  {path: 'detailBoutique/:id', component: DetailBoutiqueComponent},
  {path: 'updateBoutique/:id', component: UpdateBoutiqueComponent},
  

  {path: 'addProduit', component: AddProduitComponent},
  {path: 'listProduit', component: ListProduitComponent},
  {path: 'detailProduit/:id', component: DetailProduitComponent},
  {path: 'updateProduit/:id', component: UpdateProduitComponent},
 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
