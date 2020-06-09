<template>
  <div class="row login-reg">
    <div class="col-md-6 mx-auto p-0">
      <div class="card">
        <div class="login-box">
          <div class="login-snip">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
            <label for="tab-1" class="tab">ورود</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" />
            <label for="tab-2" class="tab">ثبت نام</label>
            <div class="login-space">
              <div class="login">
                <div class="group">
                  <label for="user" class="label">نام کاربری</label>
                  <input id="user" type="text" class="input" placeholder="نام کاربری خود را وارد کنید" />
                </div>
                <div class="group">
                  <label for="pass" class="label">رمزعبور</label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                    placeholder="رمزعبور خود را وارد کنید"
                  />
                </div>
                <div class="group">
                  <input id="check" type="checkbox" class="check" checked />
                  <label for="check">
                    <span class="icon"></span> مرا به خاطر بسپار
                  </label>
                </div>
                <div class="group">
                  <input type="submit" class="button" value="ورود" />
                </div>
                <div class="hr"></div>
                <div class="foot">
                  <a href="#">رمز خود را فراموش کرده اید؟</a>
                </div>
              </div>
              <div class="sign-up-form">
                <div class="group">
                  <label for="user" class="label">نام کاربری</label>
                  <input id="user" type="text" class="input" placeholder="نام کاربری خود را واردکنید" />
                </div>
                <div class="group">
                  <label for="pass" class="label">رمزعبور</label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                    placeholder="رمز عبور خود را وارد کنید."
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">تکرار رمزعبور</label>
                  <input
                    id="pass"
                    type="password"
                    class="input"
                    data-type="password"
                    placeholder="تکرار رمز عبور"
                  />
                </div>
                <div class="group">
                  <label for="pass" class="label">ایمیل</label>
                  <input id="pass" type="text" class="input" placeholder="ایمیل خود را وارد کنید." />
                </div>
                <div class="group">
                  <input type="submit" class="button" value="ثبت نام" />
                </div>
                <div class="hr"></div>
                <div class="foot">
                  <label for="tab-1">Already Member?</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    layout: "clean"
}
</script>