
const translations = {
  en: {
    title: "Welcome to Flamingo Beach Club",
    location: "Located on the sands of paradise",
    hours: "Open daily from 10:00 to 22:00",
    features: "Fire shows · DJ · Cocktails · Food",
    viewMenu: "📖 View Menu"
  },
  th: {
    title: "ยินดีต้อนรับสู่ ฟลามิงโก บีชคลับ",
    location: "ตั้งอยู่บนชายหาดสวรรค์",
    hours: "เปิดทุกวัน 10:00 – 22:00",
    features: "โชว์ไฟ · ดีเจ · ค็อกเทล · อาหาร",
    viewMenu: "📖 ดูเมนู"
  },
  ru: {
    title: "Добро пожаловать в Flamingo Beach Club",
    location: "На берегу райского пляжа",
    hours: "Открыто ежедневно с 10:00 до 22:00",
    features: "Фаер-шоу · DJ · Коктейли · Еда",
    viewMenu: "📖 Посмотреть меню"
  },
  ar: {
    title: "مرحبًا بكم في نادي فلامنغو بيتش",
    location: "يقع على رمال الجنة",
    hours: "مفتوح يوميًا من 10:00 صباحًا إلى 10:00 مساءً",
    features: "عروض نارية · دي جي · كوكتيلات · طعام",
    viewMenu: "📖 عرض القائمة"
  }
};

function switchLang(lang) {
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("location").innerText = translations[lang].location;
  document.getElementById("hours").innerText = translations[lang].hours;
  document.getElementById("features").innerText = translations[lang].features;
  document.getElementById("view-menu").innerText = translations[lang].viewMenu;
}
