import { Component, Input, ComponentRef } from '@angular/core';
import { AfterViewInit, OnInit, OnDestroy }          from '@angular/core';
import { OnChanges, SimpleChange } from '@angular/core';

import { EntityType } from './entity.type';
import { MetadataService } from './metadata.service';


export class AbstractPortComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {

  @Input() port: string;

  // this will be reference to dynamic content - to be able to destroy it
  protected componentRefs: Array<ComponentRef<any>> = [];

  // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
  protected wasViewInitialized = false;


  constructor(protected metadata: MetadataService) {}


  public refreshContent() {
    this.destroyCurrentComponentRefs();
  }

  private destroyCurrentComponentRefs() {
    this.componentRefs.forEach( (componentRef) => {
      componentRef.destroy();
    });
    this.componentRefs = [];
   }

    public ngOnInit () {}

    public ngAfterViewInit(): void {
        this.wasViewInitialized = true;
    }

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
