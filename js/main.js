const stickyBox = document.querySelector('.sticky-box');
for(var i=0; i<15; i++){
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'work-sticky');
    stickyBox.append(newDiv);
}
const workDiv = document.querySelectorAll('.work-sticky');
for(var i=0; i<workDiv.length; i++){
    workDiv[i].classList.add(`work-sticky-${i+1}`);
    workDiv[i].style.backgroundImage = `url('./img/work-${i+1}.PNG')`;
    workDiv[i].style.backgroundSize = 'contain';
}

window.addEventListener('scroll', () => {
    // 첫 섹션 큰 텍스트 scale 커지는 효과
    const bIntroText = document.querySelector('.b-intro-txt');
    var scaleValue = window.scrollY / document.querySelector('.section01').clientHeight;
    bIntroText.style.transform = `scale(${1 + scaleValue})`;

    // 롤링 배너 스크롤에 따라 움직이도록
    const RLbanner = document.querySelectorAll('.rl-banner-inner');
    for(var i=0; i<RLbanner.length; i++){
        if(i % 2 == 0){
            RLbanner[i].style.transform = `translate3d(${window.scrollY / document.querySelector('.at-header').scrollHeight}rem, 0, 0)`
        }else if(i % 2 == 1){
            RLbanner[i].style.transform = `translate3d(${-window.scrollY / (window.innerHeight)}rem, 0, 0)`
        }
    }
});
window.addEventListener('mousemove', (e) => {
    // 첫, 마지막 섹션 플로팅 텍스트 마우스 오버 효과
    var moveValueX = e.clientX / 20;
    var moveValueY = e.clientY / 20;
    const float = document.querySelectorAll('.float-txt');
    for(var i=0; i<float.length; i++){
        float[i].style.transform = `translate3d(${moveValueX}px, ${moveValueY}px, 0) rotate(${(e.clientX / 10) / -document.querySelector('.at-header').scrollHeight}deg)`
    }
});