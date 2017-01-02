import { Component, ComponentRef,ViewChild,ViewContainerRef}   from '@angular/core';
import { AfterViewInit, OnInit, OnDestroy}          from '@angular/core';
import { OnChanges, SimpleChange, ComponentFactory} from '@angular/core';

import { DynamicTypeBuilder } from './type.builder';
import { DynamicTemplateBuilder }  from './template.builder';

import { EntityType } from './entity.type';


@Component({
  selector: 'foreach-entity-type',
  template: `
<div>
  Check/uncheck to use PLAIN vs BOLD:
  <input type="checkbox" #bold (click)="refreshContent(bold.checked)" /><hr />
  <div #dynamicContentPlaceHolder></div>
</div>
`,
})
export class ForeachEntityTypeComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit { 

    // reference for a <div> with #dynamicContentPlaceHolder
    @ViewChild('dynamicContentPlaceHolder', {read: ViewContainerRef}) 
    protected dynamicComponentTarget: ViewContainerRef;

    // this will be reference to dynamic content - to be able to destroy it
    protected componentRefs : Array<ComponentRef<any>> = [];
    
    // until ngAfterViewInit, we cannot start (firstly) to process dynamic stuff
    protected wasViewInitialized = false;
    
    // example entity ... to be recieved from other app parts
    // this is kind of candiate for @Input
    protected entitytypes = [
        new EntityType('Customer'),
        new EntityType('Product')
    ];

    
    constructor(
      protected typeBuilder: DynamicTypeBuilder,
      protected templateBuilder: DynamicTemplateBuilder
    ) {}
    

    protected refreshContent(useBold: boolean = false){
      this.destroyCurrentComponentRefs();
      
      this.entitytypes.forEach( (entityType) => {
        var template = this.templateBuilder.prepareTemplate(entityType, useBold);

        this.typeBuilder
          .createComponentFactory(template)
          .then((factory: ComponentFactory<any>) => {
            let componentRef = 
              this.dynamicComponentTarget.createComponent(factory);
            this.componentRefs.push(componentRef);
            let component = componentRef.instance;
            component.entitytype = entityType;
          });
        });   
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
    public ngAfterViewInit(): void
    {
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
