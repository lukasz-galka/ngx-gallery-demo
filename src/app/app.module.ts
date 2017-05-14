import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { NgxGalleryModule } from 'ngx-gallery';
import { NgxLoremIpsumModule } from 'ngx-lorem-ipsum';

import { AppComponent } from './app.component';
import { OptionsViewerComponent } from './options-viewer.component';

import { DemoComponent } from './demo/demo.component';
import { CustomDemoComponent } from './custom-demo/custom-demo.component';

@NgModule({
    declarations: [
        AppComponent,
        DemoComponent,
        CustomDemoComponent,
        OptionsViewerComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgxGalleryModule,
        NgxLoremIpsumModule,
        RouterModule.forRoot([
            { path: '', component: DemoComponent },
            { path: 'custom', component: CustomDemoComponent }
        ]),
        Ng2PageScrollModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
