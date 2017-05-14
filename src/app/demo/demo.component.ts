import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import 'hammerjs';
import { Observable } from 'rxjs/Rx';

import { PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

import { NgxGalleryOptions, NgxGalleryImage, 
    NgxGalleryAnimation, NgxGalleryImageSize } from 'ngx-gallery';
import { NgxLoremIpsumService } from 'ngx-lorem-ipsum';

import { Example } from './../example.model';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {

    examples: Example[];

    changeExample: Example;
    asyncExample: Example;
    asyncSpinnerActive: boolean = true;

    constructor(private loremIpsumService: NgxLoremIpsumService, 
        private route: ActivatedRoute, private pageScrollService: PageScrollService, 
        @Inject(DOCUMENT) private document: any) {}

    ngOnInit(): void {

        this.route.fragment.subscribe((fragment: string) => {
            if (fragment) {
                this.pageScrollService.start(PageScrollInstance
                    .simpleInstance(this.document, '#' + fragment));
            }
        })

        this.examples = new Array<Example>();

        this.examples.push(
            new Example('Simple gallery', this.getImages(), [{}]),

            new Example('Custom layout', this.getImages(), [{
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsColumns: 6,
                thumbnailsMargin: 0,
                thumbnailMargin: 0,
            }]),

            new Example('Image size - contain', this.getImages(), [{
                imageSize: NgxGalleryImageSize.Contain
            }]),

            new Example('Thumbnails with multiple rows', this.getImages(), [{
                thumbnailsColumns: 3,
                thumbnailsRows: 2,
                thumbnailsPercent: 40,
                imagePercent: 60,
                thumbnailMargin: 2,
                thumbnailsMargin :2
            }]),

            new Example('Preview with image description', this.getImages(true), [{
                previewFullscreen: true
            }]),

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
            }]),

            new Example('Arrows auto hide', this.getImages(), [{
                imageArrowsAutoHide: true,
                thumbnailsArrowsAutoHide: true
            }]),

            new Example('Disabled preview', this.getImages(), [{
                preview: false
            }]),

            new Example('Animation - Slide', this.getImages(), [{
                imageAnimation: NgxGalleryAnimation.Slide
            }]),

            new Example('Animation - Rotate', this.getImages(), [{
                imageAnimation: NgxGalleryAnimation.Rotate
            }]),

            new Example('Animation - Zoom', this.getImages(), [{
                imageAnimation: NgxGalleryAnimation.Zoom
            }])
        )

        this.changeExample = new Example('Dynamic images change', 
            this.getImages(true, true), [{}]);

        this.asyncExample = new Example('Async images', [], [{}])
        this.getAsyncImages().subscribe(images => {
            this.asyncExample.images = images;
            this.asyncSpinnerActive = false;
        });
    }

    changeImages(): void {
        this.changeExample.images = this.getImages(true, true);
    }

    addImage(): void {
        this.changeExample.images.push(this.getImage(this.getRandomInt(1, 8), true));
    }

    removeImage(): void {
        this.changeExample.images.pop()    
    }

    getUrlTitle(title: string) {
        return title.toLowerCase()
            .replace(new RegExp(' ', 'g'), '-')
            .replace(new RegExp('---', 'g'), '-');
    }

    private getAsyncImages(): Observable<NgxGalleryImage[]> {
        return Observable.of(this.getImages()).delay(5000);
    }

    private getImages(description: boolean = false, randomCount: boolean = false): NgxGalleryImage[] {
        let images = new Array<NgxGalleryImage>();

        let indexes = this.randomizeArray([1, 2, 3, 4, 5, 6, 7, 8]);

        if (randomCount) {
            indexes = indexes.slice(0, this.getRandomInt(1, 4));
        }

        indexes.map(i => images.push(this.getImage(i, description)));

        return images;
    }

    private getImage(index: number, description: boolean): NgxGalleryImage {
        return {
            small: 'assets/img/' + index + '-small.jpeg',
            medium: 'assets/img/' + index + '-medium.jpeg',
            big: 'assets/img/' + index + '-big.jpeg',
            description: description ? this.getRandomDescription() : ''
        }
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
