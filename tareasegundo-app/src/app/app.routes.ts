import { Routes } from '@angular/router';
import { ListaLibrosComponent } from './components/lista-libros/lista-libros.component';
import { CrudLibrosComponent } from './components/crud-libros/crud-libros.component';
import { LoginComponent } from './components/login/login.component';
import { LogsComponent } from './components/logs/logs.component';

export const routes: Routes = [
    { path: 'lista-libros', component: ListaLibrosComponent },
    { path: 'login', component: LoginComponent},
    { path: 'logs', component: LogsComponent },
    { path: 'crud-libros', component: CrudLibrosComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
  ];
  