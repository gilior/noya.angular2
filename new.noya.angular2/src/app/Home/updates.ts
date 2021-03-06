﻿import {Component, OnInit} from '@angular/core'
import {Update, DataRequest, UpdatesRsponse, Language} from '../dal/models'
import {DataService} from '../services/services'
@Component({
    selector: 'noya-updates',
    templateUrl: './updates.html',

})

export class Updates implements OnInit {
    updates: Update[];
    constructor(private dataService: DataService) { }
    ngOnInit() {
        var req: DataRequest = { Language: Language.Hebrew }
        this.dataService.ConnectToApiData(req, 'GetUpdates').subscribe(
            (res: UpdatesRsponse) => this.updates = res.Updates

        )
    }
}
