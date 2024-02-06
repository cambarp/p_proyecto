import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';


export const routes: Routes = [

    { path: 'header', component: HeaderComponent },
    { path: 'cuerpo', component: CuerpoComponent},
    { path: 'quienes_somos', component: QuienesSomosComponent}
];
@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports :[RouterModule]
  })

  export class AppModule { }
