import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onIntersectionFlyRight({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'flyInRight': '');
  }

  onIntersectionFlyLeft({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'flyInLeft': '');
  }

  onIntersection({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'becomeVisibleLighter': '');
  }

}
