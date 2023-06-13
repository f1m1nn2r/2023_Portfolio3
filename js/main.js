// 헤더 메뉴 클릭 시 섹션 이동
const menu = document.querySelector('.at-header ul');
menu.addEventListener('click', (e) => {
    // 클릭한 메뉴의 dataset 값을 구하고, scrollMenu로 구한 dataset 값의 선택자를 찾아감
    const thisMenu = e.target;
    const menuValue = thisMenu.dataset.menu;
    const scrollMenu = document.querySelector(menuValue);
    scrollMenu.scrollIntoView({
        behavior:'smooth'
    });
});

// 첫, 마지막 섹션 인트로 텍스트 반복문으로 추가
for(var i=0; i<15; i++){
    const firstTemplate = 
    `   
        <div class='float-txt stroke'>
            <div>
                <span>W</span>
                <span>E</span>
                <span>B</span>
            </div>
            <div>
                <span>P</span>
                <span>U</span>
                <span>B</span>
                <span>L</span>
                <span>I</span>
                <span>S</span>
                <span>H</span>
                <span>E</span>
                <span>R</span>
            </div>
        </div>
    `
    const lastTemplate = 
    `
    <div class="float-txt stroke">
        <div>
            <span>T</span>
            <span>H</span>
            <span>A</span>
            <span>N</span>
            <span>K</span>
            <span>S</span>
        </div>
        <div>
            <span>F</span>
            <span>O</span>
            <span>R</span>
        </div>
        <div>
            <span>W</span>
            <span>A</span>
            <span>T</span>
            <span>C</span>
            <span>H</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span>!</span>
        </div>
    </div>
    `
    document.querySelector('.section01-inner .float-txt-wrap').insertAdjacentHTML('beforeend', firstTemplate);
    document.querySelector('.section04-inner .float-txt-wrap').insertAdjacentHTML('beforeend', lastTemplate);
}

// introduce, career 클릭 시 컨텐츠 변경
const toggleLi =  document.querySelectorAll('.toggle-tab li');
const toggleContent = document.querySelectorAll('.toggle-content li');
function toggleActive(toggleLi){
    for(var i=0; i<toggleLi.length; i++){
        toggleLi[i].addEventListener('click', () => {
            var thisTab = this;
            for(var i=0; i<toggleLi.length; i++){
                if(thisTab != toggleLi[i]){
                    toggleLi[i].classList.remove('active');
                    toggleContent[i].classList.remove('active');
                }else if(thisTab.classList.contains('active') === true){
                    thisTab.classList.remove('active');
                    toggleContent[i].classList.remove('active');
                }else{
                    thisTab.classList.add('active');
                    toggleContent[i].classList.add('active');
                }
            }
        })
    }
}
toggleActive(toggleLi);

// work 섹션 작업물 div 및 img 추가
const stickyBox = document.querySelector('.sticky-box');
for(var i=0; i<15; i++){
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'work-sticky');
    stickyBox.append(newDiv);
}
const workDiv = document.querySelectorAll('.work-sticky');
for(var i=0; i<workDiv.length; i++){
    workDiv[i].classList.add(`work-sticky-${i+1}`);
    workDiv[i].style.backgroundImage = `url('./img/work-${i+1}.png')`;
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
            RLbanner[i].style.transform = `translate3d(${-window.scrollY / document.querySelector('.at-header').clientHeight}rem, 0, 0)`
        }else if(i % 2 == 1){
            RLbanner[i].style.transform = `translate3d(${window.scrollY / (window.innerHeight)}rem, 0, 0)`
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

window.addEventListener('mousewheel', (e) => {
    if(e.deltaY > 0 && window.scrollY > document.querySelector('.section01').clientHeight){
        document.querySelector('.at-header').classList.add('hide');
    }else{
        document.querySelector('.at-header').classList.remove('hide');
    }
});