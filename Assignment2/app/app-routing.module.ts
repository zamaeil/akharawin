/**
 * Created by akharawinmahamud on 3/23/2017 AD.
 */
import {Routes, RouterModule} from "@angular/router";
import {InformationComponent} from "./Product/information/information.component";
import {infoListComponent} from "./Product/infoList/infoList.component";
import {ProductComponent} from "./Product/add/Product.component";
import {FileNotFoundComponent} from "./filenotfound/file-not-found.component";
import {NgModule} from "@angular/core";

/**
 * Created by CAMT on 2/17/2017.
 */
const appRoutes: Routes = [
    {path: '**', component: FileNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
