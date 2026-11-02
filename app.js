const TOOLS = [
  {"id": 1, "name": "Перфоратор Bosch GBH 2-26 DRE", "cat": "Электроинструмент", "icon": "🔨", "price": 500, "deposit": 8000, "desc": "SDS-plus, 800 Вт, 2.7 Дж. Бетон, кирпич, камень."},
  {"id": 2, "name": "Перфоратор Makita HR2470", "cat": "Электроинструмент", "icon": "🔨", "price": 450, "deposit": 7000, "desc": "SDS-plus, 780 Вт, 2.4 Дж, 3 режима."},
  {"id": 3, "name": "Отбойный молоток Makita HM1203C", "cat": "Электроинструмент", "icon": "🔨", "price": 1300, "deposit": 20000, "desc": "SDS-max, 1510 Вт, 19.1 Дж. Демонтаж стяжки и кладки."},
  {"id": 4, "name": "Дрель-шуруповёрт аккумуляторная Makita DDF485", "cat": "Электроинструмент", "icon": "🔨", "price": 350, "deposit": 6000, "desc": "18 В, 2 АКБ, бесщёточный, кейс."},
  {"id": 5, "name": "Ударная дрель Bosch GSB 13 RE", "cat": "Электроинструмент", "icon": "🔨", "price": 250, "deposit": 3000, "desc": "600 Вт, патрон 13 мм."},
  {"id": 6, "name": "Шуруповёрт ударный (гайковёрт) DeWalt DCF887", "cat": "Электроинструмент", "icon": "🔨", "price": 400, "deposit": 7000, "desc": "18 В, 205 Нм."},
  {"id": 7, "name": "Миксер строительный Makita UT1305", "cat": "Электроинструмент", "icon": "🔨", "price": 400, "deposit": 6000, "desc": "850 Вт, для смесей до 50 кг."},
  {"id": 8, "name": "УШМ (болгарка) Bosch GWS 22-230", "cat": "Пилы и резка", "icon": "🪚", "price": 450, "deposit": 6000, "desc": "2200 Вт, диск 230 мм, плавный пуск."},
  {"id": 9, "name": "УШМ (болгарка) Makita 9558HN", "cat": "Пилы и резка", "icon": "🪚", "price": 250, "deposit": 3000, "desc": "840 Вт, диск 125 мм."},
  {"id": 10, "name": "Циркулярная пила Makita HS7601", "cat": "Пилы и резка", "icon": "🪚", "price": 450, "deposit": 6000, "desc": "1200 Вт, пропил до 66 мм."},
  {"id": 11, "name": "Торцовочная пила Metabo KGS 254", "cat": "Пилы и резка", "icon": "🪚", "price": 900, "deposit": 15000, "desc": "1800 Вт, диск 254 мм, протяжка."},
  {"id": 12, "name": "Электролобзик Bosch PST 900 PEL", "cat": "Пилы и резка", "icon": "🪚", "price": 300, "deposit": 4000, "desc": "620 Вт, маятниковый ход."},
  {"id": 13, "name": "Сабельная пила Makita JR3051TK", "cat": "Пилы и резка", "icon": "🪚", "price": 450, "deposit": 7000, "desc": "1200 Вт, дерево/металл."},
  {"id": 14, "name": "Штроборез Fiolent Б2-40", "cat": "Пилы и резка", "icon": "🪚", "price": 900, "deposit": 12000, "desc": "1600 Вт, глубина 40 мм, с пылеотводом."},
  {"id": 15, "name": "Плиткорез электрический 800 мм", "cat": "Пилы и резка", "icon": "🪚", "price": 800, "deposit": 12000, "desc": "800 Вт, водяное охлаждение."},
  {"id": 16, "name": "Эксцентриковая шлифмашина Bosch GEX 125", "cat": "Шлифовка и обработка", "icon": "🧽", "price": 300, "deposit": 4000, "desc": "250 Вт, круг 125 мм."},
  {"id": 17, "name": "Ленточная шлифмашина Makita 9911", "cat": "Шлифовка и обработка", "icon": "🧽", "price": 350, "deposit": 5000, "desc": "650 Вт, лента 76×457."},
  {"id": 18, "name": "Шлифмашина для стен «жираф»", "cat": "Шлифовка и обработка", "icon": "🧽", "price": 900, "deposit": 15000, "desc": "750 Вт, круг 225 мм, телескоп."},
  {"id": 19, "name": "Рубанок электрический Bosch GHO 6500", "cat": "Шлифовка и обработка", "icon": "🧽", "price": 350, "deposit": 5000, "desc": "650 Вт, ширина 82 мм."},
  {"id": 20, "name": "Фрезер Makita RP0900", "cat": "Шлифовка и обработка", "icon": "🧽", "price": 450, "deposit": 6000, "desc": "900 Вт, цанга 8 мм."},
  {"id": 21, "name": "Фен строительный Bosch GHG 20-63", "cat": "Шлифовка и обработка", "icon": "🧽", "price": 200, "deposit": 2500, "desc": "2000 Вт, до 630 °C."},
  {"id": 22, "name": "Лазерный нивелир Bosch GLL 3-80", "cat": "Измерительный инструмент", "icon": "📐", "price": 600, "deposit": 15000, "desc": "3 плоскости 360°, до 30 м."},
  {"id": 23, "name": "Лазерный уровень ADA Cube 3-360", "cat": "Измерительный инструмент", "icon": "📐", "price": 500, "deposit": 10000, "desc": "Зелёный луч, 3D."},
  {"id": 24, "name": "Лазерный дальномер Bosch GLM 50", "cat": "Измерительный инструмент", "icon": "📐", "price": 250, "deposit": 5000, "desc": "До 50 м, точность ±1.5 мм."},
  {"id": 25, "name": "Оптический нивелир с треногой и рейкой", "cat": "Измерительный инструмент", "icon": "📐", "price": 500, "deposit": 10000, "desc": "Увеличение 24×, для разметки участка."},
  {"id": 26, "name": "Детектор проводки и металла Bosch", "cat": "Измерительный инструмент", "icon": "📐", "price": 250, "deposit": 5000, "desc": "Поиск проводки, металла, дерева."},
  {"id": 27, "name": "Тепловизор строительный", "cat": "Измерительный инструмент", "icon": "📐", "price": 1500, "deposit": 40000, "desc": "Поиск утечек тепла и мостиков холода."},
  {"id": 28, "name": "Бетономешалка 160 л", "cat": "Строительное оборудование", "icon": "🏗️", "price": 900, "deposit": 12000, "desc": "700 Вт, чугунный венец."},
  {"id": 29, "name": "Виброплита 90 кг", "cat": "Строительное оборудование", "icon": "🏗️", "price": 1800, "deposit": 30000, "desc": "Уплотнение грунта, щебня, плитки."},
  {"id": 30, "name": "Глубинный вибратор для бетона", "cat": "Строительное оборудование", "icon": "🏗️", "price": 700, "deposit": 10000, "desc": "Булава 38 мм, вал 4 м."},
  {"id": 31, "name": "Затирочная машина по бетону", "cat": "Строительное оборудование", "icon": "🏗️", "price": 2500, "deposit": 40000, "desc": "Диаметр 900 мм, бензин."},
  {"id": 32, "name": "Строительные леса (секция)", "cat": "Строительное оборудование", "icon": "🏗️", "price": 200, "deposit": 3000, "desc": "Рамные, высота 2 м."},
  {"id": 33, "name": "Вышка-тура 5 м", "cat": "Строительное оборудование", "icon": "🏗️", "price": 1200, "deposit": 20000, "desc": "Алюминий, на колёсах."},
  {"id": 34, "name": "Лестница-трансформер 4×4", "cat": "Строительное оборудование", "icon": "🏗️", "price": 300, "deposit": 5000, "desc": "Алюминий, до 4.5 м."},
  {"id": 35, "name": "Тепловая пушка электрическая 5 кВт", "cat": "Строительное оборудование", "icon": "🏗️", "price": 500, "deposit": 7000, "desc": "380 В, для просушки и обогрева."},
  {"id": 36, "name": "Осушитель воздуха строительный", "cat": "Строительное оборудование", "icon": "🏗️", "price": 900, "deposit": 15000, "desc": "До 50 л/сутки."},
  {"id": 37, "name": "Сварочный инвертор Ресанта САИ-220", "cat": "Сварка и пайка", "icon": "🔥", "price": 500, "deposit": 7000, "desc": "220 А, электроды до 5 мм."},
  {"id": 38, "name": "Сварочный полуавтомат MIG-200", "cat": "Сварка и пайка", "icon": "🔥", "price": 900, "deposit": 15000, "desc": "Без газа и с газом."},
  {"id": 39, "name": "Аппарат для пайки полипропиленовых труб", "cat": "Сварка и пайка", "icon": "🔥", "price": 300, "deposit": 4000, "desc": "Насадки 20–63 мм."},
  {"id": 40, "name": "Маска сварщика «хамелеон»", "cat": "Сварка и пайка", "icon": "🔥", "price": 150, "deposit": 3000, "desc": "Автозатемнение."},
  {"id": 41, "name": "Компрессор масляный 50 л", "cat": "Пневмоинструмент и компрессоры", "icon": "💨", "price": 700, "deposit": 12000, "desc": "2 кВт, 260 л/мин."},
  {"id": 42, "name": "Краскопульт пневматический HVLP", "cat": "Пневмоинструмент и компрессоры", "icon": "💨", "price": 250, "deposit": 3000, "desc": "Сопло 1.4 мм."},
  {"id": 43, "name": "Нейлер (гвоздезабивной пистолет)", "cat": "Пневмоинструмент и компрессоры", "icon": "💨", "price": 450, "deposit": 7000, "desc": "Гвозди 15–50 мм."},
  {"id": 44, "name": "Краскопульт электрический Wagner", "cat": "Пневмоинструмент и компрессоры", "icon": "💨", "price": 450, "deposit": 7000, "desc": "600 Вт, для стен и фасадов."},
  {"id": 45, "name": "Бензопила Stihl MS 180", "cat": "Садовая техника", "icon": "🌿", "price": 700, "deposit": 10000, "desc": "1.5 кВт, шина 35 см."},
  {"id": 46, "name": "Триммер бензиновый Huter GGT-1500", "cat": "Садовая техника", "icon": "🌿", "price": 500, "deposit": 7000, "desc": "1.5 кВт, нож и леска."},
  {"id": 47, "name": "Газонокосилка бензиновая", "cat": "Садовая техника", "icon": "🌿", "price": 800, "deposit": 15000, "desc": "Ширина 46 см, травосборник."},
  {"id": 48, "name": "Мотоблок бензиновый 7 л.с.", "cat": "Садовая техника", "icon": "🌿", "price": 2000, "deposit": 40000, "desc": "Фрезы, ширина 85 см."},
  {"id": 49, "name": "Мотобур с шнеком 200 мм", "cat": "Садовая техника", "icon": "🌿", "price": 900, "deposit": 12000, "desc": "Для лунок, столбов, свай."},
  {"id": 50, "name": "Культиватор электрический", "cat": "Садовая техника", "icon": "🌿", "price": 500, "deposit": 7000, "desc": "1500 Вт, ширина 40 см."},
  {"id": 51, "name": "Воздуходувка-пылесос", "cat": "Садовая техника", "icon": "🌿", "price": 400, "deposit": 6000, "desc": "Бензин, сбор листьев."},
  {"id": 52, "name": "Измельчитель веток", "cat": "Садовая техника", "icon": "🌿", "price": 700, "deposit": 10000, "desc": "2500 Вт, ветки до 40 мм."},
  {"id": 53, "name": "Бензогенератор 3 кВт", "cat": "Генераторы и насосы", "icon": "⚡", "price": 1200, "deposit": 25000, "desc": "220 В, автономия 10 ч."},
  {"id": 54, "name": "Бензогенератор инверторный 2 кВт", "cat": "Генераторы и насосы", "icon": "⚡", "price": 1100, "deposit": 25000, "desc": "Для чувствительной техники."},
  {"id": 55, "name": "Мотопомпа для чистой воды", "cat": "Генераторы и насосы", "icon": "⚡", "price": 900, "deposit": 12000, "desc": "1000 л/мин."},
  {"id": 56, "name": "Дренажный насос", "cat": "Генераторы и насосы", "icon": "⚡", "price": 400, "deposit": 5000, "desc": "Для грязной воды, 10 м³/ч."},
  {"id": 57, "name": "Удлинитель на катушке 50 м", "cat": "Генераторы и насосы", "icon": "⚡", "price": 150, "deposit": 2500, "desc": "3×1.5 мм², 4 розетки."},
  {"id": 58, "name": "Строительный пылесос Karcher WD 6", "cat": "Клининг", "icon": "🧹", "price": 500, "deposit": 8000, "desc": "1300 Вт, бак 30 л."},
  {"id": 59, "name": "Мойка высокого давления Karcher K5", "cat": "Клининг", "icon": "🧹", "price": 600, "deposit": 10000, "desc": "145 бар, для авто и фасадов."},
  {"id": 60, "name": "Моющий пылесос Karcher SE 4001", "cat": "Клининг", "icon": "🧹", "price": 700, "deposit": 12000, "desc": "Химчистка мебели и ковров."},
  {"id": 61, "name": "Парогенератор Karcher SC 4", "cat": "Клининг", "icon": "🧹", "price": 500, "deposit": 8000, "desc": "Чистка паром без химии."},
  {"id": 62, "name": "Набор инструментов 108 предметов", "cat": "Ручной инструмент", "icon": "🔧", "price": 200, "deposit": 4000, "desc": "Головки, ключи, биты, кейс."},
  {"id": 63, "name": "Труборез и трубогиб набор", "cat": "Ручной инструмент", "icon": "🔧", "price": 250, "deposit": 4000, "desc": "Медь, металлопласт."},
  {"id": 64, "name": "Кувалда 5 кг + лом", "cat": "Ручной инструмент", "icon": "🔧", "price": 100, "deposit": 1500, "desc": "Для демонтажа."},
  {"id": 65, "name": "Ручной плиткорез 600 мм", "cat": "Ручной инструмент", "icon": "🔧", "price": 250, "deposit": 4000, "desc": "Резка до 12 мм."},
  {"id": 66, "name": "Степлер строительный + скобы", "cat": "Ручной инструмент", "icon": "🔧", "price": 100, "deposit": 1500, "desc": "Обивка, утепление."}
];
const DAYS = [1,2,3,5,7,14,30];
const discount = d => d >= 7 ? .2 : d >= 3 ? .1 : 0;
const rub = n => Math.round(n).toLocaleString("ru-RU") + " ₽";
const $ = s => document.querySelector(s);

let activeCat = "Все", query = "";
let cart = [];
try { cart = JSON.parse(localStorage.getItem("toolvex-cart")) || []; } catch {}
const save = () => { try { localStorage.setItem("toolvex-cart", JSON.stringify(cart)); } catch {} };

function renderChips(){
  const cats = ["Все", ...new Set(TOOLS.map(t => t.cat))];
  $("#chips").innerHTML = cats.map(c => `<button class="chip${c===activeCat?" active":""}" data-cat="${c}">${c}</button>`).join("");
}
function renderGrid(){
  const q = query.toLowerCase();
  const list = TOOLS.filter(t => (activeCat==="Все"||t.cat===activeCat) && (t.name+t.desc).toLowerCase().includes(q));
  $("#grid").innerHTML = list.length ? list.map(t => `
    <article class="card">
      <div class="card__img">${t.icon}</div>
      <span class="card__cat">${t.cat}</span>
      <h3>${t.name}</h3>
      <p>${t.desc}</p>
      <div class="card__price">${rub(t.price)} <small>/ сутки · залог ${rub(t.deposit)}</small></div>
      <div class="card__row">
        <select id="d${t.id}">${DAYS.map(d=>`<option value="${d}">${d} дн.</option>`).join("")}</select>
        <button class="btn btn--primary" data-add="${t.id}">В корзину</button>
      </div>
    </article>`).join("") : `<p class="empty">Ничего не найдено</p>`;
}
function renderCart(){
  $("#cartCount").textContent = cart.length;
  let total = 0, dep = 0;
  $("#cartItems").innerHTML = cart.length ? cart.map((c,i) => {
    const t = TOOLS.find(x => x.id === c.id);
    const sum = t.price * c.days * (1 - discount(c.days));
    total += sum; dep += t.deposit;
    return `<div class="ci"><span class="ci__icon">${t.icon}</span>
      <div class="ci__info">${t.name}<small>${c.days} дн. · залог ${rub(t.deposit)}${discount(c.days)?` · скидка ${discount(c.days)*100}%`:""} · ${rub(sum)}</small></div>
      <button data-del="${i}" aria-label="Удалить">✕</button></div>`;
  }).join("") : `<p class="empty">Корзина пуста</p>`;
  $("#cartTotal").textContent = rub(total) + (dep ? ` + залог ${rub(dep)}` : "");
}
function toast(msg){ const el=$("#toast"); el.textContent=msg; el.classList.add("show"); setTimeout(()=>el.classList.remove("show"),2500); }
function toggleCart(open){ $("#cart").classList.toggle("open",open); $("#overlay").classList.toggle("show",open); }

document.addEventListener("click", e => {
  const cat = e.target.dataset.cat, add = e.target.dataset.add, del = e.target.dataset.del;
  if (cat){ activeCat = cat; renderChips(); renderGrid(); }
  if (add){ cart.push({id:+add, days:+$("#d"+add).value}); save(); renderCart(); toast("Добавлено в корзину"); }
  if (del !== undefined){ cart.splice(+del,1); save(); renderCart(); }
});
$("#search").addEventListener("input", e => { query = e.target.value; renderGrid(); });
$("#cartBtn").onclick = () => toggleCart(true);
$("#cartClose").onclick = $("#overlay").onclick = () => toggleCart(false);
$("#burger").onclick = () => $("#nav").classList.toggle("open");
$("#nav").addEventListener("click", () => $("#nav").classList.remove("open"));
$("#orderForm").addEventListener("submit", e => {
  e.preventDefault();
  if (!cart.length) return toast("Добавьте инструменты в корзину");
  // TODO: отправка заявки на сервер / в Telegram
  cart = []; save(); renderCart(); e.target.reset(); toggleCart(false);
  toast("Заявка отправлена! Мы перезвоним в течение 10 минут");
});
$("#year").textContent = new Date().getFullYear();
renderChips(); renderGrid(); renderCart();
