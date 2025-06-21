import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { InsumosComponent } from './pages/insumos/insumos.component';
import { ContabioComponent } from './pages/contabio/contabio.component';
import { FormularioComponent } from './pages/contabio/formulario/formulario.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'insumos', component: InsumosComponent},
  {path:'contabio', component:ContabioComponent},
  {path:'saida', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
