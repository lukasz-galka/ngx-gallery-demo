import { Component } from '@angular/core';

import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { Example } from './example.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    examples: Example[];

    constructor() {

        this.examples = new Array<Example>();

        this.examples.push(
            new Example('Simple gallery', this.getImages(), [{}, ...this.getResponsive()]),

            new Example('Arrows auto hide', this.getImages(), [{
                imageArrowsAutoHide: true,
                thumbnailsArrowsAutoHide: true
            }, ...this.getResponsive()]),

            new Example('Disabled preview', this.getImages(), [{
                preview: false
            }, ...this.getResponsive()]),

            new Example('Custom layout', this.getImages(), [{
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsColumns: 6,
                thumbnailsMargin: 0,
                thumbnailMargin: 0,
            }, ...this.getResponsive()]),

            new Example('Thumbnails with multiple rows', this.getImages(), [{
                thumbnailsColumns: 3,
                thumbnailsRows: 2,
                thumbnailsPercent: 40,
                imagePercent: 60,
                thumbnailMargin: 2,
                thumbnailsMargin :2
            }, ...this.getResponsive()])
        )
    }

    private getResponsive(): NgxGalleryOptions[] {

        let options = new Array<NgxGalleryOptions>();

        options.push({
            breakpoint: 500,
            width: '300px',
            height: '300px',
            thumbnailsColumns: 3
        })
        options.push({
            breakpoint: 300,
            width: '100%',
            height: '200px',
            thumbnailsColumns: 2
        })

        return options;
    }

    private getImages(): NgxGalleryImage[] {
        let images = new Array<NgxGalleryImage>();

        // http://stackoverflow.com/a/18650169/5946227
        let indexes = [1,2,3,4,5,6,7,8].sort(function() {
            return .5 - Math.random();
        });

        indexes.map(i => images.push({
            small: 'assets/img/' + i + '-small.jpeg',
            medium: 'assets/img/' + i + '-medium.jpeg',
            big: 'assets/img/' + i + '-big.jpeg'
        }))

        return images;
    }
}
