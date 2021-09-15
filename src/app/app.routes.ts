import {RouterModule,Routes} from '@angular/router';
import {
	AboutComponent,
	AlltixslistComponent,
	AddtixsComponent,
	AlltixsleftComponent,
	AffiliatesComponent,
	AffiliateDetailComponent,
	AlltixsComponent,
	AffiliateComponent,
	AssbookComponent,
	BookingComponent,
	CancelbookComponent,
	ContentComponent,
	ContentiComponent,
	ContentboxComponent,
	ContentpanelComponent,
	ComingComponent,
	ContactoComponent,
	CheckoutComponent,
	DeletevalidationComponent,
	LayoutComponent,
	LoginComponent,
	MyTixsComponent,
	NewMemberComponent,
	MainmenuComponent,
	ModalegresoComponent,
	ModalingresoComponent,
	ModalwelcomeComponent,
	PartnersComponent,
	PartnerDetailComponent,
	PartnerComponent,
	ProfileComponent,
	SliderHomeComponent,
	SignupComponent,
	SuccessbookComponent,
	SuccessaComponent,
	SuccesscontactComponent,
	SuccessvalidationComponent,
	SuccesscancelbookComponent,
	SuccessdeletevalidationComponent,
	TixDetailComponent,
	TreksComponent,
	TreklistComponent,
	TrekeditComponent,
	ValidationComponent,
	ValistComponent,
	WrapperComponent,
	CurrencyselectorComponent,
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',pathMatch:'full',redirectTo:'login'},
	// {path:'',component:WrapperComponent},
	{path:'alltixs',component:AlltixsComponent},
	{path:'mytixs',component:MyTixsComponent, canActivate:[AuthGuard]},
	{path:'login',component:LoginComponent},
	{path:'affiliates',component:AffiliatesComponent,canActivate:[AuthGuard]},		
	{path:'partners',component:PartnersComponent,canActivate:[AuthGuard]},
	{path:'partner-detail/:id',component:PartnerDetailComponent, canActivate:[AuthGuard]},
	{path:'affiliate-detail/:id',component:AffiliateDetailComponent, canActivate:[AuthGuard]},
	{path:'tix-detail/:id',component:TixDetailComponent},
	{path:'signup',component:SignupComponent},
	{path:'coming',component:ComingComponent},
	{path:'new-member',component:NewMemberComponent, canActivate:[AuthGuard]},
	{path:'new-member/partner',component:PartnerComponent, canActivate:[AuthGuard]},
	{path:'new-member/affiliate',component:AffiliateComponent, canActivate:[AuthGuard]},
	{path:'profile',component:ProfileComponent, canActivate:[AuthGuard]},
	{path:'addtixs',component:AddtixsComponent, canActivate:[AuthGuard]},
	{path:'booking',component:BookingComponent, canActivate:[AuthGuard]},
	{path:'alltixslist',component:AlltixslistComponent},
	{path:'alltixsleft',component:AlltixsleftComponent},
	{path:'about',component:AboutComponent},	
	{path:'treks',component:TreksComponent},
	{path:'trekedit',component:TrekeditComponent,canActivate:[AuthGuard]},
	{path:'treklist',component:TreklistComponent,canActivate:[AuthGuard]},
	{path:'contacto',component:ContactoComponent},
	{path:'checkout',component:CheckoutComponent},
	{path:'valist',component:ValistComponent,canActivate:[AuthGuard]},
	{path:'successbook',component:SuccessbookComponent},
	{path:'successa',component:SuccessaComponent},
	{path:'validation',component:ValidationComponent},
	{path:'assbook',component:AssbookComponent},
	{path:'successvalidation',component:SuccessvalidationComponent},	
	{path:'cancelbook',component:CancelbookComponent},	
	{path:'successcancelbook',component:SuccesscancelbookComponent},	
	{path:'successcontact',component:SuccesscontactComponent},
	{path:'deletevalidation',component:DeletevalidationComponent},
	{path:'mainmenu',component:MainmenuComponent},
	{path:'successdeletevalidation',component:SuccessdeletevalidationComponent},
	{path:'modalwelcome',component:ModalwelcomeComponent},
	{path:'layout',component:LayoutComponent},
	{path:'content',component:ContentComponent},
	{path:'contenti',component:ContentiComponent},
	{path:'contentbox',component:ContentboxComponent},
	{path:'contentpanel',component:ContentpanelComponent},
	{path:'wrapper',component:WrapperComponent},
	{path:'modalegreso',component:ModalegresoComponent},
	{path:'modalingreso',component:ModalingresoComponent},
	{path:'currencyselector',component:CurrencyselectorComponent},
	{path:'**',pathMatch:'full',redirectTo:''}	
	
	];
	export const app_routing = RouterModule.forRoot(app_routes);

