<!-- ===== شريط تبديل اللغة (النسخة العربية النشطة) ===== -->
<div align="center" style="margin: 10px 0 20px 0; padding: 8px; background: #161b22; border-radius: 30px; display: inline-block; width: auto; border: 1px solid #30363d;">
    <a href="./ABOUT.md" style="background: transparent; color: #c9d1d9; padding: 6px 22px; border-radius: 20px; text-decoration: none; font-weight: bold; font-size: 14px; margin: 0 5px; display: inline-block; border: 1px solid #30363d;">
        🇬🇧 English
    </a>
    <a href="./ABOUT-AR.md" style="background: #6ae3ff; color: #0a0a0f; padding: 6px 22px; border-radius: 20px; text-decoration: none; font-weight: bold; font-size: 14px; margin: 0 5px; display: inline-block;">
        🇾🇪 العربية (الافتراضية)
    </a>
</div>

---

# 📌 بطاقة تعريف المستودع

| الحقل | التفاصيل |
| :--- | :--- |
| **اسم المستودع** | `Jabri_RiemannOS` |
| **رابط GitHub** | [https://github.com/Jabri-web/Jabri_RiemannOS](https://github.com/Jabri-web/Jabri_RiemannOS) |
| **رابط الصفحة** | [https://jabri-web.github.io/Jabri-RiemannOS/](https://jabri-web.github.io/Jabri-RiemannOS/) |
| **الملف الحالي** | `./ABOUT-AR.md` (العربية) |
| **اللغة** | العربية (الافتراضية) / English (بديل) |
| **DOI** | `-` (لم يُخصص بعد) |
| **المؤلف** | [م/ عبدالله محمد ناصر الجبري](https://github.com/Jabri-web) |
| **الترخيص** | CC BY 4.0 |
| **الهوية** | `Z + C + A = 1` |

---

# 🖥️ Jabri_RiemannOS

**إطار نظام تشغيل مخصص لفرضية ريمان – استكشاف حسابي ونظري**

---

<div align="center">
  <img src="Image/Dar2.png" width="80%" style="border-radius: 12px; border: 2px solid #6ae3ff;" alt="دار الحجر، اليمن">
  <p><i>🏛️ دار الحجر، اليمن – التراث الذي يربط الماضي العريق بمستقبل الرياضيات.</i></p>
</div>

---

## 📖 حول هذا المستودع

**Jabri_RiemannOS** هو إطار نظام تشغيل متخصص مخصص بالكامل لاستكشاف والتحقق من **فرضية ريمان**. يحتوي على أدوات حسابية عميقة، خوارزميات عددية، وإثباتات نظرية مصممة خصيصاً لهذه المسألة من مسائل الألفية.

يدمج هذا المستودع إطار **دالة Zx الأم** مع حسابات نظرية الأعداد المتقدمة لتوفير بيئة موحدة لدراسة أصفار دالة زيتا لريمان وتداعياتها الفيزيائية.

**المميزات الرئيسية:**
- 🧮 **خوارزميات عد الأصفار** – حساب عالي الدقة لأصفار زيتا على الخط الحرج.
- 📊 **مجموعة تصور بياني** – رسوم بيانية تفاعلية لدوال Zeta و Zx.
- 📓 **دفاتر قابلة لإعادة الإنتاج** – دفاتر Jupyter لكل تجربة.
- 🔗 **تكامل مع Zx** – توافق كامل مع إطار Zx وهوية الجبري (`Z + C + A = 1`).
- 📄 **توثيق نظري** – إثباتات واشتقاقات في LaTeX.

---

## 🗂️ هيكل المستودع

| الملف / المجلد | الوصف |
| :--- | :--- |
| `Python/` | الخوارزميات الأساسية والسكربتات لعد الأصفار والتحقق. |
| `Notebooks/` | دفاتر Jupyter للاستكشاف التفاعلي (`Riemann_zeros.ipynb`, `Zx_integration.ipynb`). |
| `Data/` | مجموعات بيانات CSV للأصفار المحسوبة والثوابت ذات الصلة. |
| `Image/` | الصور والرسوم البيانية المولدة. |
| `Tex/` | مصادر LaTeX للأوراق النظرية والإثباتات. |
| `docs/` | توثيق شامل وأدلة المستخدم. |

---

## 🧪 الخوارزميات الرئيسية

| الخوارزمية | الوصف | الحالة |
| :--- | :--- | :--- |
| **مكتشف أصفار زيتا** | حساب عالي الدقة للأصفار باستخدام صيغة ريمان-سيغل. | ✅ مستقر |
| **راسم أصفار Zx** | يربط أصفار زيتا بمعاملات دالة Zx. | ✅ مُتحقَّق |
| **اختبار الخط الحرج** | يتحقق أن جميع الأصفار المحسوبة تقع على Re(s) = ½. | ✅ مُتحقَّق |
| **محلل إحصائي** | يحلل توزيع الأصفار وإحصائيات التباعد. | ✅ قيد التطوير |

---

## 📊 أمثلة التصور البياني

![أصفار ريمان](Image/Zx_zeros.png)  
*الشكل 1: أول 6 أصفار على الخط الحرج. مولدة بواسطة مجموعة RiemannOS.*

![تكامل Zx](Image/Zx_Jabri_Universe.png)  
*الشكل 2: تراكب دالة Zx يظهر العلاقة بين الأصفار والثوابت الفيزيائية.*

---

## 🔬 كيفية إعادة الإنتاج

```bash
pip install mpmath numpy pandas matplotlib jupyter
jupyter notebook Notebooks/Riemann_zeros.ipynb
