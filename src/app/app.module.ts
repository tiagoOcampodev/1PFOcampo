import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MaterialComponent } from './components/material/material.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { EditarCursoDialogComponent } from './components/editar-curso-dialog/editar-curso-dialog.component';
import { BooleanoATextoPipe } from './pipes/booleano-a-texto.pipe';
import { FormatoFechaPipe } from './pipes/formato-fecha.pipe';
import { BooleanoEstiloDirective } from './directives/booleano-estilo.directive';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MensajeDialogComponent } from './components/mensaje-dialog/mensaje-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialComponent,
    FormularioReactivoComponent,
    EditarCursoDialogComponent,
    BooleanoATextoPipe,
    FormatoFechaPipe,
    BooleanoEstiloDirective,
    AlumnosComponent,
    SidebarComponent,
    ToolbarComponent,
    MensajeDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
