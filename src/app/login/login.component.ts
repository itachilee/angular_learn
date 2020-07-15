import {Component, Inject, OnInit} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // 在providers中配置AuthService
  providers: []
})
export class LoginComponent implements OnInit {

  // 在构造函数中将AuthService示例注入到成员变量service中
  // 而且我们不需要显式声明成员变量service了
  constructor(@Inject('auth') private service) { }
  userName = '';
  passWord = '';
  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onClick() {

    console.log(this.service.loginWithCredentials(this.userName, this.passWord));
  }
}
