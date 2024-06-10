import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { IParty } from 'src/app/core/interfaces/party'

@Injectable()
export class PartyService {
    private baseUrl = 'party/'
    constructor(private http: HttpClient) {}

    getAllParties() {
        return this.http.get<IParty[]>(this.baseUrl)
    }
}
