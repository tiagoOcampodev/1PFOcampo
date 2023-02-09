import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MensajeDialogComponent } from '../mensaje-dialog/mensaje-dialog.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent {
  alumnos: Alumno[] = [
    {
      nombre: 'Tiago',
      apellido: 'Ocampo',
      edad: 15,
      activo:true,
      fechaRegistro: new Date(2022, 6, 15)
    },
    {
      nombre: 'Juan',
      apellido: 'Fernandez',
      edad: 24,
      activo:false,
      fechaRegistro: new Date(2023, 1, 6)
    },
    {
      nombre: 'Milagros',
      apellido: 'Sosa',
      edad: 25,
      activo:false,
      fechaRegistro: new Date(2022, 6, 15)
    },
    {
      nombre: 'Mauro',
      apellido: 'Lombardo',
      edad: 20,
      activo:true,
      fechaRegistro: new Date(2022, 6, 15)
    }
  ];
  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(this.alumnos);
  columnas : string[] = ['nombre', 'apellido', 'edad', 'fechaRegistro', 'actividad', 'acciones']
}
