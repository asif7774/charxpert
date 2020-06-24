import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

constructor(private router: Router, private toastr: ToastrService) { }
change_routing(routLink: string) {
  this.router.navigateByUrl(routLink);
}

show_toast(type, msg, timeout? ){
  // tslint:disable-next-line: triple-equals
  if (timeout == ''){
    timeout = 2000;
  }
  const ToastConfig = {
    closeButton: true,
    positionClass: 'toast-top-right',
    timeOut : timeout,
    preventDuplicates: true,
  };

  // tslint:disable-next-line: triple-equals
  if (type == 's'){
    this.toastr.success(msg,undefined, ToastConfig);
  } else if (type == 'w'){
    this.toastr.warning(msg,undefined, ToastConfig);
  } else if (type == 'i'){
    this.toastr.info(msg,undefined, ToastConfig);
  } else if (type == 'd' || type == 'e'){
    this.toastr.error(msg, undefined, ToastConfig);
  }
}

getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
      let cookies: any = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          let cookie:any = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === (name + '=')) {
              cookieValue = cookie.substring(name.length + 1);
              break;
          }
      }
  }
  return cookieValue;
}
// var csrftoken = getCookie('csrftoken');
}
