import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddIdeaComponent } from './add-idea/add-idea.component';
import { BrowsePostComponent } from './browse-post/browse-post.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'add-idea',
    component: AddIdeaComponent
  },
  {
    path: 'browse-post/:id',
    component: BrowsePostComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
