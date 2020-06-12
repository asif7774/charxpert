import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignupModalComponent } from 'src/app/common-component/login-signup-modal/login-signup-modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
      CommonModule,
      FormsModule
  ],
  declarations: [
    LoginSignupModalComponent
  ],
  exports: [
    LoginSignupModalComponent
  ]
})
export class SharedModule {}
