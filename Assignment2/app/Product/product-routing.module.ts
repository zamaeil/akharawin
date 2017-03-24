/**
 * Created by akharawinmahamud on 3/23/2017 AD.
 */
import {Routes, RouterModule} from "@angular/router";
import {InformationComponent} from "./information/information.component";
import {infoListComponent} from "./infoList/infoList.component";
import {ProductComponent} from "./add/Product.component";
import {FileNotFoundComponent} from "../filenotfound/file-not-found.component";
import {NgModule} from "@angular/core";
/**
 * Created by CAMT on 2/17/2017.
 */
const productRoot: Routes = [{
    path: 'info', component:InformationComponent,


},
    {path: 'add', component:ProductComponent},
    {path: 'list', component: infoListComponent},
    {
        path: '',
        redirectTo: '/add',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(productRoot)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductRoutingModule {

}