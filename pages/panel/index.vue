<template>
    <form class="form form-panel" action="##" method="post" id="registrationForm">
                      
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                            <label for="last_name"><h4>نام خانوادگی</h4></label>
                              <input type="text" class="form-control" name="last_name" id="last_name" placeholder="اعتمادیان" title="enter your last name if any.">
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="first_name"><h4>نام</h4></label>
                              <input type="text" class="form-control" name="first_name" id="first_name" placeholder="سارا" title="enter your first name if any.">
                          </div>
                      </div>
          
                      
          
                      
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="email"><h4>ایمیل</h4></label>
                              <input type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email.">
                          </div>
                      </div>
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="phone"><h4>شماره همراه</h4></label>
                              <input type="text" class="form-control" name="phone" id="phone" placeholder="09********* " title="enter your phone number if any.">
                          </div>
                      </div>

                      <div class="form-group">
                          
                          <div class="col-xs-12">
                              <label for="email"><h4>آدرس</h4></label>
                              <input type="email" class="form-control" id="location" placeholder="خراسان شمالی-بجنورد-..." title="enter a location">
                          </div>
                      </div>
                      
                      <div class="form-group">
                          
                          <div class="col-xs-6">
                            <label for="password2"><h4>تکرار رمزعبور</h4></label>
                              <input type="password" class="form-control" name="password2" id="password2" placeholder="********" title="enter your password2.">
                          </div>
                      </div>

                      <div class="form-group">
                          
                          <div class="col-xs-6">
                              <label for="password"><h4>رمزعبور</h4></label>
                              <input type="password" class="form-control" name="password" id="password" placeholder="********" title="enter your password.">
                          </div>
                      </div> 
                      <div class="form-group">
                           <div class="col-xs-12">
                                <br>
                                    <b-button variant="success" class="btn-save"><i class="glyphicon glyphicon-save save-icon"></i>ذخیره</b-button>
                                    <b-button variant="light">لغو</b-button>
                            </div>
                      </div>
              	</form>
</template>
<script>
export default {
    layout:'panel'
}
</script>