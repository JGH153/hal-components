import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocListComponent } from './doc-list.component';
import { DocCardModule } from '../doc-card/doc-card.module';
import { DocSublistComponent } from './doc-sublist/doc-sublist.component';

@NgModule({
  imports: [
    CommonModule,
    DocCardModule,
  ],
  declarations: [DocListComponent, DocSublistComponent],
  exports: [DocListComponent]
})
export class DocListModule { }
