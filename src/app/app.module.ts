import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MenuComponent } from './share/menu/menu.component';


// Importamos todo los componentes de primefaces que usaremos en esta lección 2
import {GrowlModule} from 'primeng/growl';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import {InputMaskModule} from 'primeng/inputmask';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {FieldsetModule} from 'primeng/fieldset';
import {CalendarModule} from 'primeng/calendar';

//por cada libreria importada, debemos  agregarla a @NgModule

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent],
    imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    MenubarModule,
    MessagesModule,
    MessageModule,
    GrowlModule,
    ToastModule,
    InputTextModule,
    ToggleButtonModule,
    PasswordModule,
    InputMaskModule,
    PanelModule,
    PanelMenuModule,
    FieldsetModule,
    CalendarModule
  ],
  providers: [ AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
