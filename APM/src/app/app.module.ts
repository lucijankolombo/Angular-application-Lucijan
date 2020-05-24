import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AutomobilListComponent } from './Prostori/automobil-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './shared/navbar-component/navbar.component';
import { ZaposleniciComponent } from './zaposlenici/zaposlenici.component';
import { RouterModule } from '@angular/router';
import { KlijentiComponent } from './Prostori/klijenti/klijenti.component';
import { DobavljaciComponent } from './Prostori/dobavljaci/dobavljaci.component';

//deklarirane rute
const routes = [
  { path: 'automobili', component: AutomobilListComponent },
  { path: 'zaposlenici', component: ZaposleniciComponent },
  { path: 'klijenti', component: KlijentiComponent},
  { path: 'dobavljaci', component: DobavljaciComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AutomobilListComponent,
    NavbarComponent,
    ZaposleniciComponent,
    KlijentiComponent,
    DobavljaciComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
