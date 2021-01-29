import React, { useRef } from 'react';
import LoginStyles from './Login.module.css';
import logo from '../images/logo.svg';
import people from '../images/illust/people2.svg';
import shape from '../images/illust/vectorImage2.png';

function Login ({authservice}) {
    const email = useRef();
    const password = useRef();

    const snsLogin = (event) => {
        event.preventDefault();
        const sns = event.target.dataset.sns;
        authservice.loginWidthSNS(sns);
    }
    const emailLogin = (event) => {
        event.preventDefault();
        authservice.loginWidthEmail(email.current.value, password.current.value);
    }

  return (
      <div className={LoginStyles.background}>
          <section className={LoginStyles.modal}>
              <div className={LoginStyles.img}>
                  <img className={LoginStyles.logo} src={logo} alt="logo" />
                  <img className={LoginStyles.shape} src={shape} alt=""/>
                  <img className={LoginStyles.people} src={people} alt="" />
              </div>
              <div className={LoginStyles.login}>
                  <form action="">
                        <h1>로그인</h1>
                      <input type="text" placeholder="아이디를 입력해주세요." ref={email} />
                      <input type="password" name="" id="" placeholder="비밀번호를 입력해주세요." ref={password} />
                      <button onClick={emailLogin}>로그인</button>
                      <button className={LoginStyles.btnJoin}>회원가입</button>
                      <div className={LoginStyles.snsBox}>
                            <p>SNS계정 간편 로그인</p>
                            <button data-sns="Google" onClick={snsLogin}>구글</button>
                            <button data-sns="Github" onClick={snsLogin}>깃헙</button>
                      </div>
                  </form>
              </div>
              <button className={LoginStyles.btnClose}><span className="hidden">닫기</span></button>
          </section>
      </div>
  );
}

export default Login;