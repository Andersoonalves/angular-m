import { Component, ComponentRef, Type } from '@angular/core';
import { AfterViewInit, OnInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { OnChanges, SimpleChange, ViewContainerRef } from '@angular/core';


export class AbstractPortDirective implements AfterViewInit, OnChanges, OnDestroy, OnInit {

  // this will be reference to dynamic content - to be able to destroy it
  protected componentRefs: Array<ComponentRef<any>> = [];

  // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
  protected wasViewInitialized = false;


  constructor(
    private componentTarget: ViewContainerRef,
    private compiler: ComponentFactoryResolver
  ) { }


  public refreshContent() {
    this.destroyCurrentComponentRefs();
  }

  private destroyCurrentComponentRefs() {
    this.componentRefs.forEach((componentRef) => {
      componentRef.destroy();
    });
    this.componentRefs = [];
  }

  createComponent(componentType: Type<any>): ComponentRef<any> {
    let factory = this.compiler.resolveComponentFactory(componentType);
    let componentRef = this.componentTarget.createComponent(factory);
    this.componentRefs.push(componentRef);
    return componentRef;
  }



  public ngOnInit() { }

  public ngAfterViewInit(): void {
    this.wasViewInitialized = true;
  }

  public ngOnChanges(changes: { [key: string]: SimpleChange }): void {
    if (this.wasViewInitialized) {
      return;
    }
    this.refreshContent();
  }

  public ngOnDestroy() {
    this.destroyCurrentComponentRefs();
  }

}
