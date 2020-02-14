import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PostPrincipalComponent } from './home/post-principal/post-principal.component';
import { PostSecundarioComponent } from './home/post-secundario/post-secundario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    HeaderComponent,
    PostPrincipalComponent,
    PostSecundarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
