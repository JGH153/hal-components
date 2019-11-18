import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HddStyleDocComponent } from './hdd-style-doc/hdd-style-doc.component';
import { HttpClientModule } from '@angular/common/http';
import { ShellModule } from './shell/shell.module';
import { WelcomeModule } from './welcome/welcome.module';
import { SvgDocModule } from './docs-pages/svg-doc/svg-doc.module';
import { PopupGlobalDocModule } from './docs-pages/popup-global-doc/popup-global-doc.module';
import { PopupConnectedDocModule } from './docs-pages/popup-connected-doc/popup-connected-doc.module';
import { BroadcastHandlerDocModule } from './docs-pages/broadcast-handler-doc/broadcast-handler-doc.module';
import { DividerDocModule } from './docs-pages/divider-doc/divider-doc.module';
import { ClosableRowDocModule } from './docs-pages/closable-row-doc/closable-row-doc.module';
import { BoolToTextDocModule } from './docs-pages/bool-to-text-doc/bool-to-text-doc.module';
import { ResizerDocModule } from './docs-pages/resizer-doc/resizer-doc.module';
import { AppShellDocModule } from './docs-pages/app-shell-doc/app-shell-doc.module';
import { StatusMarkDocModule } from './docs-pages/status-mark-doc/status-mark-doc.module';
import { TableViewerDefaultDocModule } from './docs-pages/table-viewer-default-doc/table-viewer-default-doc.module';

@NgModule({
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ShellModule,
      WelcomeModule,
      SvgDocModule,
      PopupGlobalDocModule,
      PopupConnectedDocModule,
      BroadcastHandlerDocModule,
      DividerDocModule,
      AppShellDocModule,
      ClosableRowDocModule,
      BoolToTextDocModule,
      ResizerDocModule,
      StatusMarkDocModule,
      TableViewerDefaultDocModule
   ],
   declarations: [
      AppComponent,
      HddStyleDocComponent,
   ],
   providers: [
      {provide: LOCALE_ID, useValue: 'nb' }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
