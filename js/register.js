var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
function validateCode() {

    //用户名不为空
    var username = document.getElementById("name");
    if(username.value.trim() == ""){//没有输入用户名显示提示
        //获取所有子节
        var findNodes3 = document.getElementById("remind_2").children;
        if(findNodes3.length == 0){
            //只添加一次span
            var appdom3 = document.createElement("span");
            appdom3.innerHTML = "*用户名不为空";
            appdom3.style.color = "red";
            document.getElementById("remind_2").appendChild(appdom3);
        }else{
            document.getElementById("remind_2").removeChild(findNodes3[0]);
            //只添加一次span
            var appdom3 = document.createElement("span");
            appdom3.innerHTML = "*用户名不为空";
            appdom3.style.color = "red";
            document.getElementById("remind_2").appendChild(appdom3);
        }
        return false;
    }else{
        var findNodes3 = document.getElementById("remind_2").children;
        if(findNodes3.length>0){
            document.getElementById("remind_2").removeChild(findNodes3[0]);
        }
    }

    //判断密码的正确性
    var userpwd = document.getElementById("password");
    if(userpwd.value.trim() == ""){
        //获取所有子节点
        var findNodes4 = document.getElementById("remind_3").children;
        if(findNodes4.length == 0){
            var appdom4 = document.createElement("span");
            appdom4.innerHTML = "*密码不为空";
            appdom4.style.color = "red";
            document.getElementById("remind_3").appendChild(appdom4);
        }
        return false;
    }else if( userpwd.value.length<6 || userpwd.value.length>16){//密码不合法
        //获取所有子节点
        var findNodes4 = document.getElementById("remind_3").children;
        if(findNodes4.length == 0){
            var appdom4 = document.createElement("span");
            appdom4.innerHTML = "*密码字符6-16位";
            appdom4.style.color="red";
            document.getElementById("remind_3").appendChild(appdom4);
        }else{
            document.getElementById("remind_3").removeChild(findNodes4[0]);
            var appdom4 = document.createElement("span");
            appdom4.innerHTML = "*密码字符6-16位";
            appdom4.style.color="red";
            document.getElementById("remind_3").appendChild(appdom4);
        }
    }else{//输入内容后清除所有节点
        var  findNodes4 = document.getElementById("remind_3").children;
        if(findNodes4.length > 0){
            document.getElementById("remind_3").removeChild(findNodes4[0]);
        }

    }

    //再次确认密码
    var repassword = document.getElementById("re_password");
    if(repassword.value.length == 0){
        var findNodes5 = document.getElementById("remind_4").children;
        if(findNodes5.length==0){
            var appdom5 = document.createElement("span");
            appdom5.innerHTML = "确认密码不为空";
            appdom5.style.color = "red";
            document.getElementById("remind_4").appendChild(appdom5);
        }else{
            document.getElementById("remind_4").removeChild(findNodes5[0]);
            var appdom5 = document.createElement("span");
            appdom5.innerHTML = "确认密码不为空";
            appdom5.style.color = "red";
            document.getElementById("remind_4").appendChild(appdom5);
        }
    }else if(repassword.value != userpwd.value){
        var findNodes5 = document.getElementById("remind_4").children;
        if(findNodes5.length == 0){
            var appdom5 = document.createElement("span");
            appdom5.innerHTML = "*两次输入的密码不一致";
            appdom5.style.color = "red";
            document.getElementById("remind_4").appendChild(appdom5);
        }else{
            document.getElementById("remind_4").removeChild(findNodes5[0]);
            var appdom5 = document.createElement("span");
            appdom5.innerHTML = "*两次输入的密码不一致";
            appdom5.style.color = "red";
            document.getElementById("remind_4").appendChild(appdom5);
        }
    }else{
        //输入内容后清除所有节点
        var findNodes5 = document.getElementById("remind_4").children;
        if (findNodes5.length > 0) {
            document.getElementById("remind_4").removeChild(findNodes5[0]);
        }
    }

    //手机号不为空
    var phonenumber = document.getElementById("phone").value;
    if(phonenumber.length <=0){//没有输入手机号显示提示
        //获取所有子节点
        var findNodes = document.getElementById("remind_1").children;
        if(findNodes.length == 0){
            //只添加一次span
            var appdom = document.createElement("span");
            appdom.innerHTML = "*手机号不为空";
            appdom.style.color = "red";
            document.getElementById("remind_1").appendChild(appdom);
        }else{
            document.getElementById("remind_1").removeChild(findNodes[0]);
            //添加span
            var  appdom2 = document.createElement("span");
            appdom2.innerHTML = "*手机号不为空";
            appdom2.style.color = "red";
            document.getElementById("remind_1").appendChild(appdom2);
        }
        return false;

    }else if( !myreg.test(phonenumber) ){//输入的手机号没有11位，不合法的手机号
        var findNodes2 = document.getElementById("remind_1").children;
        if(findNodes2.length > 0){
            document.getElementById("remind_1").removeChild(findNodes2[0]);
            //只添加一次span
            var appdom2 = document.createElement("span");
            appdom2.innerHTML = "*手机号不合法";
            appdom2.style.color="red";
            document.getElementById("remind_1").appendChild(appdom2);
        }else{
            var appdom2 = document.createElement("span");
            appdom2.innerHTML = "*手机号不合法";
            appdom2.style.color = "red";
            document.getElementById("remind_1").appendChild(appdom2);
        }
        return false;
    }else {//输入内容后清除节点内容
        var findNodes = document.getElementById("remind_1").children;
        if(findNodes.length>0){
            document.getElementById("remind_1").removeChild(findNodes[0]);
        }
    }




}