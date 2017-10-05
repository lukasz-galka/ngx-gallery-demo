import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { NgxGalleryModule } from 'ngx-gallery';
import { NgxLoremIpsumModule } from 'ngx-lorem-ipsum';

import { AppComponent } from './app.component';
import { OptionsViewerComponent } from './options-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsViewerComponent
  ],
  imports: [
    BrowserModule,
    NgxGalleryModule,
    NgxLoremIpsumModule,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
