import { Component, OnInit, Renderer2 } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{

  openSidebar: any = true;
  menuSidebar : any;

  constructor(public dashboardS:DashboardService) { }

  ngOnInit() {
    this.dashBoardMenus();
    console.log("sid",this.menuSidebar);
  }
  showSubmenu(itemEl: HTMLElement) {
    console.log("itemEl",itemEl);
    itemEl.classList.toggle("showMenu");
  }

  dashBoardMenus(){
    this.dashboardS.getDashboardMenuJson()
    .subscribe(res => {
      this.menuSidebar = res.menuSidebar;
      console.log("menu::",this.menuSidebar);
    })
  }
}
