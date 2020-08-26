import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  { path: 'home', component: HomePage,
    children: [
      { path: 'feed', loadChildren: () => import('../pages/feed/feed.module').then(m => m.FeedPageModule ) },
      { path: 'messages', loadChildren: () => import('../pages/messages/messages.module').then( m => m.MessagesPageModule ) },
      // tslint:disable-next-line: max-line-length
      { path: 'notifications', loadChildren: () => import('../pages/notifications/notifications.module').then( m => m.NotificationsPageModule ) },
      { path: 'settings', loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule ) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
