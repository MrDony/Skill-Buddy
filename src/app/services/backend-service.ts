
import { Injectable } from '@angular/core';
import { _BACKEND_HOST } from './constants';

@Injectable()
export class BackendService{

  async postData(url:string, p_data:any) {

    const response = await fetch( _BACKEND_HOST + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(p_data)
    });
    console.log('Backedn ser: ',response)
    return response.json();
  }

}
