import { Component, Input } from '@angular/core';

import { NgxGalleryOptions } from 'ngx-gallery';

@Component({
    selector: 'options-viewer',
    templateUrl: './options-viewer.component.html',
    styleUrls: ['./options-viewer.component.scss']
})
export class OptionsViewerComponent {
    @Input() options: NgxGalleryOptions;
}
