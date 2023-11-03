import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  collapsed: boolean = false;
  offsetFlag: boolean = true;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    if (window.scrollY > 0) this.collapsed = false;
  }
}
