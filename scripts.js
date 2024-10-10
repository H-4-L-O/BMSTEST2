// 로그인 후 버튼을 눌렀을 때 전화번호 인증 페이지로 이동
document.getElementById('post-login-button').addEventListener('click', function () {
    window.location.href = 'phone-verification.html'; // 전화번호 인증 페이지로 이동
});

// 회원가입 버튼을 눌렀을 때 회원가입 페이지로 이동
document.getElementById('signup-button').addEventListener('click', function () {
    window.location.href = 'signup.html'; // 회원가입 페이지로 이동
});
