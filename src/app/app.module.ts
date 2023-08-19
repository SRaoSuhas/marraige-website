import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { VideoComponent } from './components/video/video.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EventComponent } from './components/event/event.component';
import { FriendsAndFamilyComponent } from './components/friends-and-family/friends-and-family.component';
import { VideosComponent } from './components/videos/videos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    VideoComponent,
    AboutComponent,
    GalleryComponent,
    EventComponent,
    FriendsAndFamilyComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
