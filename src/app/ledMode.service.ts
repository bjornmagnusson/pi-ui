import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ledModeService {
  private ledModeUrl = '/ledMode';

  constructor(private httpc: HttpClient) { }

  getLedMode() {
    return this.httpc.post(this.ledModeUrl, '')
                      .toPromise()
                      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
