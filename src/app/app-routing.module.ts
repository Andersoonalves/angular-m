import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';

import { EntityListingComponent } from './widgets/entity.listing.component';
import { EntityShowComponent } from './widgets/entity.show.component';
import { CreateEntityTypeComponent } from './widgets/create.entitytype.component';
import { HomeComponent } from './widgets/router/home.component';
import { PageNotFoundComponent } from './not-found.component';
import { WidgetModule } from './widgets/widget.module';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':entitytypename', component: EntityListingComponent },
  { path: ':entitytypename/new', component: CreateEntityTypeComponent },
  { path: ':entitytypename/:key', component: EntityShowComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    WidgetModule
  ],
  declarations: [
      HomeComponent,
      PageNotFoundComponent
  ],
  exports: [
    RouterModule,
    HomeComponent,
    PageNotFoundComponent
  ]
})
export class AppRoutingModule {}
