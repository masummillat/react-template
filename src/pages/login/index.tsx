import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import VolumeUpIcon from "@assets/images/icons/VolumeUp.svg?react";
import GoogleIcon from "@assets/images/icons/Google.svg?react";
import AppleIcon from "@assets/images/icons/Apple.svg?react";
import CustomSignupLoginForm from "./CustomSignupLoginForm";

const CustomSignupForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [isWithEmail, setIsWithEmail] = useState<boolean>(false);

  console.log(isAuthenticated);
  return (
    <div className="bg-[#E4EDE9] p-4 h-full overflow-y-auto">
      <div className="container mx-auto flex h-full justify-center items-center ">
        <div className=" my-36 flex flex-col justify-center items-center border py-12 px-8 rounded-2xl bg-white sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/3 relative">
          <div className="absolute top-1/2 right-0 translate-x-[9rem] -translate-y-1/2 w-48 h-48 z-10 bg-blue-300 rounded-full filter blur-3xl opacity-50"></div>
          <h2 className="text-[2rem] leading-[2.4rem] tracking-tighter mb-4">
            {isLogin ? "Sign In to Your Account" : "Sign up for an account"}
          </h2>
          <p className="text-center mb-4">Get started in just a few steps</p>

          <div className="mt-4 grid gap-4 w-full">
            <div className="flex items-center gap-4">
              <button
                className="h-[3.5rem] gap-2  px-6 flex-1 flex justify-center items-center text-base tracking-tight border border-[#CCD0D0] rounded-xl w-full"
                onClick={async () => {
                  const res = await loginWithRedirect({
                    authorizationParams: {
                      connection: "google-oauth2",
                      display: "page",
                      screen_hint: isLogin ? "login" : "signup",
                    },
                  });
                  console.log(res);
                }}
              >
                <GoogleIcon />
                Sign Up with Google
              </button>
              <VolumeUpIcon width={24} height={24} />
            </div>
            <div className="flex items-center gap-4">
              <button
                className="h-[3.5rem]  gap-2 px-6 flex-1 flex justify-center items-center text-base tracking-tight border border-[#CCD0D0] rounded-xl w-full"
                onClick={async () =>
                  await loginWithRedirect({
                    authorizationParams: {
                      connection: "apple",
                      display: "page",
                      screen_hint: "signup",
                    },
                  })
                }
              >
                <AppleIcon /> Sign Up with Apple
              </button>
              <VolumeUpIcon width={24} height={24} />
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsWithEmail(!isWithEmail)}
                className="h-[3.5rem]  gap-2 px-6 flex-1 flex justify-center items-center text-base tracking-tight border border-[#CCD0D0] rounded-xl w-full"
              >
                Sign Up with Email
              </button>
              <VolumeUpIcon width={24} height={24} />
            </div>
          </div>
          <CustomSignupLoginForm show={isWithEmail} />

          <p className="mt-4">
            Already have an account?{" "}
            <button onClick={() => setIsLogin(true)}>Log In</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomSignupForm;
