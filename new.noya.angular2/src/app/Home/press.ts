﻿import {Component, OnInit} from '@angular/core'
import * as dal from '../dal/models'
import * as services from '../services/services'
@Component({
    selector: 'noya-press',
    templateUrl: './press.html',

})

export class Press implements OnInit {
    pressItems: dal.PressItem[];
    constructor(private dataService: services.DataService) { }
    ngOnInit() {
        var req: dal.DataRequest = { Language: dal.Language.Hebrew }
        this.dataService.ConnectToApiData(req, 'GetPress').subscribe(
            (res: dal.PressResponse) => this.pressItems = res.PressItems

        )
    }
}
