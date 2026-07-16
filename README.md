[famous.css](https://github.com/user-attachments/files/30069186/famous.css)
/* =====================================
   أشهر المبرمجين
===================================== */

.programmers-section{

    padding:120px 8%;
    background:#090d17;

}

/* =====================================
   عنوان القسم
===================================== */

.section-header{

    text-align:right;
    margin-bottom:60px;

}

.section-number{

    color:#4ea8ff;
    font-size:clamp(12px,1.2vw,16px);
    letter-spacing:2px;

}

.section-header h2{

    color:#ffffff;
    font-size:clamp(26px,5vw,42px);
    font-weight:800;
    line-height:1.3;
    margin:12px 0;

}

.section-header p{

    color:#9aa4b3;
    font-size:clamp(15px,2vw,20px);
    line-height:1.8;

}

/* =====================================
   Grid
===================================== */

.programmers-grid{

    display:grid;

    grid-template-columns:repeat(3,1fr);

    gap:24px;

}

/* =====================================
   الكارت
===================================== */

.programmer-card{

    position:relative;

    background:#111827;

    border:1px solid #23314f;

    border-radius:18px;

    padding:26px;

    min-height:auto;

    transition:.35s;

    overflow:hidden;

}

/* Hover */

.programmer-card:hover{

    transform:translateY(-10px);

    border-color:#d6a531;

    box-shadow:0 15px 40px rgba(214,165,49,.18);

}

/* =====================================
   الدائرة
===================================== */

.avatar{

    position:absolute;

    top:22px;

    left:22px;

    width:clamp(44px,5vw,52px);

    height:clamp(44px,5vw,52px);

    border-radius:50%;

    background:linear-gradient(135deg,#38bdf8,#4dd4ff);

    display:flex;

    justify-content:center;

    align-items:center;

    font-size:clamp(16px,1.8vw,19px);

    font-weight:bold;

    color:#111827;

    transition:.3s;

}

.programmer-card:hover .avatar{

    transform:scale(1.08);

}

/* =====================================
   اسم المبرمج
===================================== */

.programmer-card h3{

    color:#fff;

    font-size:clamp(19px,2.2vw,22px);

    margin-top:8px;

    margin-bottom:6px;

}

/* =====================================
   الوظيفة
===================================== */

.job{

    display:block;

    color:#d6a531;

    margin-bottom:16px;

    font-size:clamp(13px,1.4vw,15px);

}

/* =====================================
   الوصف
===================================== */

.programmer-card p{

    color:#b6c0d1;

    line-height:1.8;

    font-size:clamp(14px,1.5vw,15px);

    margin-bottom:20px;

}

/* =====================================
   الزر
===================================== */

.more-btn{

    background:#d6a531;

    color:white;

    border:none;

    padding:clamp(9px,1.4vw,12px) clamp(18px,2.6vw,26px);

    border-radius:12px;

    cursor:pointer;

    font-size:clamp(13px,1.4vw,15px);

    font-weight:bold;

    transition:.3s;

}

.more-btn:hover{

    background:#efbb45;

}

/* =====================================
   Responsive
===================================== */

@media (max-width:992px){

    .programmers-grid{

        grid-template-columns:repeat(2,1fr);

    }

}

@media (max-width:768px){

    .programmers-section{

        padding:80px 6%;

    }

    .programmers-grid{

        grid-template-columns:1fr;

    }

    .programmer-card{

        padding:30px;

    }

    .avatar{

        width:50px;

        height:50px;

        font-size:18px;

    }

}

@media (max-width:480px){

    .section-header{

        text-align:center;

    }

    .programmer-card{

        text-align:center;

    }

    .avatar{

        position:static;

        margin:0 auto 20px;

    }

}
