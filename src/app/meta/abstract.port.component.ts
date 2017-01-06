import { Component, Input, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AfterViewInit, OnInit, OnDestroy }          from '@angular/core';
import { OnChanges, SimpleChange, ComponentFactory } from '@angular/core';

import { DynamicTypeBuilder } from './type.builder';
import { EntityType } from './entity.type';
import { MetadataService } from './metadata.service';


export class AbstractPortComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {

    @Input() port: string;

    // this will be reference to dynamic content - to be able to destroy it
    protected componentRefs: Array<ComponentRef<any>> = [];

    // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
    protected wasViewInitialized = false;


    constructor(
      protected typeBuilder: DynamicTypeBuilder,
      protected metadata: MetadataService
    ) {}


  public refreshContent() {
    this.destroyCurrentComponentRefs();
  }

  private destroyCurrentComponentRefs() {
    this.componentRefs.forEach( (componentRef) => {
      componentRef.destroy();
    });
    this.componentRefs = [];
   }

    /** IN CASE WE WANT TO RE/Gerante - we need cean up */

    public ngOnInit () {}

    // this is the best moment where to start to process dynamic stuff
    public ngAfterViewInit(): void {
        this.wasViewInitialized = true;
        this.refreshContent();
    }
    // wasViewInitialized is an IMPORTANT switch 
    // when this component would have its own changing @Input()
    // - then we have to wait till view is intialized - first OnChange is too soon
    public ngOnChanges(changes: {[key: string]: SimpleChange}): void {
        if (this.wasViewInitialized) {
            return;
        }
        this.refreshContent();
    }

  public ngOnDestroy() {
    this.destroyCurrentComponentRefs();
  }

}
