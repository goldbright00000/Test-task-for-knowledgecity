$(document).ready(function() {

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

    //LogIn function
    function LogIn(){
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
                if(!result){
                    document.location.href="./index.html"
                }
                else{
                    $("#section_login").css("display","block")
                }
            },
            error:function(error){
                document.location.href="./index.html"
            }
        })
    }
  LogIn();
    
    //Get Table
    $('#example').DataTable({
        "searching": false,
        "bLengthChange": false,
        "bFilter": true,
        "bInfo": false,
        "bAutoWidth": false,
        "iDisplayLength":5,
        "ajax": "./config/users.php",
        createdRow: function( row, data, dataIndex ) {
            let html = '<td><div class="row">'
                html+='<div class="col" align="right"><img class="mt-2" src="./assets/images/check_img.png" height="40px"></i></div>'
                html+='<div class="col" align="left">'
                html+='<div class="row">' + data[0] + '</div>'
                html+=' <div class="row" style="color:#8a8787">' + data[1] + '</div>'
                html+='</div>'
                html+='</div></td>'
                html+= '<td><div class="row">_ _ _ _</div>'
                html+=' <div class="row">' + data[2] + '</div>'
                html+='</td>'

           $(row).html(html)
        },
        columns: [
            { title: "name" },
            { title: "group"}
        ],
        "className": "text-center",
    });

    var table = $('#example').DataTable();

    $('#example').on( 'page.dt', function () {
        var info = table.page.info();
        $('#next-btn').css("display","none")
    } );

    $("#logout").click(function(){
        let username=getCookie('username')
        let password=getCookie('password')

        $.ajax({
            url:'./config/logout.php',
            type:'POST',
            cache:false,
            dataType:'json',
            success:function(result){
                if(result){
                    document.location.href="./index.html"
                }
            },
            error:function(error){
                console.log(error)
            }
        })
    })
} );