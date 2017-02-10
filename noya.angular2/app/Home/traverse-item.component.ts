﻿import { Component, OnInit, Input, animate, state, style, transition, trigger, AfterViewInit, AfterViewChecked } from '@angular/core';
import { TraverseItem, DataRequest, Language, Message, MessageRequest, MessageResponse, DataError, Person } from '../dal/models'

import { DataService, CacheManager } from '../services/services'
@Component({
    selector: 'traverse-item',
    moduleId: module.id,
    templateUrl: './traverse-item.component.html',
    styleUrls: ['./traverse-item.component.css'],

    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate('1s')
            ]),
            transition('* => void', [
                animate('1s', style({ transform: 'translateX(100%)' }))
            ])
        ]),
        trigger('modalState', [
            state('block', style({ opacity: 1, })),
            state('none', style({ opacity: 0, })),
            //transition('none <=> block', animate(1000, style({ opcaity: 0 }))),
            //transition('active => inactive', animate(1000, style({ transform: 'rotate(720deg)' })))
        ]),
        trigger('contentImageState', [
            state('active', style({ opacity: 1 })),
            state('inactive', style({ opacity: 0 })),
            transition('active => inactive', [
                style({ opacity: 1 }),
                animate('1s')
            ]),
            transition('inactive => active', [
                animate('1s', style({ opacity: 0 }), )
            ])
        ]),
    ]
})
export class TraverseItemComponent implements OnInit {
    isCollapsed: boolean;
    @Input() traverseItem: TraverseItem;
    person: Person = { Email: '', Name: '' };
    constructor(private dataService: DataService) { }
    ngOnInit() {
        this.message = { Content: '', Date: new Date(), IP: '', Sender: { Email: this.person.Email, Name: this.person.Name } };
    }

    fixCardTextHeight(img: HTMLDivElement, content: HTMLDivElement) {
      
        let l = img.clientHeight-25;
        $(content).height(`${l}px`);
    }
    contentImageState: string = 'active';
    isImageMode: boolean = true;
    toggleImageMode() {
        this.isImageMode = !this.isImageMode
        this.contentImageState = this.isImageMode ? 'active' : 'inactive';
    }

    displaySubmitError: boolean;
    isSubmitting: boolean;
    submitted: boolean;
    message: Message;

    modalState: string = 'none';

    public toggleModalState(state: string): void {
        //console.log(this.modalState);
        this.modalState = state;
        //console.log(this.modalState);

    }



    logMe(event) {
        //console.log(event);
    }



    onSubmit() {
        //console.log(this.message);
        this.isSubmitting = true;
        var req: MessageRequest = { Message: this.message, Language: Language.Hebrew };
        this.dataService.ConnectToApiData
            (req, 'api/Data/SendMessage')
            .subscribe
            (
            (res: MessageResponse) => {
                this.submitted = true;
                this.isSubmitting = false;
            },
            (err: DataError) => {
                this.displaySubmitError = true;
                this.isSubmitting = false;
            }
            )
    }
}