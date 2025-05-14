import { AfterViewInit, Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit{
  currentStatus : 'online' | 'offline' | 'unknown' = 'offline';
  // basically like an enum

  //private interval? : ReturnType<typeof setInterval>
  private destroyRef = inject(DestroyRef)

  constructor(){}
  ngOnInit() {
   const interval =  setInterval(() => {
      const rnd = Math.random(); // between 0 and 1
      console.log('Server status refreshed', rnd)
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(()=>{
      clearInterval(interval)
    })
  }
  ngAfterViewInit(){
    console.log("AFTER VIEW INIT")
  }

  // ngOnDestroy() {
  //   console.log(" Destroying the interval")
  //   clearTimeout(this.interval);
  // }

  // ngOnDestroy is old we have new the destroyRef
}
