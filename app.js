const TOOLS = [
  {id:1,name:"Перфоратор Bosch GBH 2-26",cat:"Электроинструмент",icon:"🔨",price:500,desc:"SDS-plus, 800 Вт, 2.7 Дж. Для бетона и кирпича."},
  {id:2,name:"Дрель-шуруповёрт Makita",cat:"Электроинструмент",icon:"🪛",price:350,desc:"18 В, 2 аккумулятора, кейс в комплекте."},
  {id:3,name:"Болгарка 230 мм",cat:"Электроинструмент",icon:"⚙️",price:450,desc:"2200 Вт, плавный пуск, защитный кожух."},
  {id:4,name:"Отбойный молоток 15 Дж",cat:"Электроинструмент",icon:"⛏️",price:1200,desc:"Демонтаж стяжки, плитки, кладки."},
  {id:5,name:"Бетономешалка 160 л",cat:"Строительное",icon:"🏗️",price:900,desc:"700 Вт, чугунный венец, на колёсах."},
  {id:6,name:"Виброплита 90 кг",cat:"Строительное",icon:"🧱",price:1800,desc:"Уплотнение грунта, щебня и песка."},
  {id:7,name:"Строительные леса (секция)",cat:"Строительное",icon:"🪜",price:150,desc:"Рамные, 2×1.5 м, с настилом."},
  {id:8,name:"Генератор бензиновый 5 кВт",cat:"Энергетика",icon:"⚡",price:1500,desc:"Электростартер, 220/380 В."},
  {id:9,name:"Сварочный инвертор 200 А",cat:"Энергетика",icon:"🔥",price:700,desc:"MMA, электроды 1.6–5 мм."},
  {id:10,name:"Тепловая пушка 9 кВт",cat:"Энергетика",icon:"🌡️",price:600,desc:"Обогрев и сушка помещений."},
  {id:11,name:"Бензопила Stihl MS 250",cat:"Сад",icon:"🪚",price:800,desc:"Шина 40 см, для дров и спила деревьев."},
  {id:12,name:"Триммер бензиновый",cat:"Сад",icon:"🌿",price:500,desc:"Леска и нож, ремень-разгрузка."},
  {id:13,name:"Мойка высокого давления Karcher",cat:"Клининг",icon:"💦",price:700,desc:"130 бар, для авто, фасадов, дорожек."},
  {id:14,name:"Строительный пылесос",cat:"Клининг",icon:"🌀",price:550,desc:"30 л, влажная и сухая уборка."},
  {id:15,name:"Лазерный нивелир",cat:"Измерения",icon:"📐",price:400,desc:"Зелёный луч, 360°, штатив в комплекте."},
  {id:16,name:"Плиткорез электрический",cat:"Электроинструмент",icon:"🔪",price:900,desc:"Водяное охлаждение, рез до 1200 мм."},
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
      <div class="card__price">${rub(t.price)} <small>/ сутки</small></div>
      <div class="card__row">
        <select id="d${t.id}">${DAYS.map(d=>`<option value="${d}">${d} дн.</option>`).join("")}</select>
        <button class="btn btn--primary" data-add="${t.id}">В корзину</button>
      </div>
    </article>`).join("") : `<p class="empty">Ничего не найдено</p>`;
}
function renderCart(){
  $("#cartCount").textContent = cart.length;
  let total = 0;
  $("#cartItems").innerHTML = cart.length ? cart.map((c,i) => {
    const t = TOOLS.find(x => x.id === c.id);
    const sum = t.price * c.days * (1 - discount(c.days));
    total += sum;
    return `<div class="ci"><span class="ci__icon">${t.icon}</span>
      <div class="ci__info">${t.name}<small>${c.days} дн.${discount(c.days)?` · скидка ${discount(c.days)*100}%`:""} · ${rub(sum)}</small></div>
      <button data-del="${i}" aria-label="Удалить">✕</button></div>`;
  }).join("") : `<p class="empty">Корзина пуста</p>`;
  $("#cartTotal").textContent = rub(total);
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
