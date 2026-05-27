import React from "react";

export const metadata = {
  title: "Elvis Kanyi – CV",
  description: "Professional resume and portfolio of Elvis Kanyi, Full‑Stack Engineer.",
};

export default function CVPage() {
  return (
    <section className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Elvis Kanyi – Curriculum Vitae</h1>
      <p className="mb-4">
        <strong>Phone:</strong> +254 111-871-428 &nbsp; | &nbsp;
        <strong>Email:</strong> <a href="mailto:elviskanyi8@gmail.com" className="text-blue-600 dark:text-blue-400">elviskanyi8@gmail.com</a> &nbsp; | &nbsp;
        <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/elvis-kanyi/" target="_blank" className="text-blue-600 dark:text-blue-400">/in/elvis-kanyi/</a>
      </p>

      <section id="about-me" className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Professional Summary</h2>
        <p>
          Versatile Web Developer &amp; Cloud Computing Specialist experienced in building scalable SaaS platforms, cloud‑native apps, and automated digital systems. Skilled in full‑stack development, cloud architecture (AWS, IBM Cloud, Firebase), API integrations, CI/CD, DevOps fundamentals, and secure infrastructure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Education &amp; Certifications</h2>
        <ul className="list-disc pl-5">
          <li>Diploma in Information Communication Technology — Meru National Polytechnic</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>National Construction Authority</strong> – ICT Intern</li>
          <li><strong>Empower Growth Consultancy</strong> – Web Developer</li>
          <li><strong>CASA Motor Valors</strong> – React/Firebase Engineer</li>
          <li><strong>Sonic Motor Valors</strong> – React/Firebase Engineer</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Rental Management Platform</li>
          <li>School Management System</li>
          <li>Airbnb Management Dashboard</li>
          <li>Remote PC Control Tool</li>
          <li>Tourism Platform</li>
          <li>Workflow Automation Suite</li>
          <li>E‑Book Platform</li>
        </ul>
      </section>
    </section>
  );
}
