import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { CadastroModule } from './pages/cadastro/cadastro.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InsumosModule } from './pages/insumos/insumos.module';
import { ContabioModule } from './pages/contabio/contabio.module';
import { CadastroService } from './service/cadastro.service';
import { SharedModule } from "./pages/shared/shared.module";

@NgModule({

  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CadastroModule,
    FormsModule,
    InsumosModule,
    ContabioModule,
    ReactiveFormsModule,
    SharedModule
],
  providers: [CadastroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
