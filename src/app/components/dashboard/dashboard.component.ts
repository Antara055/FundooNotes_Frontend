import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,  OnDestroy} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  isMenuOpen=true;
  contentMargin=240;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private route:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   }
  ngOnInit(): void {
  }
  onToolbarMenuToggle(){
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen)
    {
      this.contentMargin=100;
    }
    else{
      this.contentMargin=200;
    }
  }
  refreshButton() {
    window.location.reload();
  }
  Logout(){
    localStorage.removeItem('token');
    this.route.navigateByUrl('/sign-in')
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}


