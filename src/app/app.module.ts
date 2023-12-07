import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SectionComponent } from './pages/section/section.component';
import { ThirdLinkComponent } from './pages/third-link/third-link.component';
import { MainFooterComponent } from './layouts/main-footer/main-footer.component';
import { FourfourComponent } from './pages/fourfour/fourfour.component';
import { SectionDesignerComponent } from './pages/home/section-designer/section-designer.component';
import { SectionPostComponent } from './pages/section/section-post/section-post.component';
import { ThirdLinkResponseComponent } from './pages/third-link/third-link-response/third-link-response.component';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SectionComponent,
    ThirdLinkComponent,
    MainFooterComponent,
    FourfourComponent,
    SectionDesignerComponent,
    SectionPostComponent,
    ThirdLinkResponseComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
