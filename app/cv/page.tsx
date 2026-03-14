import type { Metadata } from 'next';
import PrintButton from './PrintButton';

export const metadata: Metadata = {
  title: 'CV — Sattanathan Chandran | Logistics & Supply Chain Specialist',
  description: 'Professional CV of Sattanathan Chandran — Logistics Coordinator with 4+ years of supply chain, SAP S/4HANA, and process automation experience.',
};

export default function CVPage() {
  return (
    <>
      <PrintButton />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #f0f0f0;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        .cv-page {
          width: 210mm;
          min-height: 297mm;
          margin: 20px auto;
          background: #fff;
          box-shadow: 0 4px 32px rgba(0,0,0,0.18);
          display: grid;
          grid-template-columns: 68mm 1fr;
        }

        /* ── SIDEBAR ── */
        .sidebar {
          background: #1a1a2e;
          color: #e2e8f0;
          padding: 32px 22px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sidebar-header { text-align: center; }
        .sidebar-header .initials {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; font-weight: 700; color: #fff;
          margin: 0 auto 12px;
          letter-spacing: 1px;
        }
        .sidebar-header h1 {
          font-size: 15px; font-weight: 700; color: #fff;
          line-height: 1.3; margin-bottom: 4px;
        }
        .sidebar-header .role {
          font-size: 10px; color: #818cf8;
          text-transform: uppercase; letter-spacing: 0.08em; font-weight: 500;
          line-height: 1.5;
        }

        .divider {
          height: 1px; background: rgba(255,255,255,0.08); margin: 0;
        }

        .section-label {
          font-size: 8.5px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: #818cf8; margin-bottom: 10px;
        }

        .contact-list { display: flex; flex-direction: column; gap: 7px; }
        .contact-item {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 9.5px; color: #94a3b8; line-height: 1.4;
          word-break: break-all;
        }
        .contact-item svg { flex-shrink: 0; margin-top: 1px; }
        .contact-item a { color: #818cf8; text-decoration: none; }

        .skill-block { margin-bottom: 12px; }
        .skill-name { font-size: 9.5px; color: #cbd5e1; margin-bottom: 4px; font-weight: 500; }
        .skill-bar-bg {
          height: 3px; background: rgba(255,255,255,0.08);
          border-radius: 2px; overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%; border-radius: 2px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
        }

        .tag-list { display: flex; flex-wrap: wrap; gap: 5px; }
        .tag {
          font-size: 8.5px; padding: 2px 7px;
          border-radius: 4px; border: 1px solid rgba(99,102,241,0.25);
          color: #94a3b8; background: rgba(99,102,241,0.08);
        }

        .cert-item { margin-bottom: 8px; }
        .cert-name { font-size: 9.5px; color: #c4b5fd; font-weight: 600; line-height: 1.3; }
        .cert-meta { font-size: 8.5px; color: #64748b; margin-top: 1px; }

        .lang-item {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 5px;
        }
        .lang-name { font-size: 9.5px; color: #cbd5e1; }
        .lang-level { font-size: 8.5px; color: #64748b; }

        /* ── MAIN ── */
        .main {
          padding: 32px 28px;
          display: flex; flex-direction: column; gap: 22px;
        }

        .main-section-title {
          font-size: 9px; font-weight: 700;
          text-transform: uppercase; letter-spacing: 0.12em;
          color: #6366f1; padding-bottom: 6px;
          border-bottom: 1.5px solid #e8e8f0;
          margin-bottom: 12px;
        }

        /* Summary */
        .summary p {
          font-size: 10px; color: #374151;
          line-height: 1.7;
        }

        /* Key Metrics */
        .metrics-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;
        }
        .metric-card {
          text-align: center; padding: 8px 4px;
          border: 1px solid #e8e8f0; border-radius: 6px;
          background: #fafafa;
        }
        .metric-value {
          font-size: 15px; font-weight: 700; color: #4f46e5; line-height: 1.2;
        }
        .metric-label { font-size: 8px; color: #6b7280; margin-top: 2px; }

        /* Experience */
        .exp-item { margin-bottom: 16px; }
        .exp-item:last-child { margin-bottom: 0; }
        .exp-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 2px; }
        .exp-role { font-size: 11px; font-weight: 700; color: #111827; }
        .exp-period { font-size: 8.5px; color: #6b7280; text-align: right; flex-shrink: 0; }
        .exp-company { font-size: 9.5px; color: #6366f1; font-weight: 600; margin-bottom: 6px; }
        .exp-bullets { list-style: none; display: flex; flex-direction: column; gap: 3px; }
        .exp-bullets li {
          display: flex; align-items: flex-start; gap: 6px;
          font-size: 9.5px; color: #374151; line-height: 1.5;
        }
        .exp-bullets li::before {
          content: '▸'; color: #6366f1; flex-shrink: 0; font-size: 8px; margin-top: 1.5px;
        }
        .exp-achievements {
          display: flex; gap: 8px; margin-top: 7px; flex-wrap: wrap;
        }
        .exp-achievement {
          font-size: 8.5px; padding: 2px 7px;
          border-radius: 4px; border: 1px solid #e0e7ff;
          color: #4338ca; background: #eef2ff;
          font-weight: 600;
        }

        /* Education */
        .edu-item { display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
        .edu-degree { font-size: 10.5px; font-weight: 700; color: #111827; }
        .edu-school { font-size: 9.5px; color: #6366f1; font-weight: 500; margin-top: 1px; }
        .edu-location { font-size: 8.5px; color: #6b7280; margin-top: 1px; }
        .edu-period { font-size: 8.5px; color: #6b7280; text-align: right; flex-shrink: 0; }

        /* Awards */
        .award-item { margin-bottom: 8px; }
        .award-title { font-size: 10px; font-weight: 700; color: #111827; }
        .award-desc { font-size: 9px; color: #6b7280; margin-top: 1px; line-height: 1.4; }
        .award-org { font-size: 8.5px; color: #6366f1; font-weight: 500; margin-top: 1px; }

        /* Volunteering */
        .vol-item {
          display: flex; align-items: flex-start; gap: 6px;
          font-size: 9.5px; color: #374151; line-height: 1.5; margin-bottom: 4px;
        }
        .vol-item::before {
          content: '▸'; color: #10b981; flex-shrink: 0; font-size: 8px; margin-top: 1.5px;
        }

        @media print {
          @page { size: A4; margin: 0; }
          html, body { background: #fff !important; }
          .no-print { display: none !important; }
          .cv-page {
            margin: 0; box-shadow: none;
            width: 210mm; min-height: 297mm;
          }
        }
      `}</style>

      <div className="cv-page">
        {/* ═══ SIDEBAR ═══ */}
        <aside className="sidebar">

          <div className="sidebar-header">
            <div className="initials">SC</div>
            <h1>Sattanathan Chandran</h1>
            <p className="role">Logistics &amp; Supply Chain<br />Specialist · SAP Key User</p>
          </div>

          <div className="divider" />

          {/* Contact */}
          <div>
            <p className="section-label">Contact</p>
            <div className="contact-list">
              <div className="contact-item">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Dubai, United Arab Emirates
              </div>
              <div className="contact-item">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.34h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.63-1.63a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +971 50 387 1079
              </div>
              <div className="contact-item">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:satta02122002@gmail.com">satta02122002@gmail.com</a>
              </div>
              <div className="contact-item">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                <a href="https://linkedin.com/in/sat-logistics">linkedin.com/in/sat-logistics</a>
              </div>
              <div className="contact-item">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                <a href="https://satteches.com">satteches.com</a>
              </div>
            </div>
          </div>

          <div className="divider" />

          {/* Core Skills */}
          <div>
            <p className="section-label">Supply Chain &amp; Ops</p>
            {[
              { name: 'SAP S/4HANA MM & WM', pct: 95 },
              { name: 'Inventory Management', pct: 92 },
              { name: 'Warehouse Ops & 5S', pct: 90 },
              { name: 'Freight & Customs', pct: 88 },
              { name: 'Shipment Coordination', pct: 87 },
            ].map(s => (
              <div className="skill-block" key={s.name}>
                <div className="skill-name">{s.name}</div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="section-label">Data &amp; Automation</p>
            {[
              { name: 'Advanced Excel / VBA', pct: 90 },
              { name: 'Data Analysis & KPI Reporting', pct: 82 },
              { name: 'Power BI', pct: 72 },
              { name: 'Power Automate', pct: 65 },
            ].map(s => (
              <div className="skill-block" key={s.name}>
                <div className="skill-name">{s.name}</div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill" style={{ width: `${s.pct}%`, background: 'linear-gradient(90deg, #8b5cf6, #ec4899)' }} />
                </div>
              </div>
            ))}
          </div>

          <div className="divider" />

          {/* Tools */}
          <div>
            <p className="section-label">Tools &amp; Platforms</p>
            <div className="tag-list">
              {['SAP S/4HANA','Advanced Excel','VBA / Macros','Power BI','Qlik Sense','Delmia Apriso','Focus ERP','IQ WMS','UKG Dimensions','AutoCAD','Power Automate','Git / GitHub'].map(t => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Certifications */}
          <div>
            <p className="section-label">Certifications</p>
            {[
              { name: 'Lean Six Sigma', meta: 'PMI · 2024' },
              { name: 'Career Essentials in Data Analysis', meta: 'Microsoft · 2024' },
              { name: 'International Logistics & Global Trade', meta: 'LinkedIn · 2023' },
              { name: 'Supply Chain Foundations', meta: 'NASBA · 2023' },
              { name: 'Excel Essential Training (M365)', meta: 'LinkedIn · 2023' },
              { name: 'Learning SAP MM', meta: 'LinkedIn · 2022' },
            ].map(c => (
              <div className="cert-item" key={c.name}>
                <div className="cert-name">{c.name}</div>
                <div className="cert-meta">{c.meta}</div>
              </div>
            ))}
          </div>

          <div className="divider" />

          {/* Languages */}
          <div>
            <p className="section-label">Languages</p>
            {[
              { lang: 'Tamil', level: 'Native' },
              { lang: 'English', level: 'Professional' },
              { lang: 'Malayalam', level: 'Professional' },
              { lang: 'Hindi', level: 'Basic' },
            ].map(l => (
              <div className="lang-item" key={l.lang}>
                <span className="lang-name">{l.lang}</span>
                <span className="lang-level">{l.level}</span>
              </div>
            ))}
          </div>

        </aside>

        {/* ═══ MAIN CONTENT ═══ */}
        <main className="main">

          {/* Professional Summary */}
          <div className="summary">
            <p className="main-section-title">Professional Summary</p>
            <p>
              Results-driven Logistics &amp; Supply Chain Specialist with <strong>4+ years of end-to-end operations
              experience</strong> across high-stakes manufacturing and international freight forwarding environments in
              India and Dubai. SAP S/4HANA Key User (MM &amp; WM modules) with a proven track record of
              achieving <strong>99.5% inventory accuracy</strong> and managing 1,000+ shipments. Built
              internal automation tools — including an Excel VBA macro suite and a web-based billing
              platform — that eliminated manual bottlenecks and transformed month-end processing.
              Currently managing <strong>10+ global client accounts</strong> at ISS Global Forwarding,
              with expertise spanning customs clearance, warehouse layout design, and supply chain
              technology implementation.
            </p>
          </div>

          {/* Key Metrics */}
          <div>
            <p className="main-section-title">Key Achievements</p>
            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-value">4+</div>
                <div className="metric-label">Years Experience</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">99.5%</div>
                <div className="metric-label">Inventory Accuracy</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">1,000+</div>
                <div className="metric-label">Shipments Managed</div>
              </div>
              <div className="metric-card">
                <div className="metric-value">15%</div>
                <div className="metric-label">Discrepancy Reduction</div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <p className="main-section-title">Professional Experience</p>

            <div className="exp-item">
              <div className="exp-header">
                <span className="exp-role">Logistics Coordinator</span>
                <span className="exp-period">March 2024 – Present</span>
              </div>
              <div className="exp-company">ISS Global Forwarding UAE LLC · Dubai, UAE · Full-time</div>
              <ul className="exp-bullets">
                <li>Managed end-to-end logistics for 10+ global and regional clients, ensuring SLA compliance and real-time shipment tracking across air, sea, and land corridors.</li>
                <li>Executed Dubai Customs clearance (BOE) and standardised ASN-to-GRN reconciliation workflows, reducing discrepancies by <strong>15%</strong>.</li>
                <li>Designed optimised warehouse layouts with dynamic storage locations for data centre logistics, cutting picking cycle times significantly.</li>
                <li>Handled specialised IT hardware logistics — RMA warranty claims, failed device processing — under tight SLAs.</li>
                <li>Built an internal web-based billing &amp; activity tracking tool that <strong>automated 100% of month-end</strong> storage and handling charge summaries.</li>
                <li>Generated weekly/monthly KPI reports on inventory health, transport costs, and operational performance for senior stakeholders.</li>
              </ul>
              <div className="exp-achievements">
                <span className="exp-achievement">15% Discrepancy Reduction</span>
                <span className="exp-achievement">10+ Global Clients</span>
                <span className="exp-achievement">100% Month-End Automation</span>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-header">
                <span className="exp-role">Warehouse Associate &amp; Executive</span>
                <span className="exp-period">Oct 2021 – Oct 2023</span>
              </div>
              <div className="exp-company">Alstom Transport India Pvt. Ltd. · Coimbatore, India · Full-time</div>
              <ul className="exp-bullets">
                <li>Primary SAP S/4HANA key user for MM &amp; WM modules — maintained Material Master data, configured dynamic and fixed storage locations.</li>
                <li>Led kitting and material picking for large-scale rail manufacturing projects, ensuring <strong>100% on-time supply</strong> to production lines.</li>
                <li>Conducted 30–40 daily cycle counts of high-value items; performed Root Cause Analysis and implemented corrective actions to sustain <strong>99.5% inventory accuracy</strong>.</li>
                <li>Developed Excel VBA macros to automate clearance of negative WIP/GOGI SAP errors, eliminating hours of manual data entry per week.</li>
                <li>Spearheaded 5S implementation across the warehouse; monitored operator KPIs via Delmia Apriso — recognised with <strong>5S Initiative Award (May 2023)</strong>.</li>
              </ul>
              <div className="exp-achievements">
                <span className="exp-achievement">99.5% Inventory Accuracy</span>
                <span className="exp-achievement">SAP MM &amp; WM</span>
                <span className="exp-achievement">5S Award Winner</span>
              </div>
            </div>

            <div className="exp-item">
              <div className="exp-header">
                <span className="exp-role">Store Assistant</span>
                <span className="exp-period">Dec 2020 – Sep 2021</span>
              </div>
              <div className="exp-company">Youngshin Automotive India Pvt. Ltd. · Sriperumbudur, India · Full-time</div>
              <ul className="exp-bullets">
                <li>Managed full inbound/outbound cycle: receiving, inspection, storage, and distribution of automotive materials across production lines.</li>
                <li>Maintained meticulous inventory records against purchase orders; ensured all stock was correctly labelled and located, achieving <strong>98%+ stock accuracy</strong>.</li>
                <li>Coordinated vendor deliveries and outbound dispatch in compliance with automotive storage and EHS safety guidelines.</li>
              </ul>
              <div className="exp-achievements">
                <span className="exp-achievement">98%+ Stock Accuracy</span>
                <span className="exp-achievement">Full EHS Compliance</span>
              </div>
            </div>
          </div>

          {/* Education & Awards in 2-col */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <p className="main-section-title">Education</p>
              <div className="edu-item">
                <div>
                  <div className="edu-degree">Diploma in Mechanical Engineering</div>
                  <div className="edu-school">Government Polytechnic College</div>
                  <div className="edu-location">Tuticorin, Tamil Nadu, India</div>
                </div>
                <div className="edu-period">2017 – 2020</div>
              </div>
            </div>
            <div>
              <p className="main-section-title">Awards &amp; Recognition</p>
              <div className="award-item">
                <div className="award-title">5S Initiative Award</div>
                <div className="award-org">Alstom Transport India · May 2023</div>
                <div className="award-desc">Recognised for outstanding 5S implementation enhancing warehouse organisation and safety.</div>
              </div>
              <div className="award-item">
                <div className="award-title">GSI Excellence &amp; Excellent Award</div>
                <div className="award-org">Alstom Transport India · July 2022</div>
                <div className="award-desc">Recognised for exceptional training and expertise in SAP MM and WM modules.</div>
              </div>
            </div>
          </div>

          {/* Volunteering */}
          <div>
            <p className="main-section-title">Volunteering</p>
            <div className="vol-item">Fire Safety &amp; Emergency First Aid Volunteer — ISS Global Forwarding UAE LLC, Dubai</div>
            <div className="vol-item">Team Organiser, "Lion Hearts" Initiative (300+ employees) — Alstom Transport India</div>
            <div className="vol-item">Sports Day Event Organiser — Government Polytechnic College, Tuticorin</div>
          </div>

        </main>
      </div>
    </>
  );
}
