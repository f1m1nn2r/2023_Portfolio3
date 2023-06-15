// 모바일 pc 구분 스크립트, 출처 https://pjw48.net/wordpress/2017/02/11/mobilecheck-js/
function isMobile(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
if(isMobile()){
    const section = document.querySelectorAll('.section');
    section.forEach((itSection) => {
        itSection.classList.add('mobile');
    });
    //document.querySelector('.section01').classList.add('height');
}

// 헤더 메뉴 클릭 시 섹션 이동
const menu = document.querySelector('.at-header ul');
menu.addEventListener('click', (e) => {
    // 클릭한 메뉴의 dataset 값을 구하고, scrollMenu로 구한 dataset 값의 선택자를 찾아가도록
    const menuValue = e.target.dataset.menu;
    const scrollMenu = document.querySelector(menuValue);
    scrollMenu.scrollIntoView({
        behavior:'smooth'
    });
});

// 반복되는 태그의 경우 for문으로 추가
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

    const firstBanner = 
    `
        <p>ABOUT ME</p>
        <p class="stroke">SKILS</p>
    `

    const lastBanner = 
    `
        <p>CONTACT</p>
        <p class="stroke">ME</p>
    `
    document.querySelector('.section01-inner .float-txt-wrap').insertAdjacentHTML('beforeend', firstTemplate);
    document.querySelector('.section04-inner .float-txt-wrap').insertAdjacentHTML('beforeend', lastTemplate);
    document.querySelector('.section02-inner .rl-banner-inner').insertAdjacentHTML('beforeend', firstBanner);
    document.querySelector('.section04-inner .rl-banner-inner').insertAdjacentHTML('beforeend', lastBanner);
}

// introduce, career 클릭 시 컨텐츠 변경
const toggleLi =  document.querySelectorAll('.toggle-tab li');
const toggleContent = document.querySelectorAll('.toggle-content li');
document.querySelector('.section02-inner .top-column').addEventListener('click', (e) => {
    const thisTab = e.target.dataset.tab;
    //console.log(thisTab);
    if(thisTab){
        toggleLi.forEach((li) => {
            li.classList.remove('active');
        });
        e.target.classList.add('active');

        toggleContent.forEach((content) => {
            content.classList.remove('active');
        });
        document.getElementById(thisTab).classList.add("active");
        document.querySelector('.show-txt').innerText = thisTab;
    }
}); 

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
    workDiv[i].style.backgroundImage = `url('./img/work-${i+1}.PNG')`;
    workDiv[i].style.backgroundSize = 'cover';
    //workDiv[i].style.zIndex = 100 - i;
}

const portfolio = [
    {name:'HANKUK PACKGE', subName:'', level:'퍼블리싱 참여도 100%(영문, 일문 페이지 제외)', date:'제작 소요일 2023. 03. 13 ~ 2023. 03. 21', link:'https://www.hkpak.co.kr/'},
    {name:'HEYAN', subName:'', level:'퍼블리싱 참여도 100%', date:'제작 소요일 2023. 02. 15 ~ 2023. 02. 22', link:'https://www.thinkhyean.com/'},
    {name:'THE BLUE', subName:'', level:'퍼블리싱 참여도 100%', date:'제작 소요일 2023. 02. 01 ~ 2023. 02. 10', link:'http://thebluecc.com/'},
    {name:'SAY RNELL', subName:'', level:'퍼블리싱 참여도 100%(영문 페이지 포함)', date:'제작 소요일 2023. 01. 09 ~ 2023. 01. 20', link:'http://sayrnell.com/'},
    {name:'Data Sicence Plus', subName:'Seoul National University', level:'퍼블리싱 참여도 100%', date:'제작 소요일 2022. 12. 08 ~ 2022. 12. 14', link:'http://dsplus.uos.ac.kr/'},
    {name:'GLOPID-R KOREA', subName:'', level:'퍼블리싱 참여도 100%(GloPID-R 소개 페이지 제외)', date:'제작 소요일 2022. 11. 23 ~ 2022. 11. 30', link:'https://www.glopid-r-korea.kr/'},
    {name:'Data Sicence Plus', subName:'Korea University', level:'퍼블리싱 참여도 100%', date:'제작 소요일 2022. 11. 02 ~ 2022. 11. 10', link:'http://dsplusku.org/'},
    {name:'CHEONGGOK', subName:'', level:'퍼블리싱 참여도 100%', date:'제작 소요일 2022. 10. 14 ~ 2022. 10. 19', link:'http://www.cheonggok.com/'},
    {name:'KP-TECH', subName:'', level:'퍼블리싱 참여도 100%', date:'제작 소요일 2022. 09. 29 ~ 2022. 10. 11', link:'http://www.kochemnet.com/'},
    {name:'DCUBE MALL', subName:'', level:'퍼블리싱 참여도 100%', date:'제작 소요일 2022. 07. 25 ~ 2022. 07. 28', link:'http://dcubemall.co.kr/'},
    {name:'ASETEC', subName:'', level:'퍼블리싱 참여도 100%(영문 페이지 제외)', date:'제작 소요일 2022. 06. 27 ~ 2022. 07. 08', link:'http://asetec.co.kr/'},
    {name:'EOBOOKS', subName:'', level:'퍼블리싱 참여도 100%', date:'제작 소요일 2022. 06. 13 ~ 2022. 06. 20', link:'fs220615.dothome.co.kr'},
    {name:'CHUNGRIM', subName:'', level:'퍼블리싱 참여도 100%', date:'제작 소요일 2022. 05. 30 ~ 2022. 06. 07', link:'https://www.chungrim.com/'},
    {name:'WINNOVA', subName:'', level:'퍼블리싱 참여도 100%(영문 페이지 포함)', date:'제작 소요일 2022. 04. 01 ~ 2022. 04. 15', link:'http://winnova.co.kr/'},
    {name:'CHANGHC', subName:'', level:'퍼블리싱 참여도 100%', date:'제작 소요일 2022. 03. 24 ~ 2022. 03. 28', link:'https://www.changhc.com/'}
]
portfolio.forEach((data, index) => {
    const portfolioTemplate =
    `
    <div class="work work-${index+1}" data-work='${index}'>
        <p>${portfolio[index].name}<span>${portfolio[index].subName}</span></p>
        <span>${portfolio[index].level}</span>
        <span>${portfolio[index].date}</span>
        <a href="${portfolio[index].link}" target="_blank"><span>MORE</span></a>
    </div>
    `
    document.querySelector('.section03-inner .sticky-wrap').insertAdjacentHTML('beforeend', portfolioTemplate);
});

const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const $target = entry.target;
        const index = $target.getAttribute('data-work');
        const workDivs = document.querySelectorAll('.work-sticky'); 
        for(var i=0; i<workDivs.length; i++){
            if(entry.intersectionRatio >= 0 && entry.isIntersecting ){
                workDivs[index].style.zIndex = 100 + index;
                //console.log(index);
                if(index % 2 == 1){
                    document.querySelector('.sticky-box').style.transform = 'translateY(-50%) rotate(5deg)';
                    
                }else if(index % 2 == 0){
                    document.querySelector('.sticky-box').style.transform = 'translateY(-50%) rotate(-5deg)';
                }
            }else{
                workDivs[index].style.zIndex = 100 - index;
            }
        }
    });
});
const $workTxts = document.querySelectorAll('.work');
$workTxts.forEach((workTxt) => {
    io.observe(workTxt);
});

window.addEventListener('scroll', () => {
    // 첫 섹션 큰 텍스트 scale 커지는 효과
    const bIntroText = document.querySelector('.b-intro-txt');
    var scaleValue = window.scrollY / document.querySelector('.section01').clientHeight;
    bIntroText.style.transform = `scale(${1 + scaleValue})`;

    // 롤링 배너 스크롤에 따라 움직이도록
    const RLbanner = document.querySelectorAll('.rl-banner-inner');
    for(var i=0; i<RLbanner.length; i++){
        if(!isMobile()){
            if(i % 2 == 0){
                RLbanner[i].style.transform = `translate3d(${window.scrollY / document.querySelector('.at-header').clientHeight}rem, 0, 0) translateY(-50%)`
            }else if(i % 2 == 1){
                RLbanner[i].style.transform = `translate3d(${300 -(window.scrollY / 2) / (document.querySelector('.at-header').offsetHeight)}rem, 0, 0) translateY(-50%)`
            }
        }else{
            if(i % 2 == 0){
                RLbanner[i].style.transform = `translate3d(${window.scrollY / (document.querySelector('.section01').clientHeight / 3)}rem, 0, 0) translateY(-50%)`
            }else if(i % 2 == 1){
                RLbanner[i].style.transform = `translate3d(${-(window.scrollY / (document.querySelector('.section01').clientHeight / 3))}rem, 0, 0) translateY(-50%)`
            }
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