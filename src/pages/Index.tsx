/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { slides } from "@/components/presentation/slides";

const CORMORANT = "'Cormorant', Georgia, serif";
const IBM = "'IBM Plex Sans', sans-serif";

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
      <div className="overflow-hidden transition-all duration-300 ease-in-out" style={{ maxHeight: open ? "160px" : "0px", opacity: open ? 1 : 0 }}>
        <p className="text-sm text-gray-500 leading-relaxed mt-3 pr-4" style={{ fontFamily: IBM }}>{text}</p>
      </div>
    </div>
  );
}

function Label({ text }: { text: string }) {
  return <p className="text-xs tracking-widest uppercase text-gray-400 mb-3" style={{ fontFamily: IBM }}>{text}</p>;
}

function Title({ text, size = "5xl" }: { text: string; size?: string }) {
  return <h2 className={`text-${size} font-light text-gray-900 mb-8`} style={{ fontFamily: CORMORANT }}>{text}</h2>;
}

// ── Слайд 1: Титульный ──────────────────────────────────────────────────────
function SlideTitle({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-16 w-full">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-10" style={{ fontFamily: IBM }}>
        Теория и практика рекламы
      </p>
      <h1 className="text-7xl font-light text-gray-900 leading-tight mb-6" style={{ fontFamily: CORMORANT }}>
        {slide.title}
      </h1>
      <div className="w-16 h-px bg-gray-300 mb-6" />
      <p className="text-sm text-gray-400 tracking-wide mb-8" style={{ fontFamily: IBM }}>{slide.subtitle}</p>
      {c && (
        <div className="flex flex-col items-center gap-1">
          <p className="text-sm text-gray-600" style={{ fontFamily: IBM }}>{c.author}</p>
          <p className="text-xs text-gray-400" style={{ fontFamily: IBM }}>Группа {c.group}</p>
        </div>
      )}
    </div>
  );
}

// ── Слайд 2: Введение ────────────────────────────────────────────────────────
function SlideIntro({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-4xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <p className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl" style={{ fontFamily: IBM }}>{c.text}</p>
      <ul className="space-y-3">
        {c.points.map((p: string, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-lg text-gray-300 mt-0.5" style={{ fontFamily: CORMORANT }}>{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-gray-700" style={{ fontFamily: IBM }}>{p}</span>
          </li>
        ))}
      </ul>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Слайд 3: Определение ─────────────────────────────────────────────────────
function SlideDefinition({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} size="5xl" />
      <div className="border-l-2 border-gray-200 pl-5 mb-8">
        <p className="italic text-xl text-gray-600 leading-relaxed" style={{ fontFamily: CORMORANT }}>{c.definition}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {c.characteristics.map((ch: any, i: number) => (
          <div key={i} className="flex gap-3 p-4 border border-gray-100 rounded-sm hover:border-gray-300 transition-colors">
            <div className="mt-0.5 text-gray-400"><Icon name={ch.icon} size={16} /></div>
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1" style={{ fontFamily: IBM }}>{ch.label}</p>
              <p className="text-xs text-gray-500" style={{ fontFamily: IBM }}>{ch.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Слайд 4: Функции ─────────────────────────────────────────────────────────
function SlideFunctions({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="grid grid-cols-2 gap-5">
        {c.functions.map((fn: any, i: number) => (
          <div key={i} className="group">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl text-gray-200 group-hover:text-gray-400 transition-colors" style={{ fontFamily: CORMORANT }}>{fn.num}</span>
              <span className="text-sm font-medium text-gray-800" style={{ fontFamily: IBM }}>{fn.title}</span>
            </div>
            <div className="ml-10 border-t border-gray-100 pt-2">
              <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: IBM }}>{fn.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Слайд 5: Виды ────────────────────────────────────────────────────────────
function SlideTypes({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="space-y-3">
        {c.types.map((t: any, i: number) => (
          <div key={i} className="flex items-start gap-5 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <span className="text-lg text-gray-300 mt-0.5 w-6 flex-shrink-0" style={{ fontFamily: CORMORANT }}>{String(i + 1).padStart(2, "0")}</span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-medium text-gray-800" style={{ fontFamily: IBM }}>{t.title}</span>
                <span className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-sm" style={{ fontFamily: IBM }}>{t.tag}</span>
              </div>
              <p className="text-xs text-gray-500" style={{ fontFamily: IBM }}>{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Слайд 6: Форматы ─────────────────────────────────────────────────────────
function SlideFormats({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="space-y-3">
        {c.formats.map((f: any, i: number) => (
          <div key={i} className="flex items-start gap-5 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <span className="text-sm font-medium text-gray-800 w-24 flex-shrink-0 mt-0.5" style={{ fontFamily: CORMORANT }}>{f.duration}</span>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-medium text-gray-800" style={{ fontFamily: IBM }}>{f.name}</span>
              </div>
              <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: IBM }}>{f.desc}</p>
              <p className="text-xs text-gray-400 italic" style={{ fontFamily: CORMORANT }}>Пример: {f.example}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Слайд 7: Преимущества ────────────────────────────────────────────────────
function SlidePros({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="grid grid-cols-2 gap-x-12 gap-y-4">
        {c.items.map((item: any, i: number) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-lg text-gray-300 flex-shrink-0 w-5" style={{ fontFamily: CORMORANT }}>{item.num}</span>
            <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: IBM }}>{item.text}</p>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Слайд 8: Недостатки ──────────────────────────────────────────────────────
function SlideCons({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="space-y-3">
        {c.items.map((item: any, i: number) => (
          <div key={i} className="flex items-start gap-4 py-2 border-b border-gray-50">
            <span className="text-lg text-gray-300 flex-shrink-0 w-5" style={{ fontFamily: CORMORANT }}>{item.num}</span>
            <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: IBM }}>{item.text}</p>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Слайд 9: Сравнение ───────────────────────────────────────────────────────
function SlideComparison({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="border border-gray-100 rounded-sm overflow-hidden">
        <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-100">
          <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-widest" style={{ fontFamily: IBM }}>Критерий</div>
          <div className="px-4 py-2 text-xs font-medium text-gray-800 uppercase tracking-widest border-l border-gray-100" style={{ fontFamily: IBM }}>ТВ</div>
          <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-widest border-l border-gray-100" style={{ fontFamily: IBM }}>Интернет</div>
        </div>
        {c.rows.map((row: any, i: number) => (
          <div key={i} className={`grid grid-cols-3 border-b border-gray-50 ${i % 2 === 0 ? "" : "bg-gray-50/50"}`}>
            <div className="px-4 py-2.5 text-xs text-gray-500" style={{ fontFamily: IBM }}>{row.criterion}</div>
            <div className="px-4 py-2.5 text-xs text-gray-800 border-l border-gray-100" style={{ fontFamily: IBM }}>{row.tv}</div>
            <div className="px-4 py-2.5 text-xs text-gray-500 border-l border-gray-100" style={{ fontFamily: IBM }}>{row.internet}</div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Слайд 10: Целевая аудитория ──────────────────────────────────────────────
function SlideAudience({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="grid grid-cols-2 gap-4">
        {c.segments.map((s: any, i: number) => (
          <div key={i} className="flex gap-3 p-4 border border-gray-100 hover:border-gray-300 transition-colors rounded-sm">
            <div className="mt-0.5 text-gray-400 flex-shrink-0"><Icon name={s.icon} size={16} /></div>
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1" style={{ fontFamily: IBM }}>{s.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: IBM }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Слайд 11: Психология ─────────────────────────────────────────────────────
function SlidePsychology({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="grid grid-cols-2 gap-5">
        {c.aspects.map((a: any, i: number) => (
          <div key={i} className="p-5 border border-gray-100 hover:border-gray-300 transition-colors group">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-400 group-hover:text-gray-600 transition-colors"><Icon name={a.icon} size={16} /></span>
              <span className="text-sm font-medium text-gray-800" style={{ fontFamily: IBM }}>{a.title}</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: IBM }}>{a.desc}</p>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Слайд 12: Этапы ──────────────────────────────────────────────────────────
function SlideSteps({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="grid grid-cols-2 gap-5">
        {c.steps.map((s: any, i: number) => (
          <div key={i} className="group">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl text-gray-200 group-hover:text-gray-400 transition-colors" style={{ fontFamily: CORMORANT }}>{s.num}</span>
              <span className="text-sm font-medium text-gray-800" style={{ fontFamily: IBM }}>{s.title}</span>
            </div>
            <div className="ml-10 border-t border-gray-100 pt-2">
              <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: IBM }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Слайд 13: Показатели ─────────────────────────────────────────────────────
function SlideMetrics({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-gray-50 border border-gray-100 rounded-sm w-fit">
        <span className="text-xs text-gray-400 uppercase tracking-widest" style={{ fontFamily: IBM }}>Формула</span>
        <span className="italic text-xl text-gray-700" style={{ fontFamily: CORMORANT }}>{c.formula}</span>
      </div>
      <div className="space-y-2">
        {c.metrics.map((m: any, i: number) => (
          <div key={i} className="flex items-start gap-5 py-3 border-b border-gray-100">
            <span className="text-2xl font-light text-gray-800 w-24 flex-shrink-0" style={{ fontFamily: CORMORANT }}>{m.label}</span>
            <div>
              <p className="text-xs text-gray-400 mb-0.5" style={{ fontFamily: IBM }}>{m.full}</p>
              <p className="text-sm text-gray-600" style={{ fontFamily: IBM }}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Кейс ─────────────────────────────────────────────────────────────────────
function SlideCase({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <div className="flex items-baseline gap-4 mb-6">
        <h2 className="text-4xl font-light text-gray-900" style={{ fontFamily: CORMORANT }}>{c.brand}</h2>
        <span className="text-sm text-gray-400" style={{ fontFamily: IBM }}>{c.year}</span>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-4">
        <div>
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-2" style={{ fontFamily: IBM }}>Цель</p>
          <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: IBM }}>{c.goal}</p>
        </div>
        <div>
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-2" style={{ fontFamily: IBM }}>Идея</p>
          <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: IBM }}>{c.idea}</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-2" style={{ fontFamily: IBM }}>Результаты</p>
        <ul className="space-y-1.5">
          {c.result.map((r: string, i: number) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-gray-300 mt-0.5" style={{ fontFamily: CORMORANT }}>{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-gray-700" style={{ fontFamily: IBM }}>{r}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-l-2 border-gray-200 pl-4">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-1" style={{ fontFamily: IBM }}>Вывод</p>
        <p className="italic text-base text-gray-500" style={{ fontFamily: CORMORANT }}>{c.lesson}</p>
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Ошибки ───────────────────────────────────────────────────────────────────
function SlideMistakes({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="space-y-3">
        {c.mistakes.map((m: any, i: number) => (
          <div key={i} className="flex gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="mt-0.5 text-gray-400 flex-shrink-0"><Icon name={m.icon} size={15} /></div>
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1" style={{ fontFamily: IBM }}>{m.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: IBM }}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Тенденции ────────────────────────────────────────────────────────────────
function SlideTrends({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="grid grid-cols-2 gap-4">
        {c.trends.map((t: any, i: number) => (
          <div key={i} className="p-5 border border-gray-100 hover:border-gray-300 transition-colors group">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-400 group-hover:text-gray-600 transition-colors"><Icon name={t.icon} size={16} /></span>
              <span className="text-sm font-medium text-gray-800" style={{ fontFamily: IBM }}>{t.title}</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: IBM }}>{t.desc}</p>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Правовое регулирование ───────────────────────────────────────────────────
function SlideLaw({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="space-y-3">
        {c.points.map((p: any, i: number) => (
          <div key={i} className="flex gap-4 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="mt-0.5 text-gray-400 flex-shrink-0"><Icon name={p.icon} size={15} /></div>
            <div>
              <p className="text-sm font-medium text-gray-800 mb-1" style={{ fontFamily: IBM }}>{p.title}</p>
              <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: IBM }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Социальная реклама ───────────────────────────────────────────────────────
function SlideSocial({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-5xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="border-l-2 border-gray-200 pl-5 mb-6">
        <p className="italic text-lg text-gray-600 leading-relaxed" style={{ fontFamily: CORMORANT }}>{c.definition}</p>
      </div>
      <div className="space-y-3">
        {c.examples.map((ex: any, i: number) => (
          <div key={i} className="flex items-start gap-5 p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <span className="text-lg text-gray-300 flex-shrink-0 w-5" style={{ fontFamily: CORMORANT }}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-medium text-gray-800" style={{ fontFamily: IBM }}>{ex.title}</span>
                <span className="text-xs text-gray-400 border border-gray-200 px-2 py-0.5 rounded-sm" style={{ fontFamily: IBM }}>{ex.org}</span>
              </div>
              <p className="text-xs text-gray-500" style={{ fontFamily: IBM }}>{ex.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Заключение ───────────────────────────────────────────────────────────────
function SlideConclusion({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-4xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <ul className="space-y-3 mb-8">
        {c.points.map((p: string, i: number) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-lg text-gray-300 mt-0.5" style={{ fontFamily: CORMORANT }}>{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: IBM }}>{p}</span>
          </li>
        ))}
      </ul>
      <div className="border-l-2 border-gray-200 pl-5">
        <p className="italic text-lg text-gray-500" style={{ fontFamily: CORMORANT }}>{c.quote}</p>
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Список литературы ────────────────────────────────────────────────────────
function SlideReferences({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col justify-center h-full px-16 max-w-4xl w-full">
      <Label text={slide.label} />
      <Title text={slide.title} />
      <div className="space-y-3">
        {c.refs.map((r: any) => (
          <div key={r.num} className="flex items-start gap-4 py-2 border-b border-gray-50">
            <span className="text-lg text-gray-300 flex-shrink-0 w-5" style={{ fontFamily: CORMORANT }}>{r.num}.</span>
            <p className="text-sm text-gray-700 leading-relaxed" style={{ fontFamily: IBM }}>{r.text}</p>
          </div>
        ))}
      </div>
      <ExpandableBlock title={c.extra.title} text={c.extra.text} />
    </div>
  );
}

// ── Спасибо ──────────────────────────────────────────────────────────────────
function SlideThanks({ slide }: { slide: any }) {
  const c = slide.content;
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-16 w-full">
      <p className="text-xs tracking-widest uppercase text-gray-400 mb-10" style={{ fontFamily: IBM }}>
        {c.subject}
      </p>
      <h1 className="text-6xl font-light text-gray-900 leading-tight mb-6" style={{ fontFamily: CORMORANT }}>
        {slide.title}
      </h1>
      <div className="w-16 h-px bg-gray-300 mb-8" />
      <div className="flex flex-col items-center gap-1">
        <p className="text-sm text-gray-600" style={{ fontFamily: IBM }}>{c.author}</p>
        <p className="text-xs text-gray-400" style={{ fontFamily: IBM }}>Группа {c.group}</p>
      </div>
    </div>
  );
}

// ── Роутер слайдов ───────────────────────────────────────────────────────────
function renderSlide(slide: any) {
  switch (slide.type) {
    case "title":      return <SlideTitle slide={slide} />;
    case "intro":      return <SlideIntro slide={slide} />;
    case "definition": return <SlideDefinition slide={slide} />;
    case "functions":  return <SlideFunctions slide={slide} />;
    case "types":      return <SlideTypes slide={slide} />;
    case "formats":    return <SlideFormats slide={slide} />;
    case "pros":       return <SlidePros slide={slide} />;
    case "cons":       return <SlideCons slide={slide} />;
    case "comparison": return <SlideComparison slide={slide} />;
    case "audience":   return <SlideAudience slide={slide} />;
    case "psychology": return <SlidePsychology slide={slide} />;
    case "steps":      return <SlideSteps slide={slide} />;
    case "metrics":    return <SlideMetrics slide={slide} />;
    case "case":       return <SlideCase slide={slide} />;
    case "mistakes":   return <SlideMistakes slide={slide} />;
    case "trends":     return <SlideTrends slide={slide} />;
    case "law":        return <SlideLaw slide={slide} />;
    case "social":     return <SlideSocial slide={slide} />;
    case "future":     return <SlideTrends slide={slide} />;
    case "conclusion": return <SlideConclusion slide={slide} />;
    case "references": return <SlideReferences slide={slide} />;
    case "thanks":     return <SlideThanks slide={slide} />;
    default:           return null;
  }
}

// ── Главный компонент ────────────────────────────────────────────────────────
const Index = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(slides.length - 1, c + 1));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") setCurrent((c) => Math.min(slides.length - 1, c + 1));
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") setCurrent((c) => Math.max(0, c - 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{ fontFamily: IBM }}>
      {/* Top bar */}
      <header className="flex items-center justify-between px-10 py-5 border-b border-gray-100 flex-shrink-0">
        <span className="text-xs tracking-widest uppercase text-gray-400" style={{ fontFamily: IBM }}>
          Телевизионная реклама
        </span>
        <div className="flex items-center gap-1.5 flex-wrap justify-center max-w-sm">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === current ? "16px" : "6px",
                backgroundColor: i === current ? "#1f2937" : "#e5e7eb",
              }}
              title={slides[i].label}
            />
          ))}
        </div>
        <span className="text-sm text-gray-400" style={{ fontFamily: CORMORANT }}>
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
        <div className="hidden lg:flex flex-col items-center justify-center w-14 border-l border-gray-100 gap-1 flex-shrink-0">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="w-px transition-all duration-500 rounded-full"
              style={{
                height: i === current ? "32px" : "6px",
                backgroundColor: i === current ? "#1f2937" : "#e5e7eb",
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
          style={{ fontFamily: IBM }}
        >
          <Icon name="ArrowLeft" size={14} />
          Назад
        </button>

        <span className="italic text-sm text-gray-400" style={{ fontFamily: CORMORANT }}>
          {slide.label.split(" / ")[1]}
        </span>

        <button
          onClick={next}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 text-xs tracking-widest uppercase text-gray-400 hover:text-gray-800 disabled:opacity-20 transition-colors"
          style={{ fontFamily: IBM }}
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