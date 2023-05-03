/*******************************************
	로그인 폼 - 체크
*******************************************/
function loginCheck() {
	const id = document.getElementById('id');
	const pw = document.getElementById('pw');
	
	if(id.value == '') {
		alert("아이디를 입력해주세요.");
		id.focus();
		return false;
	} else if(pw.value == '') {
		alert("비밀번호를 입력해주세요.")
		pw.focus();
		return false;
	} else {
		//아이디, 패스워드 모두 입력된 상태 --> 서버 전송
		loginForm.submit();
	}
}

/*******************************************
	로그인 폼 - 다시쓰기
*******************************************/
function loginReset() {
	document.getElementById('id').value = '';
	document.getElementById('pw').value = '';
	
	document.getElementById('id').focus();
}

/*******************************************
	회원가입 폼 - 비밀번호 & 비밀번호 확인
*******************************************/
function passCheck() {
	let pw = document.getElementById("pw");
	let cpw = document.getElementById("cpw");
	let cmsg = document.getElementById("cmsg");
	
	if(pw.value != "" && cpw.value != ""){
		if(pw.value == cpw.value) {
			cmsg.innerHTML = "비밀번호가 동일합니다.";
			cmsg.style.color = "blue";
			cmsg.style.display = "block";
			cmsg.style.padding = "3px 0";
			cmsg.style.fontSize = "11px";
			document.getElementById("name").focus();
		} else {
			cmsg.innerHTML = "비밀번호가 동일하지 않습니다. 다시 입력해주세요";
			cmsg.style.color = "red";
			cmsg.style.display = "block";
			cmsg.style.padding = "3px 0";
			cmsg.style.fontSize = "11px";
			cpw.value="";
			cpw.focus();	
		}
	}
}

/*******************************************
	회원가입 폼 - 이메일 체크
*******************************************/
function emailCheck() {
	let email2 = document.getElementById("email2");
	let email3 = document.getElementById("email3");
	
	if(email3.value == "default"){
		email2.value = "";
		email2.disabled = false;
		email2.focus();
	} else {
		email2.value = email3.value;
		email2.disabled = "disabled";
	}
}

/*******************************************
	회원가입 폼 - 주소 찾기
*******************************************/
function searchAddr() {
	new daum.Postcode({
        oncomplete: function(data) {
            document.getElementById("addr1").value = "("+data.zonecode+") " + data.address;
            document.getElementById("addr2").focus();
        }
    }).open();
}

/*******************************************
	회원가입 폼 - 체크
*******************************************/
function joinCheck() {
	let id = document.getElementById('id');
	let pw = document.getElementById('pw');
	let cpw = document.getElementById('cpw');
	let name = document.getElementById('name');
	let email1 = document.getElementById('email1');
	let email2 = document.getElementById('email2');
	let email3 = document.getElementById('email3');
	let addr1 = document.getElementById('addr1');
	let addr2 = document.getElementById('addr2');
	let phone2 = document.getElementById('phone2');
	let phone3 = document.getElementById('phone3');
	let phone4 = document.getElementById('phone4');
	
	if(id.value == '') {
		alert("아이디를 입력해주세요.");
		id.focus();
		return false;
		
	} else if(pw.value == '') {
		alert("비밀번호를 입력해주세요.");
		pw.focus();
		return false;
		
	} else if(cpw.value == '') {
		alert("비밀번호 확인을 입력해주세요.");
		cpw.focus();
		return false;
		
	} else if(name.value == '') {
		alert("이름을 입력해주세요.");
		name.focus();
		return false;
		
	} else if(checkCount('sex') == 0){
		alert("성별을 체크해주세요.");
		document.getElementsByName('sex').style.border = '1px solid #777';
		return false;
		
	} else if(email1.value == '') {
		alert("이메일 앞자리를 입력해주세요.");
		email1.focus();
		return false;
		
	} else if(email2.value == '') {
		alert("이메일 뒷자리를 입력해주세요.");
		email3.focus();
		return false;
		
	} else if(addr1.value == '') {
		alert("주소를 입력해주세요.");
		addr1.focus();
		return false;
		
	} else if(addr2.value == '') {
		alert("상세 주소를 입력해주세요.");
		addr2.focus();
		return false;
		
	} else if(checkCount('phone1') == 0) {
		alert("통신사를 체크해주세요.");
		document.getElementsByName('phone1')[0].style.border = '1px solid #777';
		return false;
		
	} else if(phone2.value == '선택') {
		alert("번호를 선택해주세요.");
		phone2.focus();
		return false;
		
	} else if(phone3.value == '') {
		alert("휴대폰번호를 입력해주세요.");
		phone3.focus();
		return false;
		
	} else if(phone4.value == '') {
		alert("마지막 휴대폰번호를 입력해주세요.");
		phone4.focus();
		return false;
		
	} else if(checkCount('hobby') == 0) {
		alert("취미를 선택해주세요.");
		document.getElementsByName('hobby')[0].style.border = '1px solid #777';
		return false;
		
	} else {
		//아이디, 패스워드 모두 입력된 상태 --> 서버 전송
		joinForm.submit();
	}
}

function checkCount(tagName) {
	const tagList = document.getElementsByName(tagName);
	let count = 0;
	for(element of tagList) {
		if(element.checked) count++;
	}
	return count;
}

/*******************************************
로그인 폼 - 다시쓰기
*******************************************/
function loginReset() {
	document.getElementById('id').value = '';
	document.getElementById('pw').value = '';
	
	document.getElementById('id').focus();
}

/*******************************************
	글쓰기 폼 - 제목 체크
*******************************************/
function titleCheck() {
	if (document.getElementById("title").value == "") {
		alert("제목을 입력해주세요");
		document.getElementById("title").focus();
	} else {
		writeForm.submit();
	}
}