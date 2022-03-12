import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public api: ApiService) { }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm.value);
    if (submittedForm.invalid) {
      return;
    }

    this.api.login(submittedForm.value).subscribe((res: any) =>  {
      if(res.status){
        localStorage.setItem('token', res.data.token);
      }
    });
    // this.store.dispatch(createCourse({course}));

  }
}
