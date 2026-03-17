/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Icon from "@/components/ui/icon";

const slides = [
  {
    id: 1,
    label: "01 / Титульная",
    title: "Телевизионная реклама",
    subtitle: "Теория и практика рекламы",
    type: "title",
    content: null,
  },
  {
    id: 2,
    label: "02 / Введение",
    title: "Введение",
    type: "intro",
    content: {
      text: "Реклама — один из ключевых элементов маркетинговых коммуникаций. Телевидение на протяжении десятилетий остаётся наиболее влиятельным рекламным каналом, формируя восприятие брендов и потребительское поведение миллионов людей.",
      points: [
        "Реклама как элемент маркетинговых коммуникаций",
        "Актуальность телевизионной рекламы в эпоху цифровизации",
        "Цель: изучить природу, структуру и эффективность ТВ-рекламы",
      ],
      extra: {
        title: "Контекст",
        text: "По данным исследований, телевидение по-прежнему охватывает более 90% взрослого населения России, несмотря на рост цифровых медиа. ТВ-реклама формирует до 60% знания о новых продуктах.",
      },
    },
  },
  {
    id: 3,
    label: "03 / Определения",
    title: "Понятие телевизионной рекламы",
    type: "definition",
    content: {
      definition:
        "Телевизионная реклама — вид рекламы, распространяемой посредством телевещания, сочетающей аудиальные и визуальные элементы для воздействия на целевую аудиторию.",
      characteristics: [
        { icon: "Eye", label: "Аудиовизуальность", desc: "Сочетание звука, изображения и движения" },
        { icon: "Users", label: "Массовый охват", desc: "Одновременный контакт с миллионами зрителей" },
        { icon: "Heart", label: "Эмоциональное воздействие", desc: "Формирование образов и ассоциаций" },
        { icon: "Clock", label: "Кратковременность", desc: "Форматы от 5 до 60 секунд" },
      ],
      extra: {
        title: "Из истории",
        text: "Первая телевизионная реклама вышла в эфир 1 июля 1941 года в США — ролик часовой компании Bulova длиной 10 секунд. В СССР первые рекламные ролики появились в 1964 году на Первой программе ЦТ.",
      },
    },
  },
  {
    id: 4,
    label: "04 / Функции",
    title: "Функции телевизионной рекламы",
    type: "functions",
    content: {
      functions: [
        { num: "01", title: "Информирующая", desc: "Сообщает о новых продуктах, услугах, свойствах и условиях приобретения" },
        { num: "02", title: "Убеждающая", desc: "Формирует предпочтения, побуждает к покупке через аргументы и эмоции" },
        { num: "03", title: "Напоминающая", desc: "Поддерживает осведомлённость о бренде, стимулирует повторные покупки" },
        { num: "04", title: "Имиджевая", desc: "Создаёт и укрепляет образ бренда, формирует долгосрочные ассоциации" },
      ],
      extra: {
        title: "Иерархия функций",
        text: "В современной практике имиджевая и эмоциональная функции выходят на первый план. Исследования нейромаркетинга показывают: решение о покупке на 70–80% определяется эмоциональными, а не рациональными факторами.",
      },
    },
  },
  {
    id: 5,
    label: "05 / Виды",
    title: "Виды телевизионной рекламы",
    type: "types",
    content: {
      types: [
        { title: "Рекламные ролики", desc: "Короткие видеосюжеты (5–60 сек.), транслируемые в рекламных блоках", tag: "Основной формат" },
        { title: "Спонсорство", desc: "Финансирование программ или передач с упоминанием спонсора", tag: "Интеграция" },
        { title: "Product Placement", desc: "Органичное включение продукта в сюжет программы или фильма", tag: "Нативный" },
        { title: "Телемагазины", desc: "Развёрнутые рекламные программы с демонстрацией и продажей товаров", tag: "Длинный формат" },
      ],
      extra: {
        title: "Тренд: интеграция форматов",
        text: "Современные рекламодатели всё чаще комбинируют несколько форматов: спонсорство обеспечивает имидж, ролики — прямой призыв к действию, product placement — органичное присутствие бренда.",
      },
    },
  },
  {
    id: 6,
    label: "06 / Преимущества",
    title: "Преимущества",
    type: "pros",
    content: {
      items: [
        { num: "1", text: "Широкий охват аудитории — доступ к миллионам зрителей одновременно" },
        { num: "2", text: "Сильное аудиовизуальное воздействие — сочетание звука, картинки и движения" },
        { num: "3", text: "Высокий уровень доверия — зрители доверяют ТВ как авторитетному источнику" },
        { num: "4", text: "Формирование имиджа бренда — мощный инструмент брендинга" },
        { num: "5", text: "Демонстрация продукта в действии — показывает товар в реальных условиях" },
        { num: "6", text: "Выбор времени показа — прайм-тайм обеспечивает максимальный охват" },
      ],
      extra: {
        title: "Ключевое преимущество",
        text: "ТВ-реклама обладает уникальной способностью создавать культурные феномены: слоганы и образы из телерекламы становятся частью массового сознания. Этот эффект практически недостижим для других каналов.",
      },
    },
  },
  {
    id: 7,
    label: "07 / Недостатки",
    title: "Недостатки",
    type: "cons",
    content: {
      items: [
        { num: "1", text: "Высокая стоимость производства и размещения рекламы" },
        { num: "2", text: "Ограниченные возможности таргетинга целевой аудитории" },
        { num: "3", text: "Перегруженность рекламного эфира — конкуренция за внимание" },
        { num: "4", text: "Кратковременность рекламного контакта — зритель видит ролик секунды" },
        { num: "5", text: "Снижение интереса к телевидению среди молодёжи" },
        { num: "6", text: "Эффект zapping — переключение каналов во время рекламных блоков" },
        { num: "7", text: "Отсутствие мгновенной обратной связи с аудиторией" },
      ],
      extra: {
        title: "Стоимость размещения",
        text: "Стоимость одного рекламного выхода в прайм-тайм на федеральном канале России составляет от 500 тыс. до 3 млн рублей. Производство качественного ролика — от 1 до 10 млн рублей.",
      },
    },
  },
  {
    id: 8,
    label: "08 / Эффективность",
    title: "Показатели эффективности",
    type: "metrics",
    content: {
      metrics: [
        { label: "GRP", full: "Gross Rating Point", desc: "Суммарный рейтинг — совокупный охват аудитории кампании" },
        { label: "Reach", full: "Охват", desc: "Доля аудитории, увидевшей рекламу хотя бы один раз" },
        { label: "Frequency", full: "Частота", desc: "Среднее число контактов одного зрителя с рекламой" },
        { label: "CPT", full: "Cost per Thousand", desc: "Стоимость охвата тысячи зрителей" },
        { label: "ROI", full: "Return on Investment", desc: "Окупаемость рекламных вложений" },
      ],
      formula: "GRP = Reach × Frequency",
      extra: {
        title: "Методики оценки",
        text: "Для измерения эффективности ТВ-рекламы применяются панельные исследования (Mediascope), постпокупочные опросы, анализ продаж и нейромаркетинговые тесты. Комплексный подход даёт наиболее точную картину.",
      },
    },
  },
  {
    id: 9,
    label: "09 / Тенденции",
    title: "Современные тенденции",
    type: "trends",
    content: {
      trends: [
        { icon: "Smartphone", title: "Digital-интеграция", desc: "ТВ-кампании синхронизируются с онлайн-рекламой для максимального охвата и последовательного контакта" },
        { icon: "Tv", title: "Smart TV", desc: "Интерактивная реклама на smart-телевизорах открывает возможности таргетинга и измерения" },
        { icon: "Target", title: "Персонализация", desc: "Адресная ТВ-реклама (Addressable TV) позволяет показывать разные ролики разным домохозяйствам" },
        { icon: "BarChart2", title: "Data-driven подход", desc: "Большие данные меняют планирование: решения принимаются на основе детальной аналитики" },
      ],
      extra: {
        title: "Будущее ТВ-рекламы",
        text: "Конвергенция традиционного и цифрового телевидения ведёт к появлению гибридных форматов. К 2027 году более 40% ТВ-рекламы в развитых странах будет адресной с точным таргетингом.",
      },
    },
  },
  {
    id: 10,
    label: "10 / Заключение",
    title: "Заключение",
    type: "conclusion",
    content: {
      points: [
        "ТВ-реклама остаётся мощнейшим инструментом массового воздействия",
        "Уникальное сочетание охвата, эмоциональности и доверия аудитории",
        "Высокая стоимость требует тщательного планирования и измерения",
        "Интеграция с цифровыми каналами — ключ к эффективности в новой среде",
        "Персонализация и данные определяют будущее телевизионной рекламы",
      ],
      quote: "Телевидение — это зеркало, которое отражает не реальность, а образы, которые хотят продать.",
      extra: {
        title: "Итоговый вывод",
        text: "Несмотря на вызовы цифровой эпохи, телевизионная реклама сохраняет уникальные конкурентные преимущества. Будущее — за гибридными стратегиями, объединяющими масштаб ТВ с точностью digital.",
      },
    },
  },
];

function ExpandableBlock({ title, text }: { title: string; text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gray-200 mt-6 pt-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-gray-700 transition-colors w-full text-left"
      >
        <span className="inline-block transition-transform duration-300" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}>
          <Icon name="Plus" size={12} />
        </span>
        {title}
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "160px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p className="text-sm text-gray-500 leading-relaxed mt-3 pr-4" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{text}</p>
      </div>
    </div>
  );
}

function SlideTitle({ slide }: { slide: (typeof slides)[0] }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-16 w-full">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-10" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
        Теория и практика рекламы
      </p>
      <h1 className="text-7xl font-light text-gray-900 leading-tight mb-6" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>
        {slide.title}
      </h1>
      <div className="w-16 h-px bg-gray-300 mb-6" />
      <p className="text-sm text-gray-400 tracking-wide" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{slide.subtitle}</p>
    </div>
  );
}

function SlideIntro({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as any;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-4xl w-full">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-3" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{slide.label}</p>
      <h2 className="text-5xl font-light text-gray-900 mb-8" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{slide.title}</h2>
      <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{c.text}</p>
      <ul className="space-y-3">
        {c.points.map((p: string, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-lg text-gray-300 mt-0.5" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-gray-700" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{p}</span>
          </li>
        ))}
      </ul>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

function SlideDefinition({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as any;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-3" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{slide.label}</p>
      <h2 className="text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{slide.title}</h2>
      <div className="border-l-2 border-gray-200 pl-5 mb-8">
        <p className="italic text-xl text-gray-600 leading-relaxed" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{c.definition}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {c.characteristics.map((ch: any, i: number) => (
          <div key={i} className="flex gap-3 p-4 border border-gray-100 rounded-sm hover:border-gray-300 transition-colors">
            <div className="mt-0.5 text-gray-400">
              <Icon name={ch.icon} size={16} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{ch.label}</p>
              <p className="text-xs text-gray-500" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{ch.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

function SlideFunctions({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as any;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-3" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{slide.label}</p>
      <h2 className="text-5xl font-light text-gray-900 mb-8" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{slide.title}</h2>
      <div className="grid grid-cols-2 gap-5">
        {c.functions.map((fn: any, i: number) => (
          <div key={i} className="group">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl text-gray-200 group-hover:text-gray-400 transition-colors" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{fn.num}</span>
              <span className="text-sm font-medium text-gray-800" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{fn.title}</span>
            </div>
            <div className="ml-10 border-t border-gray-100 pt-2">
              <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{fn.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

function SlideTypes({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as any;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-3" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{slide.label}</p>
      <h2 className="text-5xl font-light text-gray-900 mb-8" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{slide.title}</h2>
      <div className="space-y-3">
        {c.types.map((t: any, i: number) => (
          <div key={i} className="flex items-start gap-5 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <span className="text-lg text-gray-300 mt-0.5 w-6 flex-shrink-0" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{String(i + 1).padStart(2, "0")}</span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-medium text-gray-800" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{t.title}</span>
                <span className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-sm" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{t.tag}</span>
              </div>
              <p className="text-xs text-gray-500" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

function SlidePros({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as any;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-3" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{slide.label}</p>
      <h2 className="text-5xl font-light text-gray-900 mb-8" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{slide.title}</h2>
      <div className="grid grid-cols-2 gap-x-12 gap-y-4">
        {c.items.map((item: any, i: number) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-lg text-gray-300 flex-shrink-0 w-5" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{item.num}</span>
            <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{item.text}</p>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

function SlideCons({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as any;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-3" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{slide.label}</p>
      <h2 className="text-5xl font-light text-gray-900 mb-8" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{slide.title}</h2>
      <div className="space-y-3">
        {c.items.map((item: any, i: number) => (
          <div key={i} className="flex items-start gap-4 py-2 border-b border-gray-50">
            <span className="text-lg text-gray-300 flex-shrink-0 w-5" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{item.num}</span>
            <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{item.text}</p>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

function SlideMetrics({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as any;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-3" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{slide.label}</p>
      <h2 className="text-5xl font-light text-gray-900 mb-6" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{slide.title}</h2>
      <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gray-50 border border-gray-100 rounded-sm w-fit">
        <span className="text-xs text-gray-400 uppercase tracking-widest" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>Формула</span>
        <span className="italic text-xl text-gray-700" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{c.formula}</span>
      </div>
      <div className="space-y-2">
        {c.metrics.map((m: any, i: number) => (
          <div key={i} className="flex items-start gap-5 py-3 border-b border-gray-100">
            <span className="text-2xl font-light text-gray-800 w-24 flex-shrink-0" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{m.label}</span>
            <div>
              <p className="text-xs text-gray-400 mb-0.5" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{m.full}</p>
              <p className="text-sm text-gray-600" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

function SlideTrends({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as any;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-3" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{slide.label}</p>
      <h2 className="text-5xl font-light text-gray-900 mb-8" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{slide.title}</h2>
      <div className="grid grid-cols-2 gap-4">
        {c.trends.map((t: any, i: number) => (
          <div key={i} className="p-5 border border-gray-100 hover:border-gray-300 transition-colors group">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-400 group-hover:text-gray-600 transition-colors">
                <Icon name={t.icon} size={16} />
              </span>
              <span className="text-sm font-medium text-gray-800" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{t.title}</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{t.desc}</p>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

function SlideConclusion({ slide }: { slide: (typeof slides)[0] }) {
  const c = slide.content as any;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-4xl w-full">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-3" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{slide.label}</p>
      <h2 className="text-5xl font-light text-gray-900 mb-8" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{slide.title}</h2>
      <ul className="space-y-3 mb-8">
        {c.points.map((p: string, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-lg text-gray-300 mt-0.5" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>{p}</span>
          </li>
        ))}
      </ul>
      <div className="border-l-2 border-gray-200 pl-5">
        <p className="italic text-lg text-gray-500" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>{c.quote}</p>
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

function renderSlide(slide: (typeof slides)[0]) {
  switch (slide.type) {
    case "title": return <SlideTitle slide={slide} />;
    case "intro": return <SlideIntro slide={slide} />;
    case "definition": return <SlideDefinition slide={slide} />;
    case "functions": return <SlideFunctions slide={slide} />;
    case "types": return <SlideTypes slide={slide} />;
    case "pros": return <SlidePros slide={slide} />;
    case "cons": return <SlideCons slide={slide} />;
    case "metrics": return <SlideMetrics slide={slide} />;
    case "trends": return <SlideTrends slide={slide} />;
    case "conclusion": return <SlideConclusion slide={slide} />;
    default: return null;
  }
}

const Index = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
      {/* Top bar */}
      <header className="flex items-center justify-between px-10 py-5 border-b border-gray-100 flex-shrink-0">
        <span className="text-xs tracking-widest uppercase text-gray-400" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>
          Телевизионная реклама
        </span>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-1.5 rounded-full transition-all duration-300 bg-gray-200 hover:bg-gray-400"
              style={{ width: i === current ? "16px" : "6px", backgroundColor: i === current ? "#1f2937" : undefined }}
              title={slides[i].label}
            />
          ))}
        </div>
        <span className="text-sm text-gray-400" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </header>

      {/* Slide content */}
      <main className="flex-1 flex overflow-hidden min-h-0">
        <div
          key={current}
          className="flex-1 flex overflow-y-auto"
          style={{ animation: "fadeSlide 0.35s ease forwards" }}
        >
          {renderSlide(slide)}
        </div>

        {/* Side line decoration */}
        <div className="hidden lg:flex flex-col items-center justify-center w-14 border-l border-gray-100 gap-2 flex-shrink-0">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-px transition-all duration-500 rounded-full"
              style={{
                height: i === current ? "48px" : "10px",
                backgroundColor: i === current ? "#1f2937" : "#e5e7eb"
              }}
            />
          ))}
        </div>
      </main>

      {/* Bottom navigation */}
      <footer className="flex items-center justify-between px-10 py-5 border-t border-gray-100 flex-shrink-0">
        <button
          onClick={prev}
          disabled={current === 0}
          className="flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 hover:text-gray-800 disabled:opacity-20 transition-colors"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          <Icon name="ArrowLeft" size={14} />
          Назад
        </button>

        <span className="italic text-sm text-gray-400" style={{ fontFamily: "'Cormorant', Georgia, serif" }}>
          {slide.label.split(" / ")[1]}
        </span>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 hover:text-gray-800 disabled:opacity-20 transition-colors"
          style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
        >
          Далее
          <Icon name="ArrowRight" size={14} />
        </button>
      </footer>

      <style>{`
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(12px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default Index;