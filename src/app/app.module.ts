import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VerticalNavBarComponent } from './vertical-nav-bar/vertical-nav-bar.component';
import { ConceptsComponent } from './vertical-nav-bar/concepts/concepts.component';
import { ResourcesComponent } from './vertical-nav-bar/resources/resources.component';
import { ScenariosComponent } from './vertical-nav-bar/scenarios/scenarios.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    VideoPlayerComponent,
    VerticalNavBarComponent,
    ConceptsComponent,
    ResourcesComponent,
    ScenariosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
