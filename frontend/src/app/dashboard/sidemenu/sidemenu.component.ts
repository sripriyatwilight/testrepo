import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DashboardService } from 'src/app/service/dashboard.service';


@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent {
  openSidebar: boolean = true;
  menuSidebar : any ;
  items!: MenuItem[];
  constructor (public dashboardS:DashboardService) {}

  ngOnInit() {

    this.dashboardS.getDashboardMenuJson()
    .subscribe(res => {
      this.menuSidebar = res.menuSidebar;
      console.log("menu::",this.menuSidebar);
    })



      // this.items = [
      //     {
      //         label: 'Dashboard',
      //         icon: 'pi pi-fw pi-file',
      //         items: [
      //             {
      //                 label: 'Users List',
      //                 icon: 'pi pi-fw pi-plus',
      //                 items: [
      //                     {
      //                         label: '    ',
      //                         icon: 'pi pi-fw pi-bookmark'
      //                     },
      //                     {
      //                         label: 'Video',
      //                         icon: 'pi pi-fw pi-video'
      //                     }
      //                 ]
      //             },
      //             {
      //                 label: 'Delete',
      //                 icon: 'pi pi-fw pi-trash'
      //             },
      //             {
      //                 label: 'Export',
      //                 icon: 'pi pi-fw pi-external-link'
      //             }
      //         ]
      //     },
      //     {
      //         label: 'Edit',
      //         icon: 'pi pi-fw pi-pencil',
      //         items: [
      //             {
      //                 label: 'Left',
      //                 icon: 'pi pi-fw pi-align-left'
      //             },
      //             {
      //                 label: 'Right',
      //                 icon: 'pi pi-fw pi-align-right'
      //             },
      //             {
      //                 label: 'Center',
      //                 icon: 'pi pi-fw pi-align-center'
      //             },
      //             {
      //                 label: 'Justify',
      //                 icon: 'pi pi-fw pi-align-justify'
      //             }
      //         ]
      //     },
      //     {
      //         label: 'Users',
      //         icon: 'pi pi-fw pi-user',
      //         items: [
      //             {
      //                 label: 'New',
      //                 icon: 'pi pi-fw pi-user-plus',
      //                 routerLink: '/auth/register'
      //             },
      //             {
      //                 label: 'Delete',
      //                 icon: 'pi pi-fw pi-user-minus'
      //             },
      //             {
      //                 label: 'Search',
      //                 icon: 'pi pi-fw pi-users',
      //                 items: [
      //                     {
      //                         label: 'Filter',
      //                         icon: 'pi pi-fw pi-filter',
      //                         items: [
      //                             {
      //                                 label: 'Print',
      //                                 icon: 'pi pi-fw pi-print'
      //                             }
      //                         ]
      //                     },
      //                     {
      //                         icon: 'pi pi-fw pi-bars',
      //                         label: 'List'
      //                     }
      //                 ]
      //             }
      //         ]
      //     },
      //     {
      //         label: 'Events',
      //         icon: 'pi pi-fw pi-calendar',
      //         items: [
      //             {
      //                 label: 'Edit',
      //                 icon: 'pi pi-fw pi-pencil',
      //                 items: [
      //                     {
      //                         label: 'Save',
      //                         icon: 'pi pi-fw pi-calendar-plus'
      //                     },
      //                     {
      //                         label: 'Delete',
      //                         icon: 'pi pi-fw pi-calendar-minus'
      //                     }
      //                 ]
      //             },
      //             {
      //                 label: 'Archieve',
      //                 icon: 'pi pi-fw pi-calendar-times',
      //                 items: [
      //                     {
      //                         label: 'Remove',
      //                         icon: 'pi pi-fw pi-calendar-minus'
      //                     }
      //                 ]
      //             }
      //         ]
      //     }
      // ];
  }

  showSubmenu(itemEl: HTMLElement) {
      itemEl.classList.toggle("showMenu");
    }
}

