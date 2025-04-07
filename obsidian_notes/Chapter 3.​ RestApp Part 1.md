==3_ RestApp Part 1==

"In this chapter, we’ll learn how to generate a new project using angular-cli. We’ll create new components and a service to communicate with a rest API. As for the purely aesthetic aspect, we’ll include bootstrap in our application through CDNs." -Victor Hugo Garcia

---
*Start date: 7.3.2025*

Creating a New Project -*done*
	-app.module.ts
	-What We Will Be Building
	-Bootstrap
	-Components of Our Application
	-Navbar Component
	-Routing
	-Services
	-An Interface for Users
	-API

---

-npm install -g @angular/cli
error as I had 23.9.0 version of Node @ use.
used nvm to change to latest stable version
ng version didn't work from terminal, installed again, now no errors, and angular cli is installed.

---
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
-if the terminal doesnt allow you to run scripts, run the previous command in whatever folder you're currently in terminal

---
"ROUTING"

ng serve -o
ng serve boots the embedded server of Angular, making our application available at http://localhost:4200, but if we use the flag -o, our browser by default will open this address in a new tab (Figure 3-3).

when using this, the server is running and automatically updates any changes.
no need to compile. (tsc -w)

---
per the tutorial no app.module.ts file is found. This is due to angular shifting to standalone design as its more easier and simpler. when creating new app you can use .. 

ng new X --no-standalone

[javascript - Why doesn't App Module exist in Angular 17? - Stack Overflow](https://stackoverflow.com/questions/77454741/why-doesnt-app-module-exist-in-angular-17)

---

To use a created component i must include it in app.component.ts -> @Component decorator, in imports i can add my new component and it will automatically add the *import {X} from '.../'* to the top, this means it uses the class and imports it in this file, and in the original file i have the class and especifially the export class, the export gives the ability for other files to use the class.

[Anatomy of components • Angular](https://angular.dev/guide/components)

In the decorator of a component, i can import classes, as in in the case of navbar.component.ts i import the export of app.routes.ts AppRoutingModule(naming could be better).

When inside component, there is no import per say for the component in case, but is it just away that is left out, as in when using NgModule, it needs an import, or is it just because if i'm using foreign as in from elsewhere not the same name as the component, i must declare the import of it?

-By default, Angular components are _standalone_, meaning that you can directly add them to the `imports` array of other components.

Big Bug,
main.ts:6 RuntimeError: NG04007: The Router was provided more than once. This can happen if 'forRoot' is used outside of the root injector. Lazy loaded modules should use RouterModule.forChild() instead.

@NgModule({

    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule]

})

to->

@NgModule({

    imports: [RouterModule.forChild(routes)],

    exports: [RouterModule]

})

Routing works.

Ps. In the tutorial we use NgModule, this seems unnecessary as in this version of angular components are standalone, in this sense i can remove a lot of unnecessary imports. Wether this has some implications for security stays to be seen.

---
"SERVICES"

ng g s services/reqres

---

"API"

npm install angular-in-memory-web-api

Using # Angular in-memory-web-api

Problem: InMemoryAppModule is not working.
After two days the solution was that as Angular has evolved to version 19 single state modules are now :true.  That means that the tutorial that is not a single state tutorial means that there is some issues.

Reminder to self, if you want to mess around use copilot. It is (almost) useless.
Use google and Stack Overflow with good questions for the harder questions, okay some code snippet check maybe if its good to go or youre missing something..

Solution to the issue was:
[Issues with integrating HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService) in Angular Standalone Application - Stack Overflow](https://stackoverflow.com/questions/77469629/issues-with-integrating-httpclientinmemorywebapimodule-forrootinmemorydataservi)

*NgFor* when using the for loop for array of data, you must import the commomnmodule in the according component: use:
import:[],

NgFor working, now got mockupdata visible in page.

some styling, divs

ngIf

Completed Rest api part1
-next part installing bootstrap using npm

install bootstrap using npm
npm install bootstrap@4.6.0 --save

install jquery using npm
npm install jquery --save

install popper
npm install popper.js --save

Starting to create forms,
a simple whitespace error in <form[FormGroup]...

in imports of contact.component, we can use ReactiveFormsModule, this includes Formbuilder, FormGrouop and Validators, as in we dont need to use providers, as in the FormBuilder is a service not a module.

---

Summary
"In this chapter, we learned how to generate a new project using angular-cli. We created new components and a service to communicate with a rest API. As for the purely aesthetic aspect, we saw how to include bootstrap in our application, although to tell the truth we did it in a way that may not be suitable for all cases, such as through CDNs. In the next chapter, we will learn how to include bootstrap using npm, the node package manager, and we will continue to add functionality to our application." -Victor Hugo Garcia


