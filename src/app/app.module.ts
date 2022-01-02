import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ArchwizardModule } from 'angular-archwizard';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject} from '@angular/core';
import { XunkCalendarModule } from '../xunk-calendar/xunk-calendar.module';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

//RUTAS
import { app_routing } from "./app.routes";       

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

//DIRECTIVAS
import { ConfirmEqualValidatorDirective } from './confirm-equal-validator.directive';
import { FilePickerModule } from  '../assets/file-picker/src/public_api';

//COMPONENTS

//SERVICES
import {TixsService} from './services/tixs.service';
import {DataApiService} from './services/data-api.service';
import {ScrollTopService} from './services/scroll-top.service';
import {UserWService} from './services/user-w.service';

import {IpbucketService} from './services/ipbucket.service';
// import {ActivityTrackerService} from './services/activity-tracker.service';




//ANIMATIONS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MATERIAL
//import { MaterialModule } from './material';
import {MatButtonModule, MatCheckboxModule,MatTabsModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';

import { CatalogComponent,DialogOverviewExampleDialog } from './components/catalog/catalog.component';

import { ContentComponent } from './components/content/content.component';
import { ContentiComponent } from './components/contenti/contenti.component';
import { ContentboxComponent } from './components/contentbox/contentbox.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { MainmenuComponent } from './components/mainmenu/mainmenu.component';
import { MobilemenuComponent } from './components/mobilemenu/mobilemenu.component';
import { ModalcategorylistComponent } from './components/modalcategorylist/modalcategorylist.component';
import { ModalegresoComponent } from './components/modalegreso/modalegreso.component';
import { ModalingresoComponent } from './components/modalingreso/modalingreso.component';
import { ModalnewcategoryComponent } from './components/modalnewcategory/modalnewcategory.component';
import { ModalwelcomeComponent } from './components/modalwelcome/modalwelcome.component';
import { SiderightComponent } from './components/sideright/sideright.component';
import { SignupComponent } from './components/signup/signup.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';



// import { HttpClientModule } from '@angular/common/http';
// import { Component, Inject} from '@angular/core';





@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    ContentComponent,
    ContentiComponent,
    ContentboxComponent,
    ConfirmEqualValidatorDirective,
    DialogOverviewExampleDialog,
    LayoutComponent,
    LoginComponent,
    MainmenuComponent,
    MobilemenuComponent,
    ModalegresoComponent,
    ModalingresoComponent,
    ModalnewcategoryComponent,
    ModalcategorylistComponent,
    ModalwelcomeComponent,
    SiderightComponent,
    SignupComponent,
    TopbarComponent,
    WrapperComponent,
  ],
  imports: [
    // SweetAlert2Module.forRoot(),
    BrowserModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    app_routing,
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule,
    ArchwizardModule,
    CarouselModule,
    XunkCalendarModule,
    FilePickerModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatTabsModule,MatDialogModule,MatIconModule,MatInputModule,
    MatListModule,MatDatepickerModule,
    MatNativeDateModule,MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatBadgeModule,
    MatTableModule
  ],
 entryComponents:[ DialogOverviewExampleDialog ],
  providers: [
    TixsService,
    DataApiService,
    ScrollTopService,
    UserWService,
    IpbucketService
    // ActivityTrackerService
      ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
