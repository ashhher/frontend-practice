window.onload = function () {
    /*****图片轮播******/
    let banner_imgs = document.querySelectorAll('.img');
    let banner_dots = document.querySelector('.dots').querySelectorAll('span');
    const len = banner_dots.length;

    for (let i = 0; i < len; i++) {
        banner_imgs[i].setAttribute('index', i);
        banner_dots[i].setAttribute('index', i);
    }

    let cur_banner_index = document.querySelector(".bannerBox").querySelector('.cur').getAttribute('index');

    function changeImage(before, after) {
        banner_imgs[before].classList.remove('cur');
        banner_dots[before].classList.remove('cur');
        banner_imgs[after].classList.add('cur');
        banner_dots[after].classList.add('cur');
    }

    // 自动轮播
    let timer = setInterval(autoChangeImage, 3000);

    function autoChangeImage() {
        let next = -1;
        if (cur_banner_index < len - 1)
            next = parseInt(cur_banner_index) + 1;
        else
            next = 0;
        changeImage(cur_banner_index, next);
        cur_banner_index = next;
    }

    // 点击切换
    for (let i = 0; i < len; i++) {
        banner_dots[i].onclick = function () {
            // 若点击dot与当前dot不一致 再切换
            if (i !== cur_banner_index) {
                changeImage(cur_banner_index, i);
                cur_banner_index = i;
            }
        }
    }

    /*****特惠城市切换******/
    let odds_navs = document.querySelectorAll('.list_nav');
    let odds_boxes = document.querySelectorAll('.productBox');

    let cur_odds_nav = document.querySelector(".list").querySelector('.cur');
    let cur_odds_box = document.querySelector(".productInfo").querySelector('.cur');

    // 点击切换
    for (let i = 0; i < odds_navs.length; i++) {
        odds_navs[i].onclick = function () {
            console.log(i);
            // 若点击nav与当前nav不一致 再切换
            if (odds_navs[i] != cur_odds_nav) {
                cur_odds_nav.classList.remove('cur');
                cur_odds_box.classList.remove('cur');
                odds_navs[i].classList.add('cur');
                odds_boxes[i].classList.add('cur');
                cur_odds_nav = odds_navs[i];
                cur_odds_box = odds_boxes[i];
            }
        }
    }
}