import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

export class Example {
    title: string;
    images: NgxGalleryImage[];
    options: NgxGalleryOptions[];

    constructor(title: string, images: NgxGalleryImage[], options: NgxGalleryOptions[]) {
        this.title = title;
        this.images = images;
        this.options = options;

        if (this.options.length == 1) {
            this.options.push({
                breakpoint: 500,
                width: '300px',
                height: '300px',
                thumbnailsColumns: 3
            })
            this.options.push({
                breakpoint: 300,
                width: '100%',
                height: '200px',
                thumbnailsColumns: 2
            })
        }
    }
}
