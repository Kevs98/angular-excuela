import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  items: MenuItem[];
  darkMode: boolean = false;
  sunIcon = 'pi pi-sun';
  moonIcon = 'pi pi-moon';
  selectOptions: any[] = [{ icon: 'pi pi-sun' }, { icon: 'pi pi-moon' }];

  constructor(private themeService: ThemeService) {
    this.items = [
      { label: 'Graficos', routerLink: '/graphics' },
      { label: 'Live Chat', routerLink: '/live-chat' },
      { label: 'Reproductor', routerLink: '/videoplayer' },
    ];
  }

  ngOnInit(): void {
    this.themeService.initializeTheme();
  }

  toggleTheme(event: any) {
    console.log(event.index);
    if (event.index === 0) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }

  getIcon(): string {
    return this.darkMode ? this.moonIcon : this.sunIcon;
  }

  getThemeClass(): string {
    return this.darkMode ? 'dark-mode' : 'light-mode';
  }
}
