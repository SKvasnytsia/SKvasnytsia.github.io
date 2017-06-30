import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { Injectable } from '@angular/core'

import { CATEGORIES } from '../../components/models/categories'

@Injectable()
export class CategoryRouteActivator implements CanActivate {
        
    constructor(public router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const categoryExists = CATEGORIES.some(category => category.value.toLowerCase() === route.params['category'].toLowerCase())

        if (!categoryExists)
            this.router.navigate(['/404'])
        return categoryExists
    }
}