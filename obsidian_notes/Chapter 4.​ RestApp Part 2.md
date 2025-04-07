==4_RestApp Part 2==

"In the previous chapter, we included the fantastic Bootstrap framework in our application, in the fastest way possible, that is, using CDNs. However, we have an alternative, and it is to use the node package manager to install bootstrap. In this chapter, we’ll learn how to use npm to install bootstrap. We’ll also build a simple contact form, the logic to perform CRUD operations on our users, a loading component to improve the user experience, and a pipe to handle the case of missing user profile images. Then you can decide which of these two alternatives is the most convenient." -Victor Hugo Garcia

---
*Start date: 9.3.2025*

Bootstrap  -*done*
AboutComponent -*done*
Forms: ContactComponent -*done*
Error Handling -*done*
Update a User -*done*
Adding a New User -*done*
Deleting a User -*done*
Loading -*done*
Pipes -*done*

---

Error Handling

RxJS, operators, pipe, catchError

Update user:
creating save and update methods. Applying pipe in method to catch errors.
using httpHeaders to get the data in to db from our form. 
httpOptions variable -> use this in the methods return, so define what kind of data is it use it send it.

---
Adding new user:

add new add user component: 
ng g c components/user/user-add --flat

In anything we do, we first always creat a component?
Constructor is inside class.

Again using ReactiveFormsModule instead of FormGroup in component import as in FormsGroup is not a standalone module, but rather a service. (Or I guess its a service from the ReactiveFormsModule, need to check it) As a note i can also use CommonModule to use the ngIf commands in my html, I think I can separately import these, but as in ReactiveFormsModule case I think the CommomnModule is like a collection of all the tools/services.

Structure of a component:
Imports-

Component-
-Imports

Class-
-Class variables
-Injections to constructor
-Class constructor
-Class methods

---

As a side note: writing all these by hand, and not having a automatic process to make the CRUD operations to code, is maybe simpler in ASP.Net as it generates all these if you so wish. But nevertheless good to write these also.

---
Deleting User

Traced a bug when declaring a variable to be used in the method for the url:

  deleteUser(user:User):Observable<User {

    const url=`${this.apiUrl}/${user.id}`;

 was using '' insted of `` in the const url section. This resulted in -> deletemethod worked but produced an error where user was not found, so in a sense i can delete this but no data which or what was deleted I think.

Loading:

Making a spinning loading logo in home screen.

icon set:
npm install --save-dev @fortawesome/fontawesome-free

Modified angular.json to include the style installed, the modified html.
Create the loading icon as a component:

ng g c components/shared/loading --style none

Creating the loading as a component then using loading boolean to determine if its true, when getusers is false, then display, as we get the method done then its true and the loading animation is removed.

Pipes
 We are creating a pipe that shows an error image instead of just showing the error in console.

Considering the security aspect when using the bindig [] in img tag. especially the built error handling when image is 404, now we have a pipe, its logic goes quite complex if the image src gives back null or nothing at all. I can have the logic in the pipe. This is secure. I can also utilize browser onerror event, this raises questions about security. Someone could possible alter the error event by injecting malicious code? In the oneerror i can have it to fall back to a method in the component, still exposes in the code the logic or path.

The best way to use logic is in the pipe, concise clear. With modern tools like Ai new devs onboarded can decipher parts of the code faster even if there would be something highly complex.

!When making changes to angular.json, you must restart the server to see changes.
CTRL + C -> ng serve.

Solution to a long problem, no images loaded. Heres how: src/assets/img/user.jpg, previously no loading just 404, go to angular.json and add under architect {...} and test{...} the following:
  			
		"assets": [
              {
                "glob": "**/*",        
                "input": "public"   
              },
                "src/assets"
            ]

---

Summary
"In this chapter, we learned how to use npm to install Bootstrap. We also built a simple contact form, the logic to perform CRUD operations on our users, a loading component to improve the user experience, and a pipe to handle the case of missing user profile images. All this knowledge is a valuable piece that we can incorporate into projects of any complexity. And we have barely scratched the surface. In the next chapter, we will begin building a much more complex application." -Victor Hugo Garcia