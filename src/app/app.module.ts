import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import { BoutiquierComponent } from './boutiquier/boutiquier.component';

import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {ToastModule} from 'primeng/toast';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { DetailAdminComponent } from './admin/detail-admin/detail-admin.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { AddBoutiqueComponent } from './boutique/add-boutique/add-boutique.component';
import { ListBoutiqueComponent } from './boutique/list-boutique/list-boutique.component';
import { UpdateBoutiqueComponent } from './boutique/update-boutique/update-boutique.component';
import { DetailBoutiqueComponent } from './boutique/detail-boutique/detail-boutique.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { ListProduitComponent } from './produit/list-produit/list-produit.component';
import { DetailProduitComponent } from './produit/detail-produit/detail-produit.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    HeaderComponent,
    MenuComponent,
   
    BoutiquierComponent,
  
    AddAdminComponent,
    ListAdminComponent,
    UpdateAdminComponent,
    DetailAdminComponent,
    ConfirmationDialogComponent,
    AddBoutiqueComponent,
    ListBoutiqueComponent,
    UpdateBoutiqueComponent,
    DetailBoutiqueComponent,
    AddProduitComponent,
    ListProduitComponent,
    DetailProduitComponent,
    UpdateProduitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule,
    ToastrModule.forRoot(),
   
    ReactiveFormsModule,
    ToastModule,
    CalendarModule,
    SliderModule,


  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
