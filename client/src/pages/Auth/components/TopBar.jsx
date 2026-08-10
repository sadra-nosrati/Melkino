function TopBar({ mode }) {
  const isLogin = mode === "login";

  return (
    <>
      <h1 className="text-center text-2xl tablet-landscape:text-3xl font-bold text-theme-strong">
        {isLogin ? "ورود" : "ثبت‌ نام"}
      </h1>

      <p className="mt-3 text-center text-sm text-theme-soft leading-7">
        {isLogin
          ? "برای ورود اطلاعات خود را وارد کنید"
          : "برای ایجاد حساب اطلاعات خود را وارد کنید"}
      </p>
    </>
  );
}

export default TopBar;
