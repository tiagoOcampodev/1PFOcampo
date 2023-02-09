import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  filtro: string = '';
  cursos: Curso[] = [
  {
    nombre: 'Angular',
    comision: '40510',
    profesor : {
    nombre: 'Abner Garcia',
    correo: 'abner@gmail.com',
    fechaRegistro: new Date(2022, 3, 15)
    },
    fechaInicio: new Date(2023,0,1,19, 45, 0),
    fechaFin: new Date(2023,0,31,21, 30, 0),
    inscripcionAbierta:true
  },
  {
    nombre: 'React',
    comision: '30103',
    profesor : {
    nombre: 'Raul Gonzales',
    correo: 'raulGon@gmail.com',
    fechaRegistro: new Date(2021, 6, 15)
    },
    fechaInicio: new Date(2023,1,1,21, 15, 0),
    fechaFin: new Date(2023,1,31,23, 15, 0),
    inscripcionAbierta:false
  },
  {
    nombre: 'Javascript',
    comision: '90623',
    profesor : {
    nombre: 'Miguel Rondon',
    correo: 'rondonMiguel@gmail.com',
    fechaRegistro: new Date(2021, 9, 21)
    },
    fechaInicio: new Date(2023,2,2, 20, 30, 0),
    fechaFin: new Date(2023,2,31,22,30, 0),
    inscripcionAbierta:true
  },
  {
    nombre: 'NodeJS',
    comision: '53313',
    profesor : {
    nombre: 'Juan Quintero',
    correo: 'quinteroJuan_@gmail.com',
    fechaRegistro: new Date(2020, 2, 11)
    },
    fechaInicio: new Date(2023,3,1, 20, 10, 0),
    fechaFin: new Date(2023,3,27,22, 15, 0),
    inscripcionAbierta:false
  }
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  columnas : string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones']

  constructor(
    private dialog: MatDialog
  ){
    
  }

  abrirModal(curso: Curso){
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
      data: curso
    });
  }
}
