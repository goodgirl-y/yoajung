/*const ani5 = gsap.timeline();
ani5
.to("#section1 .t1",{
    xPercent:300,
},"txt")
.to("#section1 .t2",{
    xPercent:-300,
},"txt")
ScrollTrigger.create({
    animation: ani5,
    trigger:"#section1",
    //markers:true,
    start:"top top",
    //end:"+=2000",
    pin:true,
    scrub:1,
    anticipatePin: 1,
});*/
    //let currentSection = 0;

    const h1 = document.querySelector('.first-page h1');
    const container = document.querySelector('.container');

    let disableScroll = true; //첫번쨰 페이지에서 스크롤 휠 이벤트 제거

    const backgroundbigs1 = document.querySelector('.backgroundbigs1')
    const backgroundbigs2 = document.querySelector('.backgroundbigs2')

    // 스크롤 이벤트 처리
    container.addEventListener('scroll', () => {
        const scrollPosition = container.scrollTop; // 현재 스크롤 위치
        // h1 요소의 수직 위치를 조정
        if (scrollPosition < window.innerHeight) { // 첫 번째 페이지에서만 이동하도록 조건 추가
            h1.style.transform = `translate(${scrollPosition * 0.8}px, -50%)`; // h1의 수직 이동
            backgroundbigs1.style.transform = `translateY(${scrollPosition * 0.2}px)`; // 첫 번째 배경 이미지 속도 조정
            backgroundbigs2.style.transform = `translateY(${scrollPosition * 0.8}px)`; // 두 번째 배경 이미지 속도 조정
        } else {
            h1.style.transform = `translate(-50%, 0)`; // 배경 이미지 원래 위치로
            backgroundbigs1.style.transform = `translateY(0)`; // 첫 번째 배경 이미지 원래 위치로
            backgroundbigs2.style.transform = `translateY(0)`; // 두 번째 배경 이미지 원래 위치로
        }
    });

  // 휠 이벤트로 스크롤 조정
  //container.addEventListener('wheel', (event) => {
            //event.preventDefault(); // 스크롤 비활성화
            //const delta = Math.sign(event.deltaY); // 스크롤 방향
            // 스크롤 이동
        // container.scrollBy({
        //     top: delta * window.innerHeight,
        //     behavior: 'smooth'
        // });
        // 스크롤 시 h1과 배경 이미지의 위치 조정
    container.addEventListener('scroll', () => {
        const scrollPosition = container.scrollTop; // 현재 스크롤 위치

        if (scrollPosition < window.innerHeight) { // 첫 번째 페이지에서만 이동하도록 조건 추가
            // 각 줄의 위치 조정
            line1.style.transform = `translate(-50%, ${scrollPosition * 0.5}px)`; // 첫 번째 줄의 수직 이동
            line2.style.transform = `translate(-50%, ${scrollPosition * 0.7}px)`; // 두 번째 줄의 수직 이동
        } else {
            line1.style.transform = `translate(-50%, 0)`; // 첫 번째 줄 원래 위치로
            line2.style.transform = `translate(-50%, 0)`; // 두 번째 줄 원래 위치로
        }
    });
    // 첫 번째, 두 번째, 세 번째 페이지에서는 스크롤 휠 이벤트 막기
    container.addEventListener('wheel', (event) => {
        if (disableScroll && container.scrollTop < window.innerHeight * 2) {
            event.preventDefault(); // 스크롤 비활성화
        }
    });
    // 스크롤 휠 이벤트를 네 번째 페이지부터 활성화
    container.addEventListener('scroll', () => {
        const scrollPosition = container.scrollTop;
        if (scrollPosition >= window.innerHeight * 2) {
            disableScroll = false; // 네 번째 페이지부터 스크롤 허용
        }
    });