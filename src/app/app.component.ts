import { Component } from '@angular/core';
import 'hammerjs';

import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
import { NgxLoremIpsumService } from 'ngx-lorem-ipsum';

import { Example } from './example.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    examples: Example[];

    constructor(private loremIpsumService: NgxLoremIpsumService) {

        this.examples = new Array<Example>();

        this.examples.push(
            new Example('Simple gallery', this.getImages(), [{ imageSize: NgxGalleryImageSize.Contain }, ...this.getResponsive()]),

            new Example('Custom layout', this.getImages(), [{
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsColumns: 6,
                thumbnailsMargin: 0,
                thumbnailMargin: 0,
            }, ...this.getResponsive()]),

            new Example('Image size - contain', this.getImages(), [{
                imageSize: NgxGalleryImageSize.Contain
            }, ...this.getResponsive()]),

            new Example('Thumbnails with multiple rows', this.getImages(), [{
                thumbnailsColumns: 3,
                thumbnailsRows: 2,
                thumbnailsPercent: 40,
                imagePercent: 60,
                thumbnailMargin: 2,
                thumbnailsMargin :2
            }, ...this.getResponsive()]),

            new Example('Preview with image description', this.getImages(true), [{
                previewFullscreen: true
            }, ...this.getResponsive()]),

            new Example('Only image', this.getImages(true), [{
                thumbnails: false
            }, {
                breakpoint: 500,
                width: '100%',
                height: '200px'
            }]),

            new Example('Only thumbnails', this.getImages(true), [{
                image: false,
                height: '100px'
            }, {
                breakpoint: 500,
                width: '100%'
            }]),

            new Example('Swipe', this.getImages(), [{
                imageArrows: false,
                imageSwipe: true,
                thumbnailsArrows: false,
                thumbnailsSwipe: true,
                previewSwipe: true
            }, ...this.getResponsive()]),

            new Example('Arrows auto hide', this.getImages(), [{
                imageArrowsAutoHide: true,
                thumbnailsArrowsAutoHide: true
            }, ...this.getResponsive()]),

            new Example('Disabled preview', this.getImages(), [{
                preview: false
            }, ...this.getResponsive()]),

            new Example('Animation - Slide', this.getImages(), [{
                imageAnimation: NgxGalleryAnimation.Slide
            }, ...this.getResponsive()]),

            new Example('Animation - Rotate', this.getImages(), [{
                imageAnimation: NgxGalleryAnimation.Rotate
            }, ...this.getResponsive()]),

            new Example('Animation - Zoom', this.getImages(), [{
                imageAnimation: NgxGalleryAnimation.Zoom
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

    private getImages(description: boolean = false): NgxGalleryImage[] {
        let images = new Array<NgxGalleryImage>();

        this.randomizeArray([1,2,3,4,5,6,7,8]).map(i => images.push({
            small: 'assets/img/' + i + '-small.jpeg',
            medium: 'assets/img/' + i + '-medium.jpeg',
            big: 'assets/img/' + i + '-big.jpeg',
            description: description ? this.getRandomDescription() : ''
        }))

        return images;
    }

    private getRandomDescription(): string {
        return this.loremIpsumService.getRandom(1, 5);
    }

    private getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private randomizeArray(numbersArray: number[]) {
        return numbersArray.sort(() => .5 - Math.random());
    }
}
