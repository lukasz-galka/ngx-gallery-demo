import { Component, Input } from '@angular/core';

import { NgxGalleryOptions } from 'ngx-gallery';

@Component({
    selector: 'options-viewer',
    templateUrl: './options-viewer.component.html',
    styleUrls: ['./options-viewer.component.scss']
})
export class OptionsViewerComponent {

    visibleCode: boolean = false;

    @Input() options: NgxGalleryOptions;

    showCode(): void {
        this.visibleCode = true;
    }

    hideCode(): void {
        this.visibleCode = false;
    }
}
