import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { CommonModule } from '@angular/common';

import { ListEntitiesComponent } from './widgets/list.entities.component';
import { ShowEntityComponent } from './widgets/show.entity.component';
import { CreateEntityComponent } from './widgets/create.entity.component';
import { EditEntityComponent } from './widgets/edit.entity.component';
import { HomeComponent } from './widgets/router/home.component';
import { PageNotFoundComponent } from './not-found.component';
import { WidgetModule } from './widgets/widget.module';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: ':entitytypename', component: ListEntitiesComponent },
  { path: ':entitytypename/new', component: CreateEntityComponent },
  { path: ':entitytypename/:key', component: ShowEntityComponent },
  { path: ':entitytypename/:key/edit', component: EditEntityComponent },
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
