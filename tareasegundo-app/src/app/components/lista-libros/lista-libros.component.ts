import { Component, OnInit } from '@angular/core';
import { Libro } from '../../models/Libro';
import { LibrosJsonService } from '../../services/libros-json.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from '../../shared/footer/footer.component';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-lista-libros',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, MatCardModule, MatIconModule, MatButtonModule, FooterComponent,HttpClientModule],
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css']
})
export class ListaLibrosComponent implements OnInit {
  libros: Libro[] = [];

  constructor(private librosService: LibrosJsonService) {}

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros(): void {
    this.librosService.getLibros().subscribe((data: Libro[]) => {
      this.libros = data;
      console.log(this.libros);  // Verificar los datos en la consola
    });
  }

  activar(imgProducto:HTMLImageElement){
    imgProducto.classList.add("activa");
  }

  desactivar(imgProducto:HTMLImageElement){
    imgProducto.classList.remove("activa");
  }
}
