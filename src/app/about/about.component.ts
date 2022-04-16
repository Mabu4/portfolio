import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onIntersectionFlyLeft({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'flyInLeft': 'inactive');
  }

  onIntersectionFlyLeftLater({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'flyInLeftLater': 'inactive');
  }

  onIntersectionFlyRight({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'flyInRight': 'inactive');
  }

  onIntersectionFlyRightLater({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'flyInRightLater': 'inactive');
  }


}
