import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { MasterPageComponentComponent } from './component/master-page-component/master-page-component.component';
import { ChildComponentComponent } from './component/master-page-component/child-component/child-component.component';
// tslint:disable-next-line: max-line-length
import { ChildComponentAnotherComponent } from './component/master-page-component/child-component-another/child-component-another.component';
import { AppShadowDirective } from './app-shadow.directive';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {BackendService} from './services/backend.service';
import { AppRoutingModule } from './app-routing.module';
import { ContactListComponent } from './component/contact-list/contact-list.component';
import { ContactDetailComponent } from './component/contact-detail/contact-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { FormValidationComponent } from './component/form-validation/form-validation.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { ImageZoominComponent } from './component/image-zoomin/image-zoomin.component';

// import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MasterPageComponentComponent,
    ChildComponentComponent,
    ChildComponentAnotherComponent,
    AppShadowDirective,
    ContactListComponent,
    ContactDetailComponent,
    FormValidationComponent,
    ImageZoominComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    InMemoryWebApiModule.forRoot(BackendService),
    HttpClientModule,
    NgxImageZoomModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
