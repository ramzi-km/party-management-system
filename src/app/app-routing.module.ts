import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { authGuard } from './core/guards/auth-guard/auth.guard'

const routes: Routes = [
    {
        path: '',
        redirectTo: 'parties',
        pathMatch: 'full',
    },

    {
        path: 'parties',
        loadChildren: () =>
            import('./features/parties/parties.module').then(
                (m) => m.PartiesModule
            ),
        canActivate: [authGuard],
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./features/auth/auth.module').then((m) => m.AuthModule),
        canActivate: [authGuard],
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
