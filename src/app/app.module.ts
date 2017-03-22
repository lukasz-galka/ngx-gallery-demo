import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
        FormsModule,
        HttpModule,
        NgxGalleryModule,
        NgxLoremIpsumModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
