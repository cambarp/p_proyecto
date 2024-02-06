import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';


export const routes: Routes = [

    { path: '', component: AppComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'cuerpo', component: CuerpoComponent},
    { path: 'quienes_somos', component: QuienesSomosComponent}
];
@NgModule({
    
    imports: [
      
      RouterModule.forRoot(routes)
    ],
   
  })
  export class AppModule { }
