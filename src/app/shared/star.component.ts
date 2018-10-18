import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }

    private newMethod(): string {
        return 'pm-star';
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}