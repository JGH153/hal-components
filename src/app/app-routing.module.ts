import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HddStyleDocComponent } from './hdd-style-doc/hdd-style-doc.component';
import { ShellComponent } from './shell/shell.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Pages } from './shared/models/pages.enum';
import { SvgDocComponent } from './docs-pages/svg-doc/svg-doc.component';
import { PopupGlobalDocComponent } from './docs-pages/popup-global-doc/popup-global-doc.component';
import { BroadcastHandlerDocComponent } from './docs-pages/broadcast-handler-doc/broadcast-handler-doc.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: Pages.Welcome,
        pathMatch: 'full'
      },
      {
        path: Pages.Welcome,
        component: WelcomeComponent,
        pathMatch: 'full'
      },
      {
        path: Pages.Hdd,
        component: HddStyleDocComponent
      },
      {
        path: Pages.SvgDoc,
        component: SvgDocComponent
      },
      {
        path: Pages.PopupGlobalDoc,
        component: PopupGlobalDocComponent
      },
      {
        path: Pages.BroadcastHandler,
        component: BroadcastHandlerDocComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
