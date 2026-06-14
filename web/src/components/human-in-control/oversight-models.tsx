"use client";

import { useRef, useEffect, useState } from "react";
import * as d3 from "d3";

const C = {
  ai: "#2D6FD2",
  aiSoft: "#D9E6F8",
  human: "#DD7430",
  humanSoft: "#FBE8D8",
  control: "#1F8A5D",
  controlSoft: "#DCF0E6",
  stop: "#C8403A",
  ink: "#141D2C",
  soft: "#4B5868",
  line: "#A6B1C0",
};

const TWO_PI = Math.PI * 2;
const pt = (cx: number, cy: number, r: number, a: number) => [
  cx + r * Math.cos(a),
  cy + r * Math.sin(a),
];

function loopCircle(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  cx: number,
  cy: number,
  r: number,
  opts: { stroke?: string; width?: number; dash?: string } = {}
) {
  return svg
    .append("circle")
    .attr("cx", cx)
    .attr("cy", cy)
    .attr("r", r)
    .attr("fill", "none")
    .attr("stroke", opts.stroke || C.ink)
    .attr("stroke-width", opts.width || 2.5)
    .attr("stroke-dasharray", opts.dash || null);
}

function node(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  x: number,
  y: number,
  r: number,
  fill: string,
  label: string,
  labelColor?: string
) {
  const g = svg.append("g");
  g.append("circle")
    .attr("cx", x)
    .attr("cy", y)
    .attr("r", r)
    .attr("fill", fill)
    .attr("stroke", "#fff")
    .attr("stroke-width", 2.5);
  g.append("text")
    .attr("x", x)
    .attr("y", y + 1)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "middle")
    .attr("font-family", "'IBM Plex Mono', monospace")
    .attr("font-size", r > 22 ? 13 : 11)
    .attr("font-weight", 600)
    .attr("fill", labelColor || "#fff")
    .text(label);
  return g;
}

function caption(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  x: number,
  y: number,
  text: string,
  color?: string
) {
  svg
    .append("text")
    .attr("x", x)
    .attr("y", y)
    .attr("text-anchor", "middle")
    .attr("font-family", "'IBM Plex Mono', monospace")
    .attr("font-size", 11)
    .attr("fill", color || C.soft)
    .text(text);
}

function humanIcon(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  x: number,
  y: number,
  scale: number,
  color: string
) {
  const g = svg
    .append("g")
    .attr("transform", `translate(${x},${y}) scale(${scale})`);
  g.append("circle").attr("cx", 0).attr("cy", -10).attr("r", 7).attr("fill", color);
  g.append("path")
    .attr("d", "M -11 14 Q -11 -1 0 -1 Q 11 -1 11 14 Z")
    .attr("fill", color);
  return g;
}

function pulse(
  svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
  color: string,
  r?: number
) {
  return svg
    .append("circle")
    .attr("r", r || 5.5)
    .attr("fill", color)
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5);
}

export default function OversightModels() {
  const hitlRef = useRef<SVGSVGElement>(null);
  const hotlRef = useRef<SVGSVGElement>(null);
  const hootlRef = useRef<SVGSVGElement>(null);
  const hicRef = useRef<SVGSVGElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const timers: d3.Timer[] = [];
    const timeouts: number[] = [];
    let isMounted = true;
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);

    // Clear any previous SVG content (StrictMode double-run safety)
    [hitlRef, hotlRef, hootlRef, hicRef].forEach((ref) => {
      if (ref.current) d3.select(ref.current).selectAll("*").remove();
    });

    // ---------- 1. HITL ----------
    if (hitlRef.current) {
      const svg = d3.select(hitlRef.current);
      const cx = 170,
        cy = 150,
        r = 92;
      loopCircle(svg, cx, cy, r);

      const aArr = -Math.PI / 4;
      const [ax, ay] = pt(cx, cy, r, aArr);
      svg
        .append("path")
        .attr("d", `M ${ax - 9} ${ay - 6} L ${ax + 4} ${ay + 2} L ${ax - 7} ${ay + 8} Z`)
        .attr("fill", C.ink);

      const A_AI = Math.PI;
      const A_HUMAN = -Math.PI / 2;
      const A_ACTION = 0;

      const [hx, hy] = pt(cx, cy, r, A_HUMAN);
      const [aix, aiy] = pt(cx, cy, r, A_AI);
      const [acx, acy] = pt(cx, cy, r, A_ACTION);

      node(svg, aix, aiy, 24, C.ai, "AI");
      svg
        .append("circle")
        .attr("cx", hx)
        .attr("cy", hy)
        .attr("r", 26)
        .attr("fill", C.humanSoft)
        .attr("stroke", C.human)
        .attr("stroke-width", 2.5);
      humanIcon(svg, hx, hy - 2, 1.05, C.human);
      caption(svg, hx, hy - 40, "human approves", C.human);
      svg
        .append("circle")
        .attr("cx", acx)
        .attr("cy", acy)
        .attr("r", 22)
        .attr("fill", "#fff")
        .attr("stroke", C.ink)
        .attr("stroke-width", 2.5);
      svg
        .append("text")
        .attr("x", acx)
        .attr("y", acy + 1)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-family", "'IBM Plex Mono', monospace")
        .attr("font-size", 11)
        .attr("font-weight", 600)
        .attr("fill", C.ink)
        .text("Act");
      caption(svg, cx, cy + r + 34, "every action waits for sign-off");

      if (reduced) {
        pulse(svg, C.ai).attr("cx", aix + 38).attr("cy", aiy - 28);
      } else {
        const p = pulse(svg, C.ai);
        const ring = svg
          .append("circle")
          .attr("cx", hx)
          .attr("cy", hy)
          .attr("r", 26)
          .attr("fill", "none")
          .attr("stroke", C.control)
          .attr("stroke-width", 3)
          .attr("opacity", 0);

        let angle = Math.PI,
          waiting = 0;
        const speed = 0.012;
        const t = d3.timer(() => {
          if (waiting > 0) {
            waiting--;
            if (waiting === 30) ring.attr("opacity", 1).attr("r", 26);
            if (waiting < 30)
              ring.attr("r", 26 + (30 - waiting) * 0.8).attr("opacity", waiting / 30);
            if (waiting === 0) p.attr("fill", C.control);
            return;
          }
          angle += speed;
          const norm = ((angle % TWO_PI) + TWO_PI) % TWO_PI;
          if (Math.abs(norm - (3 * Math.PI) / 2) < speed) waiting = 60;
          if (Math.abs(norm - Math.PI) < speed) p.attr("fill", C.ai);
          const [x, y] = pt(cx, cy, r, angle);
          p.attr("cx", x).attr("cy", y);
        });
        timers.push(t);
      }
    }

    // ---------- 2. HOTL ----------
    if (hotlRef.current) {
      const svg = d3.select(hotlRef.current);
      const cx = 170,
        cy = 172,
        r = 80;
      loopCircle(svg, cx, cy, r);

      const A_AI = Math.PI,
        A_ACTION = 0;
      const [aix, aiy] = pt(cx, cy, r, A_AI);
      const [acx, acy] = pt(cx, cy, r, A_ACTION);
      const topX = cx,
        topY = cy - r;
      const humX = cx,
        humY = 44;

      svg
        .append("line")
        .attr("x1", humX)
        .attr("y1", humY + 22)
        .attr("x2", topX)
        .attr("y2", topY - 4)
        .attr("stroke", C.human)
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "5 5");

      humanIcon(svg, humX, humY, 1.15, C.human);
      caption(svg, humX + 78, humY + 4, "observes", C.human);

      node(svg, aix, aiy, 24, C.ai, "AI");
      svg
        .append("circle")
        .attr("cx", acx)
        .attr("cy", acy)
        .attr("r", 22)
        .attr("fill", "#fff")
        .attr("stroke", C.ink)
        .attr("stroke-width", 2.5);
      svg
        .append("text")
        .attr("x", acx)
        .attr("y", acy + 1)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-family", "'IBM Plex Mono', monospace")
        .attr("font-size", 11)
        .attr("font-weight", 600)
        .attr("fill", C.ink)
        .text("Act");
      caption(svg, cx, cy + r + 32, "loop runs on its own · human can step in");

      if (reduced) {
        pulse(svg, C.ai).attr("cx", cx + 50).attr("cy", cy - 60);
      } else {
        const p = pulse(svg, C.ai);
        let angle = Math.PI;
        const t = d3.timer(() => {
          angle += 0.035;
          const [x, y] = pt(cx, cy, r, angle);
          p.attr("cx", x).attr("cy", y);
        });
        timers.push(t);

        const glance = pulse(svg, C.human, 4).attr("opacity", 0);
        const sendGlance = () => {
          glance
            .attr("opacity", 1)
            .attr("cx", humX)
            .attr("cy", humY + 22)
            .transition()
            .duration(900)
            .ease(d3.easeQuadIn)
            .attr("cx", topX)
            .attr("cy", topY - 4)
            .transition()
            .duration(250)
            .attr("opacity", 0)
            .on("end", () => {
              if (!isMounted) return;
              const to = window.setTimeout(sendGlance, 2200);
              timeouts.push(to);
            });
        };
        sendGlance();
      }
    }

    // ---------- 3. HOOTL ----------
    if (hootlRef.current) {
      const svg = d3.select(hootlRef.current);
      const cx = 170,
        cy = 150,
        r = 92;
      loopCircle(svg, cx, cy, r);

      const [aix, aiy] = pt(cx, cy, r, Math.PI);
      const [acx, acy] = pt(cx, cy, r, 0);
      node(svg, aix, aiy, 24, C.ai, "AI");
      svg
        .append("circle")
        .attr("cx", acx)
        .attr("cy", acy)
        .attr("r", 22)
        .attr("fill", "#fff")
        .attr("stroke", C.ink)
        .attr("stroke-width", 2.5);
      svg
        .append("text")
        .attr("x", acx)
        .attr("y", acy + 1)
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-family", "'IBM Plex Mono', monospace")
        .attr("font-size", 11)
        .attr("font-weight", 600)
        .attr("fill", C.ink)
        .text("Act");

      const gh = humanIcon(svg, cx, cy - 4, 1.1, C.line).attr("opacity", 0.35);
      svg
        .append("line")
        .attr("x1", cx - 20)
        .attr("y1", cy - 22)
        .attr("x2", cx + 20)
        .attr("y2", cy + 16)
        .attr("stroke", C.stop)
        .attr("stroke-width", 2.5)
        .attr("opacity", 0.7);
      caption(svg, cx, cy + 38, "no human present", C.soft);
      caption(svg, cx, cy + r + 34, "acts alone, at full speed");

      if (reduced) {
        pulse(svg, C.ai).attr("cx", cx + 60).attr("cy", cy - 70);
      } else {
        const p1 = pulse(svg, C.ai),
          p2 = pulse(svg, C.ai);
        let a = 0;
        const t = d3.timer(() => {
          a += 0.055;
          let [x, y] = pt(cx, cy, r, a);
          p1.attr("cx", x).attr("cy", y);
          [x, y] = pt(cx, cy, r, a + Math.PI);
          p2.attr("cx", x).attr("cy", y);
        });
        timers.push(t);
      }
    }

    // ---------- 4. HIC ----------
    if (hicRef.current) {
      const svg = d3.select(hicRef.current);
      const A = { cx: 86, cy: 182, r: 50 };
      const B = { cx: 254, cy: 182, r: 50 };
      const humX = 170,
        humY = 46;

      humanIcon(svg, humX, humY, 1.1, C.control);
      caption(svg, humX, humY - 28, "decision rights", C.control);

      function authorityLine(tx: number, ty: number) {
        svg
          .append("line")
          .attr("x1", humX)
          .attr("y1", humY + 18)
          .attr("x2", tx)
          .attr("y2", ty - 6)
          .attr("stroke", C.control)
          .attr("stroke-width", 2.5);
        svg
          .append("path")
          .attr("d", `M ${tx - 6} ${ty - 14} L ${tx} ${ty - 3} L ${tx + 6} ${ty - 14} Z`)
          .attr("fill", C.control);
      }
      authorityLine(A.cx, A.cy - A.r);
      authorityLine(B.cx, B.cy - B.r);

      [A, B].forEach((L) => {
        loopCircle(svg, L.cx, L.cy, L.r, { width: 2 });
        const [aix, aiy] = pt(L.cx, L.cy, L.r, Math.PI);
        const [acx, acy] = pt(L.cx, L.cy, L.r, 0);
        node(svg, aix, aiy, 14, C.ai, "AI");
        svg
          .append("circle")
          .attr("cx", acx)
          .attr("cy", acy)
          .attr("r", 13)
          .attr("fill", "#fff")
          .attr("stroke", C.ink)
          .attr("stroke-width", 2);
        svg
          .append("text")
          .attr("x", acx)
          .attr("y", acy + 1)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("font-family", "'IBM Plex Mono', monospace")
          .attr("font-size", 8.5)
          .attr("font-weight", 600)
          .attr("fill", C.ink)
          .text("Act");
      });

      const [gx, gy] = pt(B.cx, B.cy, B.r, -Math.PI / 2);
      const gate = svg
        .append("rect")
        .attr("x", gx - 7)
        .attr("y", gy - 7)
        .attr("width", 14)
        .attr("height", 14)
        .attr("transform", `rotate(45 ${gx} ${gy})`)
        .attr("fill", "#fff")
        .attr("stroke", C.control)
        .attr("stroke-width", 2.5);

      caption(svg, A.cx, A.cy + A.r + 18, "low risk · autonomous");
      caption(svg, B.cx, B.cy + B.r + 18, "high risk · gated");

      const cmds = [
        { label: "approve", color: C.control, x: 52 },
        { label: "redirect", color: C.human, x: 142 },
        { label: "stop", color: C.stop, x: 240 },
      ];
      cmds.forEach((c) => {
        svg
          .append("circle")
          .attr("cx", c.x)
          .attr("cy", 284)
          .attr("r", 4.5)
          .attr("fill", c.color);
        svg
          .append("text")
          .attr("x", c.x + 10)
          .attr("y", 288)
          .attr("font-family", "'IBM Plex Mono', monospace")
          .attr("font-size", 11)
          .attr("font-weight", 600)
          .attr("fill", c.color)
          .text(c.label);
      });

      if (reduced) {
        pulse(svg, C.ai, 4).attr("cx", A.cx + 30).attr("cy", A.cy - 36);
        pulse(svg, C.ai, 4).attr("cx", gx).attr("cy", gy);
      } else {
        const pA = pulse(svg, C.ai, 4.5),
          pB = pulse(svg, C.ai, 4.5);
        let angA = 0,
          angB = Math.PI,
          frozenA = 0,
          frozenB = 0,
          held = false,
          clearance = false;
        const GATE = (3 * Math.PI) / 2;

        const haloA = svg
          .append("circle")
          .attr("cx", A.cx)
          .attr("cy", A.cy)
          .attr("r", A.r)
          .attr("fill", "none")
          .attr("stroke-width", 4)
          .attr("opacity", 0);
        const haloB = svg
          .append("circle")
          .attr("cx", B.cx)
          .attr("cy", B.cy)
          .attr("r", B.r)
          .attr("fill", "none")
          .attr("stroke-width", 4)
          .attr("opacity", 0);

        const t = d3.timer(() => {
          if (frozenA > 0) frozenA--;
          else {
            angA += 0.045;
            const [x, y] = pt(A.cx, A.cy, A.r, angA);
            pA.attr("cx", x).attr("cy", y);
          }
          if (frozenB > 0) frozenB--;
          else if (!held) {
            angB += 0.03;
            const norm = ((angB % TWO_PI) + TWO_PI) % TWO_PI;
            if (Math.abs(norm - GATE) < 0.03) {
              if (clearance) clearance = false;
              else held = true;
            }
            const [x, y] = pt(B.cx, B.cy, B.r, angB);
            pB.attr("cx", x).attr("cy", y);
          }
        });
        timers.push(t);

        const sequence = [
          { label: "approve", color: C.control, loop: B },
          { label: "stop", color: C.stop, loop: A },
          { label: "redirect", color: C.human, loop: A },
          { label: "stop", color: C.stop, loop: B },
        ];
        const cmdDot = pulse(svg, C.control, 5).attr("opacity", 0);
        let seqIdx = 0;
        function sendCommand() {
          const c = sequence[seqIdx] as { label: string; color: string; loop: typeof A };
          const halo = c.loop === A ? haloA : haloB;
          cmdDot
            .attr("fill", c.color)
            .attr("opacity", 1)
            .attr("cx", humX)
            .attr("cy", humY + 18)
            .transition()
            .duration(750)
            .ease(d3.easeQuadIn)
            .attr("cx", c.loop.cx)
            .attr("cy", c.loop.cy - c.loop.r)
            .on("end", () => {
              if (!isMounted) return;
              cmdDot.attr("opacity", 0);
              halo
                .attr("stroke", c.color)
                .attr("opacity", 0.9)
                .transition()
                .duration(650)
                .attr("opacity", 0);
              if (c.label === "approve") {
                gate.attr("fill", C.controlSoft);
                const to = window.setTimeout(() => gate.attr("fill", "#fff"), 650);
                timeouts.push(to);
                if (held) held = false;
                else clearance = true;
              }
              if (c.label === "redirect") {
                angA += TWO_PI / 5;
              }
              if (c.label === "stop") {
                if (c.loop === A) frozenA = 85;
                else {
                  frozenB = 85;
                  held = false;
                }
              }
              seqIdx = (seqIdx + 1) % sequence.length;
              const to = window.setTimeout(sendCommand, 2400);
              timeouts.push(to);
            });
        }
        const to = window.setTimeout(sendCommand, 1300);
        timeouts.push(to);
      }
    }

    return () => {
      isMounted = false;
      timers.forEach((t) => t.stop());
      timeouts.forEach((id) => window.clearTimeout(id));
      [hitlRef, hotlRef, hootlRef, hicRef].forEach((ref) => {
        if (ref.current) d3.select(ref.current).selectAll("*").remove();
      });
    };
  }, []);

  const cards = [
    {
      title: "Human-in-the-Loop",
      tag: "Human gates every action",
      ref: hitlRef,
      description:
        "Nothing executes without a person. The AI proposes, the human approves, then the action happens. Maximum control, minimum speed - the loop runs at human pace.",
    },
    {
      title: "Human-on-the-Loop",
      tag: "Human supervises, can intervene",
      ref: hotlRef,
      description:
        "The loop runs by itself; a person watches. The human monitors from outside and steps in when something looks wrong. Fast, but intervention is reactive - after the fact.",
    },
    {
      title: "Human-out-of-the-Loop",
      tag: "Full autonomy, no oversight",
      ref: hootlRef,
      description:
        "The system acts entirely on its own. No human sees the decisions in real time. Fastest of all - and the riskiest place to discover the system was wrong.",
    },
    {
      title: "Human in Control",
      tag: "One authority · execution mode set by risk",
      ref: hicRef,
      isControl: true,
      description:
        "An operating model, not a position. Agents may propose or execute - scoped by risk - while a human retains final decision rights: the standing authority to approve, redirect, or stop any agent action at any time.",
    },
  ];

  return (
    <section id="oversight-models" className="bg-ocx-bg py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-12 max-w-3xl">
            <div className="font-mono text-xs uppercase tracking-widest text-ocx-fg-muted mb-4">
              Oversight architectures · AI agents
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-ocx-fg-primary tracking-ocx-tight mb-6">
              Where does the human sit?
            </h2>
            <p className="font-body text-base md:text-lg text-ocx-fg leading-ocx-base mb-6">
              Four ways to wire a person into an automated decision loop. The first three describe{" "}
              <em>where the human is positioned</em>. The fourth, human in control, is different in
              kind: it&apos;s an operating model that defines{" "}
              <em>who holds final decision rights</em>, regardless of who does the work.
            </p>
            <div className="flex flex-wrap gap-5 text-xs font-mono text-ocx-fg-muted">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: C.ai }} />
                AI / agent
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: C.human }} />
                Human
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: C.control }} />
                Authority
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: C.stop }} />
                Stop / veto
              </span>
            </div>
          </header>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cards.map((card) => (
              <div
                key={card.title}
                className={`bg-white border rounded-xl p-5 md:p-6 flex flex-col ${
                  card.isControl
                    ? "border-ocx-bright-blue/40 border-2 relative"
                    : "border-ocx-border"
                }`}
              >
                {card.isControl && (
                  <span className="absolute -top-3 right-4 bg-ocx-bright-blue text-white font-mono text-[10px] uppercase tracking-wider px-2 py-1 rounded">
                    operating model
                  </span>
                )}
                <h3 className="font-display font-bold text-xl text-ocx-fg-primary mb-1">
                  {card.title}
                </h3>
                <div className="font-mono text-[11px] uppercase tracking-wider text-ocx-fg-muted mb-2">
                  {card.tag}
                </div>
                <svg ref={card.ref} viewBox="0 0 340 300" className="w-full h-auto my-2" />
                <p className="text-sm text-ocx-fg mt-auto leading-relaxed">
                  <strong className="text-ocx-fg-primary">{card.description.split(".")[0]}.</strong>{" "}
                  {card.description.split(".").slice(1).join(".")}
                </p>
              </div>
            ))}
          </div>

          {reduced && (
            <p className="text-xs text-ocx-fg-muted mt-6">
              Animation is paused because your system prefers reduced motion - the diagrams are shown
              in their resting state.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
