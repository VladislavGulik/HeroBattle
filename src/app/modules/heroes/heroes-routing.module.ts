import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesModule } from './heroes.module';
import { HeroListComponent } from './pages/hero-list/hero-list.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { CreateHeroComponent } from './pages/create-hero/create-hero.component';
import { HeroesComponent } from './heroes.component';

const routes: Routes = [
  { path: '', component: HeroesComponent },
  { path: '', component: HeroListComponent },
  { path: '', component: HeroDetailsComponent },
  { path: '', component: CreateHeroComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingRoutingModule { }

export const heroRoutingComponents = [HeroesComponent, HeroListComponent, HeroDetailsComponent, CreateHeroComponent];
