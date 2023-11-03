import { Component, OnInit, Input, HostListener } from '@angular/core';
import { designerData } from './designer-data';

@Component({
  selector: 'app-section-designer',
  templateUrl: './section-designer.component.html',
  styleUrls: ['./section-designer.component.css'],
})
export class SectionDesignerComponent implements OnInit {
  @Input() designers = designerData;
  @Input() indicators = true;
  @Input() controls = true;
  selectedIndex = 0;

  //Swipe Detector
  defaultTouch = { x: 0, y: 0, time: 0 };
  @HostListener('touchstart', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('touchcancel', ['$event'])
  ngOnInit(): void {
    this.handleTouch(event);
  }

  selectDesigner(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.designers.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if (this.selectedIndex === this.designers.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  //Swipe
  handleTouch(event: any) {
    let touch = event.touches[0] || event.changedTouches[0];

    // check the events
    if (event.type === 'touchstart') {
      this.defaultTouch.x = touch.pageX;
      this.defaultTouch.y = touch.pageY;
      this.defaultTouch.time = event.timeStamp;
    } else if (event.type === 'touchend') {
      let deltaX = touch.pageX - this.defaultTouch.x;
      let deltaY = touch.pageY - this.defaultTouch.y;
      let deltaTime = event.timeStamp - this.defaultTouch.time;

      // simulte a swipe -> less than 500 ms and more than 60 px
      if (deltaTime < 1000) {
        if (Math.abs(deltaX) > 60) {
          if (deltaX > 0) {
            this.doSwipeRight(event);
          } else {
            this.doSwipeLeft(event);
          }
        }

        //SWIPE UP AND DOWN
        // if (Math.abs(deltaY) > 60) {
        //   // delta y is at least 60 pixels
        //   if (deltaY > 0) {
        //     this.doSwipeDown(event);
        //   } else {
        //     this.doSwipeUp(event);
        //   }
        // }
      }
    }
  }

  doSwipeLeft(event: any) {
    this.onNextClick();
  }

  doSwipeRight(event: any) {
    this.onPrevClick();
  }
}
