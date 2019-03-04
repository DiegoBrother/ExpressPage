// 生成验证码
var code;
function  createCode() {
    code="";
    var codeLength = 4; //验证码长度
    var checkCode = document.getElementById("checkCode");
    var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
        'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');//所有候选组成验证码的字符，也可以选用中文。
    for (var i = 0; i < codeLength; i++) {
        var charnum = Math.floor(Math.random() * 52);
        code += codeChars[charnum];
    }
    if (checkCode) {
        checkCode.className = "btn-code";
        checkCode.innerHTML = code;
    }
}
function validateCode() {
    //用户名不为空
    var username = document.getElementById("name");
    if (username.value.trim() == "") { //没有输入用户名是显示提示
        //获取所有子节点
        var findNodes = document.getElementById("remind_1").children;
        if (findNodes.length == 0) {//只添加一次span
            var appdom = document.createElement("span");
            appdom.innerHTML = "*用户名不能为空";
            appdom.style.color = "red";
            document.getElementById("remind_1").appendChild(appdom);
        }
        return false;
    } else {//输入内容后清除节点内容
        var findNodes = document.getElementById("remind_1").children;
        if (findNodes.length > 0) {
            document.getElementById("remind_1").removeChild(findNodes[0]);
        }
    }
    // 密码是否为空
    var userpwd = document.getElementById("password");
    if (userpwd.value.trim() == "") {
        //获取所有子节点
        var findNodes2 = document.getElementById("remind_2").children;
        if (findNodes2.length == 0) {
            var appdom2 = document.createElement("span");
            appdom2.innerHTML = "*密码不能为空";
            appdom2.style.color = "red";
            document.getElementById("remind_2").appendChild(appdom2);
        }
        return false;
    }else{ //输入内容后清除所有节点内容
        var findNodes2 = document.getElementById("remind_2").children;
        if (findNodes2.length > 0) {
            document.getElementById("remind_2").removeChild(findNodes2[0]);
        }
    }

//验证码检验
    var inputCode = document.getElementById("inputCode").value;
    if (inputCode.length <= 0) {
        // alert("请输入验证码");
        var findNodes = document.getElementById("remind_3").children;
        if (findNodes.length == 0) {
            //只添加一次span
            var appdom = document.createElement("span");
            appdom.innerHTML = "*验证码不能为空";
            appdom.style.color = "red";
            document.getElementById("remind_3").appendChild(appdom);
        } else {
            document.getElementById("remind_3").removeChild(findNodes[0]);
            //只添加一次span
            var appdom = document.createElement("span");
            appdom.innerHTML = "*验证码不能为空";
            appdom.style.color = "red";
            document.getElementById("remind_3").appendChild(appdom);
        }
        return false;
    } else if (inputCode.toUpperCase() != code.toUpperCase()) {
        var findNodes2 = document.getElementById("remind_3").children;
        if (findNodes2.length > 0) {
            document.getElementById("remind_3").removeChild(findNodes2[0]);
            //只添加一次span
            var appdom2 = document.createElement("span");
            appdom2.innerHTML = "*验证码错误";
            appdom2.style.color = "red";
            document.getElementById("remind_3").appendChild(appdom2);

        } else {
            var appdom2 = document.createElement("span");
            appdom2.innerHTML = "*验证码错误";
            appdom2.style.color = "red";
            document.getElementById("remind_3").appendChild(appdom2);

        }
        return false;
    } else {
        var findNodes3 = document.getElementById("remind_3").children;
        if (findNodes3.length > 0) {
            document.getElementById("remind_3").removeChild(findNodes3[0]);
        }
    }
}








