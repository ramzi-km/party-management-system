/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subject, takeUntil } from 'rxjs'
import { ActivatedRoute } from '@angular/router'
import { PartyService } from '../../services/party/party.service'
import { IParty } from 'src/app/core/interfaces/party.interface'

@Component({
    selector: 'app-party-details',
    templateUrl: './party-details.component.html',
    styleUrls: ['./party-details.component.scss'],
})
export class PartyDetailsComponent implements OnInit, OnDestroy {
    private ngUnsubscribe$ = new Subject<void>()

    partyId: string | null = null
    currTab = 'general'
    party!: IParty
    fetchingParty = false

    constructor(
        private partyService: PartyService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.fetchingParty = true
        this.partyId = this.route.snapshot.paramMap.get('partyId')
        this.partyService
            .getPartyById(this.partyId!)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe({
                next: (res) => {
                    this.party = res
                    this.fetchingParty = false
                },
                error: (err) => {
                    console.log(err)
                    this.fetchingParty = false
                },
            })
    }

    changeTab(tab: string) {
        this.currTab = tab
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next()
        this.ngUnsubscribe$.complete()
    }
}
