import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms'
///////models///////
import { BuyingItem, CATEGORIES } from '../../common/models/index'
import { DateCalculationHelper } from '../../common/index'
import { BudgetService, TranslationService, StatisticsCacheService, FILE_READER_TOKEN } from '../../services/index'

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'scanner',
    templateUrl: './scanner.html',
    styleUrls: ['./scanner.scss']
})

export class ScannerComponent implements OnInit {
    public goodsForm: FormGroup
    private key: string = 'addGoods'
    list = CATEGORIES
    category: any = {}
    title: string
    item:BuyingItem

    constructor(
            private router: Router,
            private route:ActivatedRoute, 
            private translateService: TranslationService,  
            private budgetService: BudgetService,
            private cacheService: StatisticsCacheService,
            @Inject(FILE_READER_TOKEN) private FileReader: any) {
        this.title = translateService.get(this.key)
        this.item = new BuyingItem('', new Date().getTime())
    }

    ngOnInit() {
        let activeCategory = this.route.snapshot.paramMap.get('category')
        if (activeCategory)
            this.category = CATEGORIES.find(c => c.value.toLowerCase() === activeCategory.toLowerCase()) || {}
        this.item.group = this.category.value       
   }

    saveBuyingItem() {
        debugger;
        this.budgetService.addItem(this.item).subscribe(res => {
            const item = res.item
            const {from, to} = DateCalculationHelper.getStartAndEndDatesPerMonth(new Date())
            this.cacheService.addOrUpdateCache([item], from, to, item.group, res.id)
            this.router.navigate([`/statistics/${item.group}`])
        })
        
    }

    onFileUpload($event) {
        if ($event.target.files && $event.target.files[0]) {
            const reader = this.FileReader,
                readerInstance = new reader()
            
            readerInstance.onload = (event) => {
                this.item.picture = event.target.result;
            }
            readerInstance.readAsDataURL($event.target.files[0]);
        }
    }
}
