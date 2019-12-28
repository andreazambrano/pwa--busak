import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activityTracker'
})
export class ActivityTrackerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
