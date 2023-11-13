import { Component } from "@angular/core";



@Component({
    selector :'app-property-card',
    templateUrl : 'property.component.html',
    styleUrls : ['property.component.html']

})
export class propertycardcomponent{

    Property : any ={
        "Id":1,
        "Name":"abdo house",
        "Type":"House",
        "Price":12000

    }
}