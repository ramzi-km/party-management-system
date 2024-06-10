import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-loading-screen',
    templateUrl: './loading-screen.component.html',
    styleUrls: ['./loading-screen.component.scss'],
})
export class LoadingScreenComponent {
    @Input() iconWidth = 24

    private sizeClassMap: { [key: number]: string } = {
        2: 'w-2',
        4: 'w-4',
        6: 'w-6',
        8: 'w-8',
        10: 'w-10',
        12: 'w-12',
        14: 'w-14',
        16: 'w-16',
        20: 'w-20',
        24: 'w-24',
        28: 'w-28',
        32: 'w-32',
    }

    getWidthClass(): string {
        return this.sizeClassMap[this.iconWidth] || 'w-24'
    }
}
