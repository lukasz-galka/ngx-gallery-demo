import { NgxGalleryOptions, NgxGalleryImage } from 'C:/Github/ngx-gallery';

export class Example {
    title: string;
    images: NgxGalleryImage[];
    options: NgxGalleryOptions[];

    constructor(title: string, images: NgxGalleryImage[], options: NgxGalleryOptions[]) {
        this.title = title;
        this.images = images;
        this.options = options;
    }
}
