import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { ContactDetailComponent } from './component/contact-detail/contact-detail.component';
import { MasterPageComponentComponent } from './component/master-page-component/master-page-component.component';
import { FormValidationComponent } from './component/form-validation/form-validation.component';
import { ImageZoominComponent } from './component/image-zoomin/image-zoomin.component';

// const routes: Routes = [];
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'imagezoomin'},
  {path: 'contacts' , component: ContactListComponent},
  {path: 'contact/:id' , component: ContactDetailComponent},
  {path: 'masterpage' , component: MasterPageComponentComponent},
  {path: 'formvalidation' , component: FormValidationComponent},
  {path: 'imagezoomin' , component: ImageZoominComponent}
];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
