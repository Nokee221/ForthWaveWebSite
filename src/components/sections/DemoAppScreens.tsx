import type { ReactNode } from "react";
import type { DemoScreenId } from "@/data/projects";

/*
 * FICTIONAL DEMO APP SCREENS — not real FourthWave projects.
 *
 * Drawn in code so the Mobile Development section can be previewed before
 * real screenshots exist. Each screen is replaced automatically when its
 * screenshot file is added (see src/data/mobileProjects.ts).
 *
 * Every size is in `em`, and the root font size follows the width of the
 * phone screen (`cqw`), so a screen looks the same at any phone size. The
 * parent must be a size container (PhoneFrame's screen is one).
 *
 * Colors are the demo apps' own palettes, not the site's design tokens.
 */

const root =
  "absolute inset-0 flex flex-col overflow-hidden text-left text-[4.2cqw] leading-tight";

export function DemoAppScreen({ id }: { id: DemoScreenId }) {
  return <div aria-hidden="true">{screens[id]}</div>;
}

/* ───────────────────────────── Smart Living ───────────────────────────── */

const living = {
  background: "#f4f3f8",
  card: "#ffffff",
  text: "#17161c",
  muted: "#77758a",
  accent: "#7c3aed",
  accentSoft: "#ede7fd",
  gradient: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)",
};

function LivingNav({ active }: { active: number }) {
  return (
    <div
      className="mx-[1.4em] mt-auto mb-[1.3em] flex items-center justify-around rounded-[2em] py-[0.9em] shadow-[0_0.4em_1.6em_rgb(23_22_28/0.08)]"
      style={{ background: living.card }}
    >
      {[0, 1, 2, 3].map((item) => (
        <span
          key={item}
          className="rounded-[0.45em]"
          style={{
            width: item === active ? "2.2em" : "1.15em",
            height: "1.15em",
            background: item === active ? living.accent : "#d9d6e6",
          }}
        />
      ))}
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  return (
    <span
      className="flex h-[1.15em] w-[2em] items-center rounded-[1em] px-[0.15em]"
      style={{
        background: on ? living.accent : "#d9d6e6",
        justifyContent: on ? "flex-end" : "flex-start",
      }}
    >
      <span className="size-[0.85em] rounded-full bg-white" />
    </span>
  );
}

function DeviceCard({
  name,
  status,
  on,
}: {
  name: string;
  status: string;
  on: boolean;
}) {
  return (
    <div
      className="rounded-[1.2em] p-[0.95em]"
      style={{ background: living.card }}
    >
      <div className="flex items-center justify-between">
        <span
          className="size-[2.1em] rounded-[0.7em]"
          style={{ background: on ? living.accentSoft : "#efeef4" }}
        />
        <Toggle on={on} />
      </div>
      <p className="mt-[0.8em] text-[0.92em] font-bold">{name}</p>
      <p className="mt-[0.2em] text-[0.74em]" style={{ color: living.muted }}>
        {status}
      </p>
    </div>
  );
}

const smartLivingHome = (
  <div
    className={root}
    style={{ background: living.background, color: living.text }}
  >
    <div className="flex items-center justify-between px-[1.4em] pt-[4.6em]">
      <div>
        <p className="text-[0.8em]" style={{ color: living.muted }}>
          Good morning
        </p>
        <p className="mt-[0.15em] text-[1.5em] font-extrabold tracking-tight">
          Welcome home
        </p>
      </div>
      <span
        className="size-[2.5em] rounded-full"
        style={{ background: living.gradient }}
      />
    </div>

    <div
      className="mx-[1.4em] mt-[1.2em] flex items-end justify-between rounded-[1.5em] p-[1.25em] text-white"
      style={{ background: living.gradient }}
    >
      <div>
        <p className="text-[0.8em] opacity-80">Living room</p>
        <p className="mt-[0.1em] text-[3em] leading-none font-extrabold">22°</p>
        <p className="mt-[0.5em] text-[0.74em] opacity-80">
          Comfort mode · 48% humidity
        </p>
      </div>
      <svg viewBox="0 0 40 40" className="size-[4.2em]" fill="none">
        <circle cx="20" cy="20" r="16" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="4" />
        <path
          d="M20 4a16 16 0 1 1-13.9 8"
          stroke="#ffffff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>

    <div className="mt-[1.3em] flex items-baseline justify-between px-[1.4em]">
      <p className="text-[1em] font-bold">Devices</p>
      <p className="text-[0.74em]" style={{ color: living.accent }}>
        4 active
      </p>
    </div>
    <div className="mt-[0.7em] grid grid-cols-2 gap-[0.75em] px-[1.4em]">
      <DeviceCard name="Lights" status="4 lamps on" on />
      <DeviceCard name="Thermostat" status="Heating to 22°" on />
      <DeviceCard name="Speaker" status="Paused" on={false} />
      <DeviceCard name="Front door" status="Locked" on />
    </div>

    <div
      className="mx-[1.4em] mt-[0.75em] flex items-end justify-between rounded-[1.2em] p-[0.95em]"
      style={{ background: living.card }}
    >
      <div>
        <p className="text-[0.74em]" style={{ color: living.muted }}>
          Energy today
        </p>
        <p className="mt-[0.2em] text-[1.3em] font-extrabold">3.2 kWh</p>
      </div>
      <div className="flex h-[2.6em] items-end gap-[0.3em]">
        {[45, 70, 55, 90, 60, 100, 75].map((height, index) => (
          <span
            key={index}
            className="w-[0.55em] rounded-[0.2em]"
            style={{
              height: `${height}%`,
              background: index === 5 ? living.accent : living.accentSoft,
            }}
          />
        ))}
      </div>
    </div>

    <LivingNav active={0} />
  </div>
);

function Slider({ label, value }: { label: string; value: number }) {
  return (
    <div
      className="rounded-[1.2em] p-[0.95em]"
      style={{ background: living.card }}
    >
      <div className="flex items-baseline justify-between">
        <p className="text-[0.92em] font-bold">{label}</p>
        <p className="text-[0.74em]" style={{ color: living.muted }}>
          {value}%
        </p>
      </div>
      <div
        className="mt-[0.8em] h-[0.5em] rounded-[1em]"
        style={{ background: living.accentSoft }}
      >
        <div
          className="h-full rounded-[1em]"
          style={{ width: `${value}%`, background: living.accent }}
        />
      </div>
    </div>
  );
}

const smartLivingRoom = (
  <div
    className={root}
    style={{ background: living.background, color: living.text }}
  >
    <div className="flex items-center gap-[0.8em] px-[1.4em] pt-[4.6em]">
      <span
        className="flex size-[2.2em] items-center justify-center rounded-full text-[0.9em] font-bold"
        style={{ background: living.card }}
      >
        ‹
      </span>
      <p className="text-[1.3em] font-extrabold tracking-tight">Living room</p>
    </div>

    <div className="relative mx-auto mt-[1.6em] size-[13em]">
      <svg viewBox="0 0 100 100" className="size-full" fill="none">
        <circle cx="50" cy="50" r="42" stroke={living.accentSoft} strokeWidth="9" />
        <path
          d="M50 8a42 42 0 1 1-36.4 21"
          stroke={living.accent}
          strokeWidth="9"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-[3.2em] leading-none font-extrabold">22°</p>
        <p className="mt-[0.4em] text-[0.74em]" style={{ color: living.muted }}>
          Target temperature
        </p>
      </div>
    </div>

    <div className="mt-[1.5em] flex gap-[0.5em] px-[1.4em]">
      {["Cool", "Heat", "Auto", "Eco"].map((mode) => (
        <span
          key={mode}
          className="flex-1 rounded-[1em] py-[0.6em] text-center text-[0.78em] font-semibold"
          style={
            mode === "Auto"
              ? { background: living.accent, color: "#ffffff" }
              : { background: living.card, color: living.muted }
          }
        >
          {mode}
        </span>
      ))}
    </div>

    <div className="mt-[0.9em] grid gap-[0.75em] px-[1.4em]">
      <Slider label="Ceiling lights" value={80} />
      <Slider label="Blinds" value={35} />
    </div>

    <div
      className="mx-[1.4em] mt-auto mb-[1.4em] rounded-[1.4em] py-[1em] text-center text-[0.92em] font-bold text-white"
      style={{ background: living.gradient }}
    >
      Save scene
    </div>
  </div>
);

/* ─────────────────────────────── MoveWell ─────────────────────────────── */

const move = {
  background: "#0d1117",
  card: "#161c24",
  text: "#f2f5f7",
  muted: "#8b98a5",
  accent: "#34d399",
  accentSoft: "#17362c",
  second: "#60a5fa",
  gradient: "linear-gradient(135deg, #10b981 0%, #34d399 100%)",
};

function MoveNav({ active }: { active: number }) {
  return (
    <div
      className="mt-auto flex items-center justify-around border-t px-[1.4em] pt-[1em] pb-[1.5em]"
      style={{ borderColor: "#1f2731", background: move.background }}
    >
      {[0, 1, 2, 3].map((item) => (
        <span key={item} className="flex flex-col items-center gap-[0.35em]">
          <span
            className="size-[1.25em] rounded-full"
            style={{ background: item === active ? move.accent : "#2a3440" }}
          />
          <span
            className="h-[0.2em] w-[0.9em] rounded-[1em]"
            style={{ background: item === active ? move.accent : "transparent" }}
          />
        </span>
      ))}
    </div>
  );
}

function Stat({ value, unit }: { value: string; unit: string }) {
  return (
    <div
      className="flex-1 rounded-[1.1em] p-[0.85em]"
      style={{ background: move.card }}
    >
      <p className="text-[1.25em] font-extrabold">{value}</p>
      <p className="mt-[0.15em] text-[0.72em]" style={{ color: move.muted }}>
        {unit}
      </p>
    </div>
  );
}

const moveWellToday = (
  <div className={root} style={{ background: move.background, color: move.text }}>
    <div className="px-[1.4em] pt-[4.6em]">
      <p className="text-[0.8em]" style={{ color: move.muted }}>
        Today
      </p>
      <p className="mt-[0.15em] text-[1.5em] font-extrabold tracking-tight">
        You&apos;re almost there
      </p>
    </div>

    <div className="relative mx-auto mt-[1.4em] size-[12.5em]">
      <svg viewBox="0 0 100 100" className="size-full -rotate-90" fill="none">
        <circle cx="50" cy="50" r="42" stroke={move.accentSoft} strokeWidth="9" />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke={move.accent}
          strokeWidth="9"
          strokeLinecap="round"
          strokeDasharray="190 264"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-[2.6em] leading-none font-extrabold">7,240</p>
        <p className="mt-[0.4em] text-[0.74em]" style={{ color: move.muted }}>
          of 10,000 steps
        </p>
      </div>
    </div>

    <div className="mt-[1.4em] flex gap-[0.6em] px-[1.4em]">
      <Stat value="412" unit="kcal" />
      <Stat value="5.3" unit="km" />
      <Stat value="48" unit="min" />
    </div>

    <div
      className="mx-[1.4em] mt-[0.7em] rounded-[1.2em] p-[0.95em]"
      style={{ background: move.card }}
    >
      <div className="flex items-baseline justify-between">
        <p className="text-[0.92em] font-bold">This week</p>
        <p className="text-[0.72em]" style={{ color: move.accent }}>
          +12%
        </p>
      </div>
      <div className="mt-[0.8em] flex h-[4.4em] items-end justify-between">
        {[
          ["M", 55],
          ["T", 80],
          ["W", 45],
          ["T", 95],
          ["F", 72],
          ["S", 30],
          ["S", 18],
        ].map(([day, height], index) => (
          <span
            key={index}
            className="flex h-full w-[1.5em] flex-col items-center justify-end gap-[0.35em]"
          >
            <span
              className="w-[0.8em] rounded-[0.3em]"
              style={{
                height: `${height}%`,
                background: index === 4 ? move.accent : "#263241",
              }}
            />
            <span
              className="text-[0.62em]"
              style={{ color: index === 4 ? move.text : move.muted }}
            >
              {day}
            </span>
          </span>
        ))}
      </div>
    </div>

    <MoveNav active={0} />
  </div>
);

function Goal({
  name,
  detail,
  value,
  color,
}: {
  name: string;
  detail: string;
  value: number;
  color: string;
}) {
  return (
    <div className="rounded-[1.2em] p-[0.95em]" style={{ background: move.card }}>
      <div className="flex items-baseline justify-between">
        <p className="text-[0.92em] font-bold">{name}</p>
        <p className="text-[0.92em] font-extrabold" style={{ color }}>
          {value}%
        </p>
      </div>
      <p className="mt-[0.2em] text-[0.72em]" style={{ color: move.muted }}>
        {detail}
      </p>
      <div
        className="mt-[0.7em] h-[0.45em] rounded-[1em]"
        style={{ background: "#263241" }}
      >
        <div
          className="h-full rounded-[1em]"
          style={{ width: `${value}%`, background: color }}
        />
      </div>
    </div>
  );
}

const moveWellGoals = (
  <div className={root} style={{ background: move.background, color: move.text }}>
    <div className="px-[1.4em] pt-[4.6em]">
      <p className="text-[1.5em] font-extrabold tracking-tight">Weekly goals</p>
      <p className="mt-[0.2em] text-[0.8em]" style={{ color: move.muted }}>
        3 of 4 on track
      </p>
    </div>

    <div
      className="mx-[1.4em] mt-[1.2em] flex items-center justify-between rounded-[1.5em] p-[1.2em]"
      style={{ background: move.gradient, color: "#06281d" }}
    >
      <div>
        <p className="text-[0.78em] font-semibold opacity-80">Current streak</p>
        <p className="mt-[0.1em] text-[2.2em] leading-none font-extrabold">
          12 days
        </p>
      </div>
      <div className="flex gap-[0.3em]">
        {[1, 1, 1, 1, 0].map((done, index) => (
          <span
            key={index}
            className="size-[0.95em] rounded-full"
            style={{ background: done ? "#06281d" : "rgb(6 40 29 / 0.25)" }}
          />
        ))}
      </div>
    </div>

    <div className="mt-[0.9em] grid gap-[0.7em] px-[1.4em]">
      <Goal name="Steps" detail="57,400 of 70,000" value={82} color={move.accent} />
      <Goal name="Active minutes" detail="192 of 300" value={64} color={move.second} />
      <Goal name="Sleep" detail="7 h 12 min average" value={90} color={move.accent} />
      <Goal name="Water" detail="1.0 of 2.0 litres today" value={50} color={move.second} />
    </div>

    <MoveNav active={2} />
  </div>
);

const screens: Record<DemoScreenId, ReactNode> = {
  "smart-living-home": smartLivingHome,
  "smart-living-room": smartLivingRoom,
  "movewell-today": moveWellToday,
  "movewell-goals": moveWellGoals,
};
