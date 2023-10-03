import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "@/components/giro/auth/login-form";
import useDarkMode from "@/hooks/useDarkMode";
import { ToastContainer } from "react-toastify";

// image import
// import Illustration from "@/assets/images/auth/ils1.svg";
import Illustration from "@/assets/images/auth/logo-2.png"
import LogoGiro from "@/assets/images/logo/edja.jpg"

const Login = () => {
  const [isDark] = useDarkMode();
  return (
    <>
      <ToastContainer />
      <div className="loginwrapper">
        <div className="lg-inner-column">
          <div className="left-column relative z-[1]">
            <div className="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
              <h4>
                Bienvenidos a <br />
                <span className="text-slate-800 dark:text-slate-400 font-bold">
                  EDJA N°4
                </span>
              </h4>
            </div>

            <div className="absolute left-0 2xl:bottom-[-60px] bottom-[-30px] h-full w-full z-[-1]">
              <img
                src={Illustration}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

          </div>
          <div className="right-column relative">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="auth-box h-full flex flex-col justify-center">
                <img src={LogoGiro} alt="Logo Giro" className="w-36 md:w-52 pb-6 inline-block mx-auto" />
                <div className="text-center 2xl:mb-10 mb-4">
                  <h4 className="font-medium">Iniciar Sesión</h4>
                  <div className="text-slate-500 text-base">
                    Completa los datos para ingresar al sistema
                  </div>
                </div>
                <LoginForm />
              </div>
              <div className="auth-footer text-center">
                Copyright &copy; <span>{(new Date().getFullYear())}</span>, Escuela Para Adultos EDJA N°4.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
