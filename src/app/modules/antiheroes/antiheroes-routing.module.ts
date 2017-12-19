import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntiheroesModule } from './antiheroes.module';
import { Routes, RouterModule } from '@angular/router';
import { AntiheroesComponent } from './antiheroes.component';
import { AntiheroDetailsComponent } from './pages/antihero-details/antihero-details.component';
import { AntiheroListComponent } from './pages/antihero-list/antihero-list.component';
import { CreateAntiheroComponent } from './pages/create-antihero/create-antihero.component';

const routes: Routes = [
  { path: '', component: AntiheroesComponent },
  { path: '', component: AntiheroDetailsComponent },
  { path: '', component: AntiheroListComponent },
  { path: '', component: CreateAntiheroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AntiheroesRoutingModule { }

export const antiheroesRoutingComponents = [AntiheroesComponent, AntiheroDetailsComponent, AntiheroListComponent, CreateAntiheroComponent];
