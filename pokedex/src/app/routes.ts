import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Homepage',
    },
    {
      path: 'details',
      component: DetailsComponent,
      title: 'Pokemon Details',
    },
  ];
  
  export default routeConfig;