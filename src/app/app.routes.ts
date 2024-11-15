import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServeErrorComponent } from './errors/serve-error/serve-error.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'errors', component: TestErrorsComponent},
    {path: 'not-found', component: NotFoundComponent},
    {path: 'server-error', component: ServeErrorComponent},
    {path: '**', component: HomeComponent, pathMatch: 'full'}
];
