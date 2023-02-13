import { NgModule } from "@angular/core";
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {TableModule} from 'primeng/table';
import {SidebarModule} from 'primeng/sidebar';
import {ToastModule} from 'primeng/toast';
import {TooltipModule} from 'primeng/tooltip';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {InputSwitchModule} from 'primeng/inputswitch';
import {CarouselModule} from 'primeng/carousel';
import {CardModule} from 'primeng/card';
import {StepsModule} from 'primeng/steps';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';



@NgModule({
    exports: [CheckboxModule,AccordionModule,TabViewModule,InputTextareaModule,CardModule,StepsModule,CarouselModule,DropdownModule,InputSwitchModule,TieredMenuModule,InputTextModule,ButtonModule,RippleModule,TableModule,SidebarModule,ToastModule,TooltipModule]
})
export class PrimengModule { }