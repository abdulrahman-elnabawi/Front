import { Component, Input } from "@angular/core";



@Component({
    selector :'app-property-card',
    templateUrl : 'property.component.html',
    styleUrls : ['property.component.html']

})
export class propertycardcomponent{
@Input() proberty :any

}