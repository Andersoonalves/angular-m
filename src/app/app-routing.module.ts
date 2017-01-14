import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';

import { EntityTypeDetailsComponent } from './widgets/entitytype.details.component';
import { CreateEntityTypeComponent } from './widgets/create.entitytype.component';
import { HomeComponent } from './widgets/router/home.component';
import { PageNotFoundComponent } from './not-found.component';
import { WidgetModule } from './widgets/widget.module';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':entitytypename', component: EntityTypeDetailsComponent },
  { path: ':entitytypename/new', component: CreateEntityTypeComponent },
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
