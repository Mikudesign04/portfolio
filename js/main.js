$(function () {
  /* ハンバーガーメニューをクリックした時 */
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });

  /* ナビメニューのリンクをクリックした時 */
  $(".navi a").on("click", function () {
    $("header").removeClass("open");
  });
});

/* サービスメニューの個別開閉 */
const serviceBtns = document.querySelectorAll(".service-btn");

serviceBtns.forEach((service) => {
  const btn = service.querySelector(".s-hamburger");

  btn.addEventListener("click", () => {
    const isOpen = service.classList.toggle("is-open");

    btn.setAttribute("aria-expanded", isOpen);
  });
});

// 私の思い：順番にふわっと表示
const mindSections = document.querySelectorAll(".my-mind, .my-mind-reverse");

const mindObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target;

        const soft1 = section.querySelector(".sub-soft1");
        const soft2 = section.querySelector(".sub-soft2");
        const mainSoft = section.querySelector(".main-soft");

        soft1.classList.add("is-show");

        setTimeout(() => {
          soft2.classList.add("is-show");
        }, 500);

        setTimeout(() => {
          mainSoft.classList.add("is-show");
        }, 1000);

        observer.unobserve(section);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

mindSections.forEach((section) => {
  mindObserver.observe(section);
});
/* ページ内リンクをゆっくりスクロール */
$('a[href^="#"]').on("click", function (e) {
  const href = $(this).attr("href");

  if (href === "#") return;

  const target = $(href);

  if (target.length) {
    e.preventDefault();

    const position = target.offset().top;

    $("html, body").animate(
      {
        scrollTop: position,
      },
      1000,
    );
  }
});
// MY HISTORY：dt・ddをフェードアップ
const historyItems = document.querySelectorAll(
  ".my-history dt, .my-history dd",
);

const historyFadeObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px",
  },
);

historyItems.forEach((item) => {
  historyFadeObserver.observe(item);
});

// MY HISTORY：イラストが右からスライド
const historyImages = document.querySelectorAll(".history-img1, .history-img2");

const historyImageObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

historyImages.forEach((img) => {
  historyImageObserver.observe(img);
});
// スクロールしたら下からふわっと表示
const fadeUpItems = document.querySelectorAll(".fade-up");

const fadeUpObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

fadeUpItems.forEach((item) => {
  fadeUpObserver.observe(item);
});
