import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          Built with React & Framer Motion. Inspired by modern design.
        </p>
        <p className="footer-copy">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>

      <style>{`
        .footer {
          padding: 32px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          background: #0a0a0f;
        }
        .footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
        }
        .footer-text {
          font-size: 0.85rem;
          color: #64748b;
        }
        .footer-copy {
          font-size: 0.8rem;
          color: #475569;
        }
      `}</style>
    </footer>
  )
}
