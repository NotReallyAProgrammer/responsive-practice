import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SectionComponent } from './pages/section/section.component';
import { ThirdLinkComponent } from './pages/third-link/third-link.component';
import { FourfourComponent } from './pages/fourfour/fourfour.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'section', component: SectionComponent },
  { path: 'third-link', component: ThirdLinkComponent },

  { path: '404', component: FourfourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
