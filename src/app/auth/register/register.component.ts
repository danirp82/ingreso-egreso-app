import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit, OnDestroy {

  public cargando: boolean;
  private subscription: Subscription;

  constructor( public authService: AuthService,
               private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select('ui')
      .subscribe( ui => {
        this.cargando = ui.isLoading;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit( data: any ) {
    this.authService.crearUsuario( data.nombre, data.email, data.password );
  }

}
