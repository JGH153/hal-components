import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { HighlightService } from 'src/app/core/services/highlight.service';

@Component({
  selector: 'hal-code-highlighter',
  templateUrl: './code-highlighter.component.html',
  styleUrls: ['./code-highlighter.component.scss']
})
export class CodeHighlighterComponent implements OnInit, AfterViewChecked {

  @Input() isTS = false;
  @Input() isHTML = false;
  @Input() isSCSS = false;
  @Input() isSHELL = false;

  @Input() code = '';

  highlighted = false;

  constructor(
    private highlightService: HighlightService
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
