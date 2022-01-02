import {RouterModule,Routes} from '@angular/router';
import {
	ContentComponent,
	ContentiComponent,
	ContentboxComponent,
	LayoutComponent,
	LoginComponent,
	MainmenuComponent,
	ModalegresoComponent,
	ModalingresoComponent,
	ModalwelcomeComponent,
	SignupComponent,
	WrapperComponent,
	}from "./components/index.paginas";

	import { AuthGuard } from './guards/auth.guard';

const app_routes: Routes = [
	{path:'',pathMatch:'full',redirectTo:'login'},
	// {path:'',component:WrapperComponent},
	{path:'content',component:ContentComponent},
	{path:'contenti',component:ContentiComponent},
	{path:'contentbox',component:ContentboxComponent},
	{path:'layout',component:LayoutComponent},
	{path:'login',component:LoginComponent},
	{path:'mainmenu',component:MainmenuComponent},
	{path:'modalwelcome',component:ModalwelcomeComponent},
	{path:'modalegreso',component:ModalegresoComponent},
	{path:'modalingreso',component:ModalingresoComponent},
	{path:'signup',component:SignupComponent},
	{path:'wrapper',component:WrapperComponent},
	{path:'**',pathMatch:'full',redirectTo:''}	
	
	];
	export const app_routing = RouterModule.forRoot(app_routes);

