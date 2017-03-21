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
    lorem: string[] = [];

    constructor() {

        this.lorem.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
        this.lorem.push('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
        this.lorem.push('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.');
        this.lorem.push('Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');

        this.examples = new Array<Example>();

        this.examples.push(
            new Example('Simple gallery', this.getImages(), [{}, ...this.getResponsive()]),

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
            }, ...this.getResponsive()]),

            new Example('Preview with image description', this.getImages(true), [{
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

            new Example('Arrows auto hide', this.getImages(), [{
                imageArrowsAutoHide: true,
                thumbnailsArrowsAutoHide: true
            }, ...this.getResponsive()]),

            new Example('Disabled preview', this.getImages(), [{
                preview: false
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
        return this.lorem.slice(0, this.getRandomInt(1, this.lorem.length)).join(' ');
    }

    private getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private randomizeArray(numbersArray: number[]) {
        return numbersArray.sort(function() {
            return .5 - Math.random();
        });
    }
}
