import { Component } from '@angular/core';
// We are importing the Component decorator from Angular core library to create a component.
// The Component decorator is used to define the metadata for the component, such as its selector, template, and styles.
// The Component decorator is a function that takes an object as an argument, which contains the metadata for the component.
// The object can contain properties such as selector, template, styles, and providers, among others.

@Component(
    {
        selector : 'app-header',
        standalone : false,
        templateUrl : './header.component.html',
        styleUrls : ['./header.component.css']
    }
)

export class HeaderComponent {

}