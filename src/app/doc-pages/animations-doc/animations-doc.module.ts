import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsDocComponent } from './animations-doc.component';
import { DocImportLineModule } from 'src/app/shared/doc-import-line/doc-import-line.module';
import { CodeHighlighterModule } from 'src/app/shared/code-highlighter/code-highlighter.module';
import { DocListModule } from 'src/app/shared/doc-list/doc-list.module';
import { DocApiTableModule } from 'src/app/shared/doc-api-table/doc-api-table.module';
import { AnimationsExampleModule } from './animations-example/animations-example.module';

@NgModule({
  imports: [
    CommonModule,
    DocImportLineModule,
    CodeHighlighterModule,
    DocListModule,
    DocApiTableModule,
    AnimationsExampleModule
  ],
  declarations: [AnimationsDocComponent],
  exports: [AnimationsDocComponent]
})
export class AnimationsDocModule { }
