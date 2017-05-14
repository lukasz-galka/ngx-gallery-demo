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
    selector: 'app-custom-demo',
    templateUrl: './custom-demo.component.html'
})
export class CustomDemoComponent implements OnInit {

    examples: Example[];

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
            new Example('Responsive 1', this.getImages(), [
                {
                    "previewFullscreen": true,
                    "imageArrowsAutoHide": true,
                },
                {
                    "breakpoint": 500,
                    "width": "300px",
                    "height": "600px",
                    "thumbnailsColumns": 5
                },
                {
                    "breakpoint": 300,
                    "width": "100%",
                    "height": "800px",
                    "thumbnailsColumns": 4
                }])
        )
    }

    getUrlTitle(title: string) {
        return title.toLowerCase()
            .replace(new RegExp(' ', 'g'), '-')
            .replace(new RegExp('---', 'g'), '-');
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
