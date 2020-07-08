import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { AdviceComponent } from './advice/advice.component';
import { GetAdviceService } from './getAdvice.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
   declarations: [
      AppComponent,
      AdviceComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule,
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
   ],
   providers: [GetAdviceService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
