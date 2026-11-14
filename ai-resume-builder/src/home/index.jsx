import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  FileText,
  Target,
  WandSparkles,
  CheckCircle2,
  BrainCircuit,
  Zap,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/custom/Header";

function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-[#050711] dark:text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative">

        {/* Background glow */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px] dark:bg-cyan-500/10" />
          <div className="absolute right-[10%] top-32 h-80 w-80 rounded-full bg-purple-400/20 blur-[120px] dark:bg-purple-500/10" />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 -z-10 opacity-40 dark:opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,116,139,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.12) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <Header />

        <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pb-28 md:pt-28">

          <div className="mx-auto max-w-5xl text-center">

            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-300">
              <Sparkles className="h-4 w-4" />
              AI-POWERED RESUME ENGINEERING
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Build a resume.
              <br />

              <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Get noticed.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-slate-500 dark:text-gray-400 sm:text-lg md:text-xl">
              Create a professional, ATS-friendly resume with AI.
              Generate powerful content, customize every section,
              and build a resume designed for your next opportunity.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                to="/dashboard"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition duration-300 hover:scale-105"
              >
                <Sparkles className="h-5 w-5" />
                Build My Resume
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <a
                href="#features"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Explore Features
                <ChevronRight className="h-5 w-5" />
              </a>

            </div>

            {/* Trust */}
            <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-slate-500 dark:text-gray-500">

              <TrustItem text="AI-powered" />
              <TrustItem text="ATS-friendly" />
              <TrustItem text="Professional templates" />
              <TrustItem text="Easy to customize" />

            </div>

          </div>

          {/* ================= RESUME MOCKUP ================= */}

          <div className="relative mx-auto mt-20 max-w-5xl">

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0c101b]">

              {/* Browser bar */}
              <div className="flex items-center gap-2 border-b border-slate-200 px-5 py-4 dark:border-white/10">

                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <div className="ml-4 h-7 flex-1 rounded-md bg-slate-100 dark:bg-white/5" />

              </div>

              {/* Dashboard mockup */}
              <div className="grid min-h-[420px] md:grid-cols-[210px_1fr]">

                {/* Sidebar */}
                <div className="border-r border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.02]">

                  <div className="mb-8 flex items-center gap-2">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>

                    <span className="font-bold">
                      CareerForge
                    </span>

                  </div>

                  <div className="space-y-2">

                    <SidebarItem active text="My Resumes" />
                    <SidebarItem text="Templates" />
                    <SidebarItem text="AI Tools" />
                    <SidebarItem text="Settings" />

                  </div>

                </div>

                {/* Main */}
                <div className="p-6 md:p-9">

                  <div className="mb-7 flex items-center justify-between">

                    <div>
                      <div className="mb-2 h-3 w-32 rounded bg-slate-200 dark:bg-white/10" />
                      <div className="h-2 w-52 rounded bg-slate-100 dark:bg-white/5" />
                    </div>

                    <div className="rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 px-4 py-2 text-xs font-semibold text-white">
                      + New Resume
                    </div>

                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">

                    <ResumeCard
                      color="cyan"
                      title="AI Engineer Resume"
                    />

                    <ResumeCard
                      color="purple"
                      title="Full Stack Resume"
                    />

                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.02]"
      >

        <div className="mx-auto max-w-7xl px-6 py-24">

          <SectionHeading
            label="POWERFUL FEATURES"
            title="Everything you need to"
            highlight="stand out."
            description="CareerForge AI combines intelligent writing tools with professional resume design to help you create a stronger application."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <FeatureCard
              icon={<BrainCircuit />}
              title="AI Resume Writing"
              description="Generate professional summaries and experience descriptions tailored to your career."
            />

            <FeatureCard
              icon={<Target />}
              title="ATS-Friendly"
              description="Create clean, structured resumes designed to work well with applicant tracking systems."
            />

            <FeatureCard
              icon={<WandSparkles />}
              title="AI Experience Generator"
              description="Turn simple job information into polished professional experience content."
            />

            <FeatureCard
              icon={<FileText />}
              title="Professional Templates"
              description="Build clean and modern resumes that look professional across industries."
            />

            <FeatureCard
              icon={<Zap />}
              title="Fast & Simple"
              description="Create and update your resume without spending hours formatting documents."
            />

            <FeatureCard
              icon={<ShieldCheck />}
              title="Full Customization"
              description="Control your information, sections, colors and content whenever you want."
            />

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="bg-white dark:bg-[#050711]">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <SectionHeading
            label="HOW IT WORKS"
            title="From blank page to"
            highlight="job-ready."
            description="Build a professional resume in three simple steps."
          />

          <div className="grid gap-10 md:grid-cols-3">

            <Step
              number="01"
              title="Create"
              text="Start your resume and enter your basic career information."
            />

            <Step
              number="02"
              title="Enhance with AI"
              text="Generate polished summaries and professional experience content with AI."
            />

            <Step
              number="03"
              title="Download & Share"
              text="Preview your finished resume, download it and share it with recruiters."
            />

          </div>

        </div>

      </section>


      {/* ================= AI SECTION ================= */}

      <section className="border-y border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-white/[0.02]">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">

          <div>

            <div className="mb-4 text-sm font-bold text-cyan-500">
              INTELLIGENT CAREER TOOLS
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              Your resume,
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                upgraded by AI.
              </span>
            </h2>

            <p className="mt-6 leading-relaxed text-slate-500 dark:text-gray-400">
              Stop staring at a blank document. CareerForge AI helps
              transform your ideas into professional resume content
              while keeping you in control.
            </p>

            <div className="mt-8 space-y-4">

              <CheckRow text="Generate professional summaries" />
              <CheckRow text="Create powerful experience descriptions" />
              <CheckRow text="Customize your resume instantly" />
              <CheckRow text="Build ATS-friendly content" />

            </div>

          </div>

          {/* AI Card */}
          <div className="relative">

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-[#0c101b] md:p-8">

              <div className="mb-6 flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500">
                  <BrainCircuit className="h-6 w-6 text-white" />
                </div>

                <div>
                  <h3 className="font-bold">
                    AI Resume Assistant
                  </h3>
                  <p className="text-xs text-slate-400">
                    Ready to help
                  </p>
                </div>

              </div>

              <div className="rounded-xl bg-slate-50 p-5 dark:bg-white/5">

                <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                  "Create a professional summary for an AI Engineer
                  with experience in machine learning and full-stack
                  development."
                </p>

              </div>

              <div className="my-4 flex justify-center">
                <ArrowRight className="rotate-90 text-cyan-500" />
              </div>

              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">

                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-cyan-500">
                  <Sparkles className="h-4 w-4" />
                  AI Generated
                </div>

                <p className="text-sm leading-relaxed text-slate-600 dark:text-gray-300">
                  Results-driven AI Engineer with a strong foundation
                  in machine learning, software development and
                  intelligent systems...
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="px-6 py-24">

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-50 via-purple-50 to-pink-50 p-10 text-center dark:border-white/10 dark:from-cyan-500/10 dark:via-purple-500/10 dark:to-pink-500/10 md:p-20">

          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />

          <div className="relative">

            <Sparkles className="mx-auto mb-6 h-10 w-10 text-cyan-500" />

            <h2 className="text-4xl font-black md:text-6xl">
              Your next job starts
              <br />

              <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                with a better resume.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-slate-500 dark:text-gray-400">
              Build your resume with CareerForge AI and put your
              best professional self forward.
            </p>

            <Link
              to="/dashboard"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-4 font-bold text-white transition hover:scale-105 dark:bg-white dark:text-black"
            >
              Start Building
              <ArrowRight className="h-5 w-5" />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="border-t border-slate-200 dark:border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">

          <div className="text-lg font-black">
            <span className="text-cyan-500">Career</span>
            <span className="text-purple-500">Forge</span>
            <span className="text-slate-400"> AI</span>
          </div>

          <p className="text-sm text-slate-400">
            AI-powered resume engineering platform.
          </p>

          <p className="text-sm text-slate-400">
            © 2026 CareerForge AI
          </p>

        </div>

      </footer>

    </div>
  );
}


/* ================= COMPONENTS ================= */

function TrustItem({ text }) {
  return (
    <span className="flex items-center gap-2">
      <CheckCircle2 className="h-4 w-4 text-cyan-500" />
      {text}
    </span>
  );
}


function SidebarItem({ text, active }) {
  return (
    <div
      className={`rounded-lg px-3 py-2 text-sm ${
        active
          ? "bg-cyan-500/10 font-semibold text-cyan-500"
          : "text-slate-400"
      }`}
    >
      {text}
    </div>
  );
}


function ResumeCard({ title, color }) {
  const colorClasses =
    color === "cyan"
      ? "from-cyan-400 to-blue-500"
      : "from-purple-400 to-pink-500";

  return (
    <div className="group rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]">

      <div
        className={`mb-4 h-44 rounded-lg bg-gradient-to-br ${colorClasses} p-5`}
      >

        <div className="h-full rounded-md bg-white p-4 shadow-xl">

          <div className="mb-4 h-3 w-24 rounded bg-slate-800" />
          <div className="mb-5 h-2 w-16 rounded bg-slate-300" />

          <div className="space-y-2">
            <div className="h-2 w-full rounded bg-slate-200" />
            <div className="h-2 w-5/6 rounded bg-slate-200" />
            <div className="h-2 w-4/5 rounded bg-slate-200" />
          </div>

          <div className="mt-5 space-y-2">
            <div className="h-2 w-3/4 rounded bg-slate-200" />
            <div className="h-2 w-full rounded bg-slate-200" />
          </div>

        </div>

      </div>

      <p className="text-sm font-semibold">
        {title}
      </p>

      <p className="mt-1 text-xs text-slate-400">
        Last edited recently
      </p>

    </div>
  );
}


function SectionHeading({
  label,
  title,
  highlight,
  description,
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">

      <div className="mb-3 text-sm font-bold tracking-wide text-cyan-500">
        {label}
      </div>

      <h2 className="text-4xl font-black tracking-tight md:text-5xl">
        {title}
        <span className="text-purple-500">
          {" "}
          {highlight}
        </span>
      </h2>

      <p className="mt-5 leading-relaxed text-slate-500 dark:text-gray-400">
        {description}
      </p>

    </div>
  );
}


function FeatureCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-400/30">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-500 transition group-hover:scale-110">
        {React.cloneElement(icon, {
          className: "h-6 w-6",
        })}
      </div>

      <h3 className="mb-3 text-xl font-bold">
        {title}
      </h3>

      <p className="leading-relaxed text-slate-500 dark:text-gray-400">
        {description}
      </p>

    </div>
  );
}


function Step({ number, title, text }) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-7 dark:border-white/10 dark:bg-white/[0.02]">

      <div className="mb-5 text-5xl font-black text-slate-200 dark:text-white/5">
        {number}
      </div>

      <div className="mb-4 h-2 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500" />

      <h3 className="mb-3 text-2xl font-bold">
        {title}
      </h3>

      <p className="leading-relaxed text-slate-500 dark:text-gray-400">
        {text}
      </p>

    </div>
  );
}


function CheckRow({ text }) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10">
        <CheckCircle2 className="h-4 w-4 text-cyan-500" />
      </div>

      <span className="text-sm text-slate-600 dark:text-gray-300">
        {text}
      </span>

    </div>
  );
}

export default Home;