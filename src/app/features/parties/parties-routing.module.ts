import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListPartiesComponent } from './pages/list-parties/list-parties.component'

const routes: Routes = [
    {
        path: '',
        component: ListPartiesComponent,
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PartiesRoutingModule {}
