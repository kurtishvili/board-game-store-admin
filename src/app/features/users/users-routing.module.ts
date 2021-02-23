import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { UserDatailsComponent } from './user-datails/user-datails.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
    { path: '', component: UsersComponent },
    { path: 'details/:userId', component: UserDatailsComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {

}