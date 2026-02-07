"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const roles = ["Student", "Dreamer", "Entrepreneur", "Engineer"];

export default function AboutHeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayed.length < currentRole.length) {
            setDisplayed(currentRole.slice(0, displayed.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(currentRole.slice(0, displayed.length - 1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 md:flex-row">
        <div className="relative h-72 w-72 shrink-0 overflow-hidden rounded-full border-4 border-accent md:h-80 md:w-80">
          <Image
            src="/images/IMG_20200918_202549.jpg"
            alt="Steven Zhao"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
            Hi! I&apos;m Steven
          </h1>
          <div className="mb-6 flex items-center justify-center gap-2 md:justify-start">
            <span className="text-xl text-muted">I&apos;m a</span>
            <span className="text-xl font-semibold text-accent">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <p className="mb-4 max-w-lg text-muted">
            University of Toronto &mdash; Computer Engineering
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href="/Wen-Jie-Steven-Zhao-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full bg-accent px-6 text-sm font-semibold text-background transition-colors hover:bg-accent-dark"
            >
              Download Resume
            </a>
            <a
              href="https://www.linkedin.com/in/wen-jie-steven-zhao-b4212514a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-full border border-border px-6 text-sm font-medium text-primary transition-colors hover:bg-surface"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
