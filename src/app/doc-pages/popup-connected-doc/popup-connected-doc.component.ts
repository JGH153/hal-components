import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-popup-connected-doc',
  templateUrl: './popup-connected-doc.component.html',
  styleUrls: ['./popup-connected-doc.component.scss']
})
export class PopupConnectedDocComponent implements OnInit {

  popupIsOpen = false;
  popupIsOpenRightAligned = false;
  popupTopIsOpen = false;
  popupTopIsOpenRightAligned = false;
  isTop = true;
  IsRight = true;

  apiTableRows: ApiTableRow[] = [
    { apiInput: '[isOpen]', description: 'Input for determening wether the popup is open or closed.' },
    { apiInput: '[origin]', description: 'Input for setting origin for what element the popup should connect to.' },
    {
      apiInput: '[small]',
      description:
        'Input for setting the popups size to small. If true the close button and padding will be removed to allow for more space.'
    },
    {
      apiInput: '[alignTop]',
      description: 'Optional input to change the position of the popup in relation to the element its connected with, on top or below. Options: true, false. Where false is default and aligns to below.'
    },
    {
      apiInput: '[alignRight]',
      description: 'Optional input to change the alignement of the popup in relation to the element its connected with. Options: true, false. Where false is default and aligns to the left.'
    },
    {
      apiInput: '(popupClose)',
      description:
        'Output that closes the popup if the a condition is set to true. The popup will close on default by clicking the close button.'
    },
  ];

  directiveRows: ApiTableRow[] = [
    { apiInput: 'CdkOverlayOrigin', description: 'Directive applied to an element to make it usable as an origin for an Overlay.' }
  ];

  // tslint:disable-next-line:max-line-length
  htmlCode = `<button
  type="button"
  (click)="popupIsOpen = !popupIsOpen"
  class="hdd-button" cdkOverlayOrigin
  #popupTrigger="cdkOverlayOrigin">
<span>Open connected popup</span>
</button>
<hal-popup-connected
  [isOpen]="popupIsOpen"
  [origin]="popupTrigger"
  (popupClose)="popupIsOpen = false"
  [alignTop]="isTop"
  [alignRight]="IsRight">
<hal-popup-connected-example></hal-popup-connected-example>
</hal-popup-connected>`;

  constructor() { }

  ngOnInit() {
  }

}
