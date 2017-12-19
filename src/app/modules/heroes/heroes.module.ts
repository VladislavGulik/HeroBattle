import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { CreateHeroComponent } from './pages/create-hero/create-hero.component';
import { HeroesComponent } from './heroes.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeroListComponent,
    HeroDetailsComponent,
    CreateHeroComponent,
    HeroesComponent
  ]
})

export class HeroesModule { }
