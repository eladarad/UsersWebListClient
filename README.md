# Server Project

Welcome to the UserWebListClient Project! This project is a Node.js client application that provides a UI for managing users. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



## UML

 ____________________________________________________________
|                          Components                        |
|------------------------------------------------------------|
|                  UserListComponent                         |
|------------------------------------------------------------|
| - users: User[]                                            |
| - page: number                                             |
| - errorMessage: string                                     |
| + getUsers(page: number): void                             |
| + prevPage(): void                                         |
| + nextPage(): void                                         |
|                  UserDetailComponent                       |
|------------------------------------------------------------|
| - user: User                                               |
| - errorMessage: string                                     |
| + ngOnInit(): void                                         |
| + deleteUser(): void                                       |
|                  UserFormComponent                         |
|------------------------------------------------------------|
| - user: User                                               |
| - isEditMode: boolean                                      |
| - errorMessage: string                                     |
| + saveUser(): void                                         |
|____________________________________________________________|
                        |   
                        |   
                        v   
 ________________________________________________________________
|                        Services                                |
|----------------------------------------------------------------|
|                    UserService                                 |
|----------------------------------------------------------------|
| + getUsers(page: number): Promise<User[]>                      |
| + getUser(id: string): Promise<User>                           |
| + createUser(newUser: User): Promise<User>                     |
| + updateUser(id: string, updatedUserData: User): Promise<User> |
| + deleteUser(id: string): Promise<void>                        |
|________________________________________________________________|        
                        |   
                        |        
                        |        
 __________________________________________________
|                    HTTP Client                   |
|--------------------------------------------------|
|               HttpClientService                  |
|--------------------------------------------------|
| + get(url: string): Promise<any>                 |
| + post(url: string, data: any): Promise<any>     |
| + put(url: string, data: any): Promise<any>      |
| + delete(url: string): Promise<any>              |
|__________________________________________________|
                        |
                        |
                        |
 ___________________________________________________
|                    Models                         |
|---------------------------------------------------|
|                     User                          |
|---------------------------------------------------|
| - id: string                                      |
| - first_name: string                              |
| - last_name: string                               |
| - email: string                                   |
|___________________________________________________|
