import { Routes } from '@angular/router';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
    { path: 'users', component: ListUsersComponent },
    { path: 'users/:id', component: UserDetailsComponent }
];
