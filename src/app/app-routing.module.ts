import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ultimos30DiasComponent } from './pages/ultimos-30-dias/ultimos-30-dias.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Rota vazia redireciona para home
  { path: 'home', component: HomeComponent }, //Conteúdo main e aside
  { path: 'ultimos-30-dias', component: Ultimos30DiasComponent } // Histórico
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
