import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { blogPosts } from '../data/portfolioData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Blog() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="writing" className="section blog-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Writing</span>
          <h2 className="section-title">Technical blog posts</h2>
          <p className="section-subtitle">
            I write about building production AI/ML systems — from computer vision to LLM-powered applications
          </p>
        </motion.div>

        <motion.div
          className="blog-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {blogPosts.map((post) => (
            <motion.a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="blog-card"
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-desc">{post.description}</p>
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="blog-arrow">
                <FiArrowRight />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="blog-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://github.com/roohan-514/technical-blog-posts"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FiExternalLink /> View all articles
          </a>
        </motion.div>
      </div>

      <style>{`
        .blog-section {
          background: linear-gradient(180deg, #0d1117 0%, #0a0a0f 100%);
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .blog-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: border-color 0.4s, box-shadow 0.4s;
          position: relative;
          overflow: hidden;
        }
        .blog-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #6366f1, transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .blog-card:hover::before {
          opacity: 1;
        }
        .blog-card:hover {
          border-color: rgba(99, 102, 241, 0.2);
          box-shadow: 0 12px 48px rgba(99, 102, 241, 0.06);
        }
        .blog-content {
          flex: 1;
        }
        .blog-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .blog-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .blog-tag {
          font-size: 0.75rem;
          font-weight: 500;
          color: #6366f1;
          background: rgba(99, 102, 241, 0.06);
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid rgba(99, 102, 241, 0.1);
        }
        .blog-arrow {
          margin-top: 20px;
          color: #6366f1;
          font-size: 1.2rem;
          transition: transform 0.3s;
        }
        .blog-card:hover .blog-arrow {
          transform: translateX(6px);
        }
        .blog-cta {
          text-align: center;
          margin-top: 40px;
        }
        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #6366f1;
          border: 1px solid rgba(99, 102, 241, 0.3);
          background: rgba(99, 102, 241, 0.06);
          transition: all 0.3s;
        }
        .btn-outline:hover {
          background: rgba(99, 102, 241, 0.12);
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
