"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyArticleProps = {
  study: CaseStudy;
};

export function CaseStudyArticle({ study }: CaseStudyArticleProps) {
  return (
    <article className="motion-card group rounded-[var(--radius-xl)] border border-[var(--border)] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-8 shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[0_0_50px_rgba(245,197,66,0.10)] sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        {study.eyebrow}
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <h3 className="text-4xl font-semibold tracking-tight">{study.title}</h3>

          <p className="mt-3 text-lg text-[var(--text-muted)]">{study.subtitle}</p>

          <p className="mt-6 leading-8 text-[var(--text-secondary)]">{study.summary}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--border)] bg-white/[0.03] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {study.performance ? (
          <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-black/40 p-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-sm text-[var(--text-muted)]">Before</p>
                <p className="mt-2 text-4xl font-bold">{study.performance.before}</p>
              </div>

              <div>
                <p className="text-sm text-[var(--text-muted)]">After</p>
                <p className="mt-2 text-4xl font-bold text-[var(--accent)]">
                  {study.performance.after}
                </p>
              </div>
            </div>

            <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-[var(--accent)]"
                initial={{ width: 0 }}
                whileInView={{ width: `${study.performance.barPercent}%` }}
                viewport={{ once: false, amount: 0.6 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
              {study.performance.note}
            </p>
          </div>
        ) : (
          <div className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-black/40 p-6">
            <p className="text-sm text-[var(--text-muted)]">Scope</p>
            <p className="mt-2 text-3xl font-bold text-[var(--accent)]">Full product</p>
            <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
              Architecture, state, UI, and motion, designed and built as one connected system.
            </p>
          </div>
        )}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {study.breakdown.map((item) => (
          <div
            key={item.label}
            className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-black/30 p-5"
          >
            <p className="text-sm font-semibold text-[var(--accent)]">{item.label}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">{item.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 space-y-6">
        {study.media.map((item) => (
          <div
            key={item.label}
            className="motion-media group/image overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border)] bg-black/30 transition-all duration-300 hover:border-[var(--border-strong)]"
          >
            <div className="border-b border-[var(--border)] px-5 py-3">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                {item.label}
              </p>
            </div>

            {item.type === "video" ? (
              <video
                src={item.src}
                controls
                preload="none"
                poster={item.poster}
                muted={item.muted}
                className="w-full"
              />
            ) : (
              <a href={item.src} target="_blank" rel="noreferrer" aria-label={`Open ${item.label}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1600}
                  height={900}
                  className="w-full transition-transform duration-500 group-hover/image:scale-[1.02]"
                />
              </a>
            )}

            <p className="border-t border-[var(--border)] px-5 py-3 text-sm text-[var(--text-secondary)]">
              {item.caption}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {study.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={
              link.variant === "primary"
                ? "rounded-[var(--radius-md)] bg-[var(--accent)] px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02]"
                : "rounded-[var(--radius-md)] border border-[var(--border-strong)] px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-white/5"
            }
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
