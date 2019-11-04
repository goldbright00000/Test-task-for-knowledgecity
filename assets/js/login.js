$(document).ready(function(){
    //Remember user
    function getCookie(name) {
        var cookieArr = document.cookie.split(";");
        
        for(var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            if(name == cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        
        return null;
    }
    //Initial Username and password
    $("#username").val(getCookie('_username'))
    $("#password").val(getCookie('_password'))

    // LogIn()
    function  LogIn(){
        let username=getCookie('username')
        let password=getCookie('password')

        $.ajax({
            url:'./config/LogIn.php',
            type:'POST',
            async:false,
            cache:false,
            data:{'user_name':username,'password':password},
            dataType:'json',
            success:function(result){
                if(result){
                    document.location.href="./user.html"
                }
                else{
                    $("#section_login").css('display','block')
                }
            },
            error:function(error){
                $("#section_login").css('display','block')
            }
        })
    }
    LogIn();
    
    // login process
    $('.form-signin').submit(function(){
        let username=$("#username").val()
        let password=$("#password").val()
        
        $.ajax({
            url:'./config/authorization.php',
            type:'POST',
            cache:false,
            data:{'user_name':username,'password':password},
            success:function(result){
                if(result){
                    document.location.href="./user.html"
                    if($('#remember').is(":checked"))
                    {
                        document.cookie = "_username=" + username
                        document.cookie = "_password=" + password
                    }
                    document.cookie = "username=" + username
                    document.cookie = "password=" + password
                }
                else
                    alert("Invalid Username or Password")
            },
            error:function(error){
            }
        })
        return false;
    })
})