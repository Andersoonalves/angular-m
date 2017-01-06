import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';

import { EntityTypeDetailsComponent } from './widgets/router/entitytype.details.component';
import { HomeComponent } from './widgets/router/home.component';
import { PageNotFoundComponent } from './not-found.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':entitytypename', component: EntityTypeDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
      HomeComponent,
      EntityTypeDetailsComponent,
      PageNotFoundComponent
  ],
  exports: [
    RouterModule,
    HomeComponent,
    EntityTypeDetailsComponent,
    PageNotFoundComponent
  ]
})
export class AppRoutingModule {}
