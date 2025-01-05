import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogsComponent } from './components/logs/logs.component';
import { IndexComponent } from './components/index/index.component';
import { AuthGuard } from './guards/auth.guard';  // Asegúrate de importar el guard

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logs', component: LogsComponent, canActivate: [AuthGuard] },
    { path: 'inicio', component: IndexComponent, canActivate: [AuthGuard] },

    // rutas por defecto
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: '**', redirectTo: '/inicio' }, //**  Representa cualquier otra ruta
];
