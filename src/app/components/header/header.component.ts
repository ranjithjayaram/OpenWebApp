import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  scrolled:boolean= false;
  ngOnInit(): void {

  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(scrollOffset> 50)
    {
      this.scrolled= true;
    } else{
      this.scrolled= false;
    }
  }
}
