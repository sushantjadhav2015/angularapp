import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserCanDeactiveComponent } from './add-user-can-deactive/add-user-can-deactive.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedchangesGuard implements CanDeactivate<AddUserCanDeactiveComponent>  {

  
    canDeactivate(component: AddUserCanDeactiveComponent) {
      
     if(component.userName.dirty)
     {
       return window.confirm('You have some unsaved changes. Are you sure you want to navigate?')
     } else {
       true;
     }
    }  }
  

