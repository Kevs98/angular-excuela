import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GraphicsComponent } from './components/graphics/graphics.component';
import { LiveChatComponent } from './components/live-chat/live-chat.component';
import { VideoplayerComponent } from './components/videoplayer/videoplayer.component';

const routes: Routes = [
  { path: 'graphics', component: GraphicsComponent },
  { path: 'live-chat', component: LiveChatComponent },
  { path: 'videoplayer', component: VideoplayerComponent },
  { path: '', redirectTo: '/graphics', pathMatch: 'full' },
  { path: '**', redirectTo: '/graphics' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
