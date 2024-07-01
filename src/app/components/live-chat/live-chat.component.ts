import { Component } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

interface Message {
  text: string;
  sentBy: 'user' | 'support';
}

@Component({
  selector: 'app-live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css'],
})
export class LiveChatComponent {
  messages: Message[] = [];
  newMessage: string = '';
  currentTheme: string = 'light-theme';

  constructor(private themeService: ThemeService) {}
  ngOnInit(): void {
    this.themeService.theme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      const userMessage: Message = { text: this.newMessage, sentBy: 'user' };
      this.messages.push(userMessage);
      this.newMessage = '';

      setTimeout(() => {
        this.newMessage = 'No puedo ayudarte mucho solo soy un demo';
        const supportMesaage: Message = {
          text: 'Soporte: ' + this.newMessage,
          sentBy: 'support',
        };
        this.messages.push(supportMesaage);
        this.newMessage = '';
      }, 1000);
    }
  }
}
