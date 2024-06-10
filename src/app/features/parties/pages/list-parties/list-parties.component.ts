import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subject, takeUntil } from 'rxjs'
import { IParty } from 'src/app/core/interfaces/party'
import { PartyService } from '../../services/party/party.service'
import { environment } from 'src/environments/environment'

@Component({
    selector: 'app-list-parties',
    templateUrl: './list-parties.component.html',
    styleUrls: ['./list-parties.component.scss'],
})
export class ListPartiesComponent implements OnInit, OnDestroy {
    private ngUnsubscribe$ = new Subject<void>()

    parties: IParty[] = []
    partiesLoading = false
    apiUrl = environment.API_URL

    constructor(private partyService: PartyService) {}

    ngOnInit(): void {
        this.partiesLoading = true
        this.partyService
            .getAllParties()
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe({
                next: (res) => {
                    this.parties = res
                    this.partiesLoading = false
                },
                error: (error) => {
                    console.log(error)
                    this.partiesLoading = false
                },
            })
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next()
        this.ngUnsubscribe$.complete()
    }
}
