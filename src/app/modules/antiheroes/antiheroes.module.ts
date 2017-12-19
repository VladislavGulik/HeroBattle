import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntiheroesComponent } from './antiheroes.component';
import { AntiheroDetailsComponent } from './pages/antihero-details/antihero-details.component';
import { AntiheroListComponent } from './pages/antihero-list/antihero-list.component';
import { CreateAntiheroComponent } from './pages/create-antihero/create-antihero.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AntiheroesComponent,
    AntiheroDetailsComponent,
    AntiheroListComponent,
    CreateAntiheroComponent
  ]
})
export class AntiheroesModule { }
