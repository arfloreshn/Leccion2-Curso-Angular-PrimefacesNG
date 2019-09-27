import { Component, OnInit } from '@angular/core';
import {Message, MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  activeIndex: number = 0;
  msgs: Message[] = [];
  private items: MenuItem[];

  ngOnInit() {
    this.items = [
      { label: 'Login',routerLink: ['/login']},
      { label: 'Registro', routerLink: ['/registro']},
      { label: 'Documentación', icon: 'fa-book', url:'https://www.primefaces.org/documentation/'}
    ];
  }

  onChangeStep(label: string) {
      this.msgs.length = 0;
      this.msgs.push({severity: 'info', summary: label});
  }

}
