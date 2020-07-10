import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +next.url[1].path
    if (isNaN(id) || id < 1) {
      alert('Invalid product id')
      this.router.navigate(['/products'])
      return false
    }
    return true

  }
  constructor(private router: Router) {

  }

}
