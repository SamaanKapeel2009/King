/* =====================================
   قائمة المسارات المنسدلة (النافبار)
===================================== */

document.addEventListener('DOMContentLoaded', function () {

    const pathsItem    = document.getElementById('pathsItem');
    const pathsTrigger = document.getElementById('pathsTrigger');
    const pathsMenu    = document.getElementById('pathsMenu');
    const menuCheck    = document.getElementById('menu-check');

    if (!pathsItem || !pathsTrigger || !pathsMenu) return;

    // فتح/قفل القائمة بالضغط على "المسارات"
    pathsTrigger.addEventListener('click', function (e) {
        e.stopPropagation();
        pathsItem.classList.toggle('open');
    });

    // اختيار أي مسار: يقفل قائمة المسارات، وكمان يقفل منيو الموبايل كله
    pathsMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            pathsItem.classList.remove('open');
            if (menuCheck) menuCheck.checked = false;
        });
    });

    // الضغط في أي مكان تاني بره القائمة يقفلها
    document.addEventListener('click', function (e) {
        if (!pathsItem.contains(e.target)) {
            pathsItem.classList.remove('open');
        }
    });

});

/* =====================================
   إرسال رسالة التواصل عبر واتساب
===================================== */

document.addEventListener('DOMContentLoaded', function () {

    const sendBtn = document.getElementById('cf-send');
    if (!sendBtn) return;

    // رقم الواتساب اللي هتوصله الرسائل (بصيغة دولية، من غير + أو أصفار في الأول)
    const whatsappNumber = '201108514164';

    sendBtn.addEventListener('click', function () {

        const name    = document.getElementById('cf-name').value.trim();
        const email   = document.getElementById('cf-email').value.trim();
        const subject = document.getElementById('cf-subject').value;
        const message = document.getElementById('cf-message').value.trim();

        // تحقق بسيط قبل الإرسال
        if (!name || !message) {
            alert('من فضلك اكتب اسمك ورسالتك قبل الإرسال 🙏');
            return;
        }

        // تجهيز نص الرسالة
        let text = `📩 رسالة جديدة من موقع أكاديمية الكينج\n\n`;
        text += `👤 الاسم: ${name}\n`;
        if (email) {
            text += `✉️ البريد الإلكتروني: ${email}\n`;
        }
        text += `📌 الموضوع: ${subject}\n`;
        text += `💬 الرسالة:\n${message}`;

        const encodedText = encodeURIComponent(text);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

        // فتح واتساب في تاب جديد بالرسالة جاهزة
        window.open(whatsappURL, '_blank');
    });

});



const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        scrollTop.classList.add("show");

    }

    else {

        scrollTop.classList.remove("show");

    }

});


//=========================
// Scroll Progress Bar
//=========================

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});