import React, { useState } from 'react';

const MSLPricingPage = () => {
  const [activeTab, setActiveTab] = useState('pillars');
  const [expandedFeatures, setExpandedFeatures] = useState({});
  const [billingCycle, setBillingCycle] = useState('monthly');

  const toggleFeatures = (id) => {
    setExpandedFeatures(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Pillar data
  const pillars = [
    {
      id: 'web-presence',
      name: 'Web Presence',
      tagline: 'Get found. Look legitimate. Convert visitors.',
      icon: '◈',
      color: '#00E5C3',
      tiers: [
        {
          id: 'wp1',
          name: 'WP1',
          title: 'Launch Landing Page',
          description: 'Single-page site designed to convert fast.',
          price: 597,
          type: 'one-time',
          installments: '2 payments of $325',
          popular: false,
          features: [
            '1-page SPA with conversion sections',
            'Hero, trust, services, benefits, process, FAQ, CTAs',
            'Mini gallery (up to 5 images)',
            'Testimonials (up to 5 quotes)',
            'Contact form + click-to-call/text + map',
            'Basic SEO setup + indexing',
            'Domain connection + SSL + analytics',
            '1-week turnaround'
          ]
        },
        {
          id: 'wp2',
          name: 'WP2',
          title: 'Authority Website',
          description: 'Multi-page site built to compete and rank.',
          price: 1197,
          type: 'one-time',
          installments: '3 payments of $425',
          popular: true,
          features: [
            'Everything in WP1, plus:',
            'Multi-page structure (services, about, contact, FAQs, areas)',
            'Individual service pages with conversion blocks',
            'Portfolio/gallery page with organization',
            'Reviews/testimonials page (expanded proof)',
            'Case studies/project spotlights',
            'Strong SEO architecture + internal linking',
            'Page templates + tracking setup',
            '2-3 week turnaround'
          ]
        }
      ]
    },
    {
      id: 'lead-system',
      name: 'Lead System',
      tagline: 'Capture every lead. Respond instantly. Convert more.',
      icon: '⟡',
      color: '#FF6B35',
      tiers: [
        {
          id: 'ls1',
          name: 'LS1',
          title: 'Capture + Instant Response',
          description: 'Stop losing leads and respond immediately.',
          price: 297,
          type: 'monthly',
          setupFee: 497,
          popular: false,
          features: [
            'Optimized lead forms (structured fields + routing)',
            'Webhook delivery to CRM/database',
            'Sheets, Airtable, HubSpot, etc.',
            'Instant notifications (email/SMS/Slack)',
            'Immediate auto-reply to leads',
            'Confirmation + expectation setting',
            'Basic lead tagging & qualification',
            'Service type, urgency, location'
          ]
        },
        {
          id: 'ls2',
          name: 'LS2',
          title: 'Follow-Up + Reviews Engine',
          description: 'Turn more leads into booked jobs and generate reviews.',
          price: 497,
          type: 'monthly',
          setupFee: 697,
          popular: true,
          features: [
            'Everything in LS1, plus:',
            'Follow-up sequences (SMS/email)',
            'Booking link injection + reminders',
            'Pipeline stages (new/contacted/booked/won/lost)',
            'Post-job review request automation',
            'Review reminders & tracking',
            'Monthly lead + response snapshot',
            'Performance metrics dashboard'
          ]
        }
      ]
    },
    {
      id: 'growth-ops',
      name: 'Growth Ops',
      tagline: 'Stay visible. Nurture leads. Run campaigns that convert.',
      icon: '◆',
      color: '#8B5CF6',
      tiers: [
        {
          id: 'go1',
          name: 'GO1',
          title: 'Content + Presence Engine',
          description: 'Consistent updates that keep the business visible.',
          price: 497,
          type: 'monthly',
          popular: false,
          features: [
            'Monthly content publishing (client-approved)',
            'Blog posts and/or site updates',
            'Rotating offers & banners',
            'Basic content planning',
            'Topics aligned to services + seasonality',
            'Light on-page refreshes',
            'Monthly reporting snapshot',
            'Traffic + leads overview'
          ]
        },
        {
          id: 'go2',
          name: 'GO2',
          title: 'Campaign + Nurture Engine',
          description: 'Run promotions and keep leads warm automatically.',
          price: 997,
          type: 'monthly',
          popular: true,
          features: [
            'Everything in GO1, plus:',
            'Seasonal campaign landing pages',
            'Promo-focused + conversion tracked',
            'Email campaigns + segmentation',
            'Newsletter and promotional sequences',
            'Lead magnet creation',
            'Nurture sequence (welcome/follow-up)',
            'Conversion optimization iterations'
          ]
        }
      ]
    }
  ];

  const buildStudio = {
    name: 'Build Studio',
    tagline: 'Custom software that removes friction and scales your business.',
    icon: '⬡',
    color: '#FFD93D',
    tiers: [
      {
        id: 'bs1',
        name: 'BS1',
        title: 'Internal App Sprint',
        description: 'Lightweight internal tools that remove manual work.',
        priceRange: '$5,000 – $15,000',
        timeline: '4-8 weeks',
        popular: false,
        features: [
          'Discovery + workflow mapping',
          'Staff process documentation',
          'Scoped internal app build:',
          '  • Lead intake + quoting dashboard',
          '  • Job tracking + status updates',
          '  • Scheduling/admin views',
          '  • Customer request/approval portals',
          'Secure access (roles/permissions)',
          'Integrations (forms, email, CRM, webhooks)',
          'Training + handoff documentation',
          'Optional maintenance plan'
        ]
      },
      {
        id: 'bs2',
        name: 'BS2',
        title: 'SaaS Product Build',
        description: 'Customer-facing software designed to scale.',
        priceRange: '$15,000 – $50,000+',
        timeline: '8-16 weeks',
        popular: true,
        features: [
          'Product definition + MVP scope',
          'Roadmap planning',
          'Core platform features:',
          '  • Authentication + roles',
          '  • Database + admin panel',
          '  • Billing/subscriptions',
          '  • Logging/monitoring',
          '  • Email/SMS notifications',
          'Multi-tenant architecture option',
          'API/integration layer',
          'Production deployment + CI/CD',
          'Post-launch support option'
        ]
      }
    ]
  };

  const bundles = [
    {
      name: 'Launch Stack',
      description: 'Website + Lead Capture',
      includes: ['WP1', 'LS1'],
      regularPrice: 1391,
      bundlePrice: 1197,
      savings: 14,
      color: '#00E5C3'
    },
    {
      name: 'Growth Stack',
      description: 'Website + Full Lead System + Content',
      includes: ['WP2', 'LS2', 'GO1'],
      regularPrice: 2191,
      bundlePrice: 1797,
      savings: 18,
      color: '#FF6B35'
    },
    {
      name: 'Full Suite',
      description: 'Everything. Maximum leverage.',
      includes: ['WP2', 'LS2', 'GO2'],
      regularPrice: 2691,
      bundlePrice: 2197,
      savings: 18,
      popular: true,
      color: '#8B5CF6'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0A0A0F',
      color: '#FAFAFA',
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      overflowX: 'hidden'
    }}>
      {/* Custom Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Instrument+Serif:ital@0;1&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .serif {
          font-family: 'Instrument Serif', Georgia, serif;
        }
        
        .pillar-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .pillar-card:hover {
          transform: translateY(-8px);
        }
        
        .tier-card {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .tier-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .tier-card:hover::before {
          opacity: 1;
        }
        
        .tier-card:hover {
          background: rgba(255,255,255,0.04);
        }
        
        .popular-badge {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .feature-list {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, opacity 0.3s ease;
          opacity: 0;
        }
        
        .feature-list.expanded {
          max-height: 600px;
          opacity: 1;
        }
        
        .tab-button {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .tab-button::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #00E5C3;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .tab-button.active::after {
          width: 100%;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #00E5C3, #8B5CF6, #FF6B35);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .cta-button {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .cta-button:hover::before {
          left: 100%;
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 229, 195, 0.3);
        }
        
        .bundle-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .bundle-card:hover {
          transform: scale(1.02);
        }

        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.03;
          z-index: 1000;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
      `}</style>
      
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Hero Section */}
      <section style={{
        padding: '80px 24px 60px',
        textAlign: 'center',
        position: 'relative'
      }}>
        {/* Background gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
          <p style={{
            fontSize: '13px',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            color: '#00E5C3',
            marginBottom: '16px',
            fontWeight: 500
          }}>
            Pricing & Packages
          </p>
          
          <h1 style={{
            fontSize: 'clamp(36px, 6vw, 64px)',
            fontWeight: 400,
            lineHeight: 1.1,
            marginBottom: '24px'
          }}>
            <span className="serif" style={{ fontStyle: 'italic', fontWeight: 400 }}>Digital infrastructure</span>
            <br />
            <span style={{ fontWeight: 600 }}>that actually works.</span>
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: 'rgba(250, 250, 250, 0.6)',
            maxWidth: '600px',
            margin: '0 auto 40px',
            lineHeight: 1.7
          }}>
            Three pillars. One system. Everything a local service business needs to get found, capture leads, and grow—without the agency bloat.
          </p>
          
          {/* Tab Navigation */}
          <div style={{
            display: 'inline-flex',
            gap: '8px',
            padding: '6px',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.08)'
          }}>
            {[
              { id: 'pillars', label: 'Core Pillars' },
              { id: 'bundles', label: 'Bundles & Savings' },
              { id: 'build', label: 'Build Studio' }
            ].map(tab => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '12px 24px',
                  background: activeTab === tab.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  color: activeTab === tab.id ? '#fff' : 'rgba(255,255,255,0.5)',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px 100px' }}>
        
        {/* Core Pillars View */}
        {activeTab === 'pillars' && (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '80px'
          }}>
            {pillars.map((pillar, pillarIndex) => (
              <section key={pillar.id} style={{ position: 'relative' }}>
                {/* Pillar Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '12px'
                }}>
                  <span style={{
                    fontSize: '32px',
                    color: pillar.color,
                    opacity: 0.8
                  }}>{pillar.icon}</span>
                  <div>
                    <h2 style={{
                      fontSize: '28px',
                      fontWeight: 600,
                      marginBottom: '4px'
                    }}>
                      <span style={{ color: pillar.color }}>Pillar {pillarIndex + 1}:</span> {pillar.name}
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>
                      {pillar.tagline}
                    </p>
                  </div>
                </div>
                
                {/* Tier Cards */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  gap: '24px',
                  marginTop: '32px'
                }}>
                  {pillar.tiers.map(tier => (
                    <div
                      key={tier.id}
                      className="tier-card"
                      style={{
                        '--accent-color': pillar.color,
                        background: 'rgba(255,255,255,0.02)',
                        border: tier.popular 
                          ? `2px solid ${pillar.color}` 
                          : '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '20px',
                        padding: '32px',
                        position: 'relative'
                      }}
                    >
                      {tier.popular && (
                        <div 
                          className="popular-badge"
                          style={{
                            position: 'absolute',
                            top: '-12px',
                            right: '24px',
                            background: pillar.color,
                            color: '#0A0A0F',
                            padding: '6px 14px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: 600,
                            letterSpacing: '0.5px'
                          }}
                        >
                          RECOMMENDED
                        </div>
                      )}
                      
                      <div style={{ marginBottom: '24px' }}>
                        <div style={{
                          display: 'inline-block',
                          background: `${pillar.color}15`,
                          color: pillar.color,
                          padding: '4px 12px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: 600,
                          marginBottom: '12px'
                        }}>
                          {tier.name}
                        </div>
                        <h3 style={{
                          fontSize: '22px',
                          fontWeight: 600,
                          marginBottom: '8px'
                        }}>{tier.title}</h3>
                        <p style={{
                          color: 'rgba(255,255,255,0.5)',
                          fontSize: '14px',
                          lineHeight: 1.5
                        }}>{tier.description}</p>
                      </div>
                      
                      {/* Pricing */}
                      <div style={{ marginBottom: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                          <span style={{
                            fontSize: '42px',
                            fontWeight: 700,
                            letterSpacing: '-2px'
                          }}>${tier.price.toLocaleString()}</span>
                          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px' }}>
                            {tier.type === 'monthly' ? '/mo' : ''}
                          </span>
                        </div>
                        {tier.type === 'one-time' && (
                          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginTop: '4px' }}>
                            One-time • {tier.installments}
                          </p>
                        )}
                        {tier.setupFee && (
                          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px', marginTop: '4px' }}>
                            + ${tier.setupFee} setup fee
                          </p>
                        )}
                      </div>
                      
                      {/* CTA */}
                      <button
                        className="cta-button"
                        style={{
                          width: '100%',
                          padding: '16px 24px',
                          background: tier.popular ? pillar.color : 'transparent',
                          border: tier.popular ? 'none' : `1px solid ${pillar.color}`,
                          borderRadius: '12px',
                          color: tier.popular ? '#0A0A0F' : pillar.color,
                          fontSize: '15px',
                          fontWeight: 600,
                          cursor: 'pointer',
                          fontFamily: 'inherit',
                          marginBottom: '24px'
                        }}
                      >
                        {tier.type === 'one-time' ? 'Get Started' : 'Start with ' + tier.name}
                      </button>
                      
                      {/* Features Toggle */}
                      <button
                        onClick={() => toggleFeatures(tier.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          padding: '12px 0',
                          background: 'transparent',
                          border: 'none',
                          borderTop: '1px solid rgba(255,255,255,0.08)',
                          color: 'rgba(255,255,255,0.6)',
                          fontSize: '14px',
                          cursor: 'pointer',
                          fontFamily: 'inherit'
                        }}
                      >
                        <span>What's included</span>
                        <span style={{
                          transform: expandedFeatures[tier.id] ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}>▾</span>
                      </button>
                      
                      {/* Features List */}
                      <ul 
                        className={`feature-list ${expandedFeatures[tier.id] ? 'expanded' : ''}`}
                        style={{
                          listStyle: 'none',
                          padding: 0
                        }}
                      >
                        {tier.features.map((feature, i) => (
                          <li key={i} style={{
                            display: 'flex',
                            gap: '10px',
                            padding: '8px 0',
                            fontSize: '13px',
                            color: feature.startsWith('Everything') || feature.startsWith('  ') 
                              ? 'rgba(255,255,255,0.7)' 
                              : 'rgba(255,255,255,0.5)',
                            fontWeight: feature.startsWith('Everything') ? 500 : 400,
                            paddingLeft: feature.startsWith('  ') ? '20px' : '0'
                          }}>
                            {!feature.startsWith('  ') && (
                              <span style={{ color: pillar.color, flexShrink: 0 }}>✓</span>
                            )}
                            <span>{feature.trim()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}

        {/* Bundles View */}
        {activeTab === 'bundles' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '12px' }}>
                Bundle <span className="gradient-text">&</span> Save
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
                Combine pillars to get the full system working together. Save 14-18% instantly.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              maxWidth: '1100px',
              margin: '0 auto'
            }}>
              {bundles.map((bundle, i) => (
                <div
                  key={i}
                  className="bundle-card"
                  style={{
                    background: bundle.popular 
                      ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(0, 229, 195, 0.1))'
                      : 'rgba(255,255,255,0.02)',
                    border: bundle.popular 
                      ? '2px solid rgba(139, 92, 246, 0.5)' 
                      : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '24px',
                    padding: '36px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {bundle.popular && (
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      right: '-35px',
                      background: 'linear-gradient(135deg, #8B5CF6, #00E5C3)',
                      color: '#fff',
                      padding: '6px 45px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      transform: 'rotate(45deg)'
                    }}>
                      BEST VALUE
                    </div>
                  )}
                  
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: `${bundle.color}20`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <span style={{ fontSize: '24px', color: bundle.color }}>◈</span>
                  </div>
                  
                  <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>
                    {bundle.name}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', marginBottom: '20px' }}>
                    {bundle.description}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '24px'
                  }}>
                    {bundle.includes.map((item, j) => (
                      <span key={j} style={{
                        background: 'rgba(255,255,255,0.08)',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: 500
                      }}>{item}</span>
                    ))}
                  </div>
                  
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{
                        fontSize: '36px',
                        fontWeight: 700,
                        letterSpacing: '-1px'
                      }}>${bundle.bundlePrice.toLocaleString()}</span>
                      <span style={{
                        textDecoration: 'line-through',
                        color: 'rgba(255,255,255,0.35)',
                        fontSize: '18px'
                      }}>${bundle.regularPrice.toLocaleString()}</span>
                    </div>
                    <p style={{
                      color: '#00E5C3',
                      fontSize: '13px',
                      fontWeight: 500,
                      marginTop: '4px'
                    }}>
                      Save {bundle.savings}% – that's ${bundle.regularPrice - bundle.bundlePrice} off
                    </p>
                  </div>
                  
                  <button
                    className="cta-button"
                    style={{
                      width: '100%',
                      padding: '16px 24px',
                      background: bundle.popular 
                        ? 'linear-gradient(135deg, #8B5CF6, #00E5C3)'
                        : 'transparent',
                      border: bundle.popular ? 'none' : '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '12px',
                      color: '#fff',
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: 'inherit'
                    }}
                  >
                    Get the {bundle.name}
                  </button>
                </div>
              ))}
            </div>
            
            {/* Additional Bundle Info */}
            <div style={{
              marginTop: '60px',
              textAlign: 'center',
              padding: '40px',
              background: 'rgba(255,255,255,0.02)',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>
                Need a custom combination?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', marginBottom: '20px' }}>
                Mix and match any pillars. Two pillars = 10% off. All three = 15-18% off.
              </p>
              <button style={{
                padding: '14px 28px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}>
                Talk to Us About Your Needs →
              </button>
            </div>
          </div>
        )}

        {/* Build Studio View */}
        {activeTab === 'build' && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '16px'
              }}>
                <span style={{ fontSize: '36px', color: buildStudio.color }}>
                  {buildStudio.icon}
                </span>
                <h2 style={{ fontSize: '32px', fontWeight: 600 }}>
                  {buildStudio.name}
                </h2>
              </div>
              <p style={{ 
                color: 'rgba(255,255,255,0.5)', 
                fontSize: '17px', 
                maxWidth: '600px', 
                margin: '0 auto',
                lineHeight: 1.6
              }}>
                {buildStudio.tagline}
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '32px',
              maxWidth: '1100px',
              margin: '0 auto'
            }}>
              {buildStudio.tiers.map(tier => (
                <div
                  key={tier.id}
                  className="tier-card"
                  style={{
                    '--accent-color': buildStudio.color,
                    background: tier.popular 
                      ? 'linear-gradient(180deg, rgba(255, 217, 61, 0.08), rgba(255, 217, 61, 0.02))'
                      : 'rgba(255,255,255,0.02)',
                    border: tier.popular 
                      ? `2px solid ${buildStudio.color}` 
                      : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '24px',
                    padding: '40px',
                    position: 'relative'
                  }}
                >
                  {tier.popular && (
                    <div 
                      className="popular-badge"
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        right: '24px',
                        background: buildStudio.color,
                        color: '#0A0A0F',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 600,
                        letterSpacing: '0.5px'
                      }}
                    >
                      MOST POPULAR
                    </div>
                  )}
                  
                  <div style={{
                    display: 'inline-block',
                    background: `${buildStudio.color}20`,
                    color: buildStudio.color,
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    marginBottom: '16px'
                  }}>
                    {tier.name}
                  </div>
                  
                  <h3 style={{
                    fontSize: '26px',
                    fontWeight: 600,
                    marginBottom: '12px'
                  }}>{tier.title}</h3>
                  
                  <p style={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: '15px',
                    lineHeight: 1.6,
                    marginBottom: '28px'
                  }}>{tier.description}</p>
                  
                  {/* Pricing */}
                  <div style={{
                    background: 'rgba(0,0,0,0.3)',
                    borderRadius: '16px',
                    padding: '24px',
                    marginBottom: '28px'
                  }}>
                    <p style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '8px'
                    }}>Investment Range</p>
                    <p style={{
                      fontSize: '32px',
                      fontWeight: 700,
                      letterSpacing: '-1px',
                      marginBottom: '8px'
                    }}>{tier.priceRange}</p>
                    <p style={{
                      fontSize: '14px',
                      color: 'rgba(255,255,255,0.5)'
                    }}>Timeline: {tier.timeline}</p>
                  </div>
                  
                  {/* CTA */}
                  <button
                    className="cta-button"
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      background: tier.popular 
                        ? buildStudio.color 
                        : 'transparent',
                      border: tier.popular 
                        ? 'none' 
                        : `1px solid ${buildStudio.color}`,
                      borderRadius: '12px',
                      color: tier.popular ? '#0A0A0F' : buildStudio.color,
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      marginBottom: '28px'
                    }}
                  >
                    Schedule Discovery Call
                  </button>
                  
                  {/* Features */}
                  <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: '24px'
                  }}>
                    <p style={{
                      fontSize: '13px',
                      color: 'rgba(255,255,255,0.4)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      marginBottom: '16px'
                    }}>What's Included</p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {tier.features.map((feature, i) => (
                        <li key={i} style={{
                          display: 'flex',
                          gap: '10px',
                          padding: '8px 0',
                          fontSize: '14px',
                          color: feature.startsWith('  ') 
                            ? 'rgba(255,255,255,0.45)' 
                            : 'rgba(255,255,255,0.65)',
                          paddingLeft: feature.startsWith('  ') ? '24px' : '0'
                        }}>
                          {!feature.startsWith('  ') && (
                            <span style={{ color: buildStudio.color, flexShrink: 0 }}>◆</span>
                          )}
                          <span>{feature.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bundle Discount Callout */}
            <div style={{
              marginTop: '60px',
              padding: '48px',
              background: 'linear-gradient(135deg, rgba(255, 217, 61, 0.1), rgba(139, 92, 246, 0.1))',
              borderRadius: '24px',
              border: '1px solid rgba(255, 217, 61, 0.2)',
              textAlign: 'center',
              maxWidth: '800px',
              margin: '60px auto 0'
            }}>
              <span style={{ fontSize: '40px' }}>🎁</span>
              <h3 style={{ fontSize: '24px', fontWeight: 600, margin: '16px 0 12px' }}>
                Bundle with Pillars = 20% Off Build Studio
              </h3>
              <p style={{ 
                color: 'rgba(255,255,255,0.6)', 
                fontSize: '16px', 
                lineHeight: 1.7,
                maxWidth: '600px',
                margin: '0 auto 24px'
              }}>
                Already using our pillars? You're invested in growth—so we invest back. 
                Combine any Build Studio project with all three pillars and get 20% off the development cost.
              </p>
              <div style={{
                display: 'inline-flex',
                gap: '12px',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <span style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px'
                }}>
                  Full Suite + BS1 → Save ~$1,500+
                </span>
                <span style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontSize: '13px'
                }}>
                  Full Suite + BS2 → Save ~$4,000+
                </span>
              </div>
            </div>
          </div>
        )}

        {/* FAQ / Trust Section */}
        <section style={{
          marginTop: '100px',
          padding: '60px 40px',
          background: 'rgba(255,255,255,0.02)',
          borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '12px' }}>
              Common Questions
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)' }}>
              Everything you need to know before getting started.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                q: "What if I'm not ready for all three pillars?",
                a: "Start with what you need most. Many clients begin with just Web Presence, then add Lead System when they're ready to scale. No pressure, no lock-in."
              },
              {
                q: "Are there contracts or commitments?",
                a: "Web Presence is one-time. Lead System and Growth Ops are month-to-month—cancel anytime. Annual prepay gets you ~10% off."
              },
              {
                q: "How fast can I get started?",
                a: "WP1 sites launch in 1 week. WP2 in 2-3 weeks. Lead System and Growth Ops can be live within days of signing up."
              },
              {
                q: "Do you work with my industry?",
                a: "We specialize in local service businesses: home services, personal care, pet services, food, automotive, health practices, and professional services."
              },
              {
                q: "What happens after the project is done?",
                a: "You own everything. We hand off with documentation and training. Optional maintenance and support plans are available but never required."
              },
              {
                q: "Can I upgrade or add services later?",
                a: "Absolutely. Many clients start with one pillar and expand as they grow. Bundle discounts apply whenever you add more."
              }
            ].map((item, i) => (
              <div key={i} style={{ padding: '4px 0' }}>
                <h4 style={{
                  fontSize: '15px',
                  fontWeight: 600,
                  marginBottom: '8px',
                  color: '#fff'
                }}>{item.q}</h4>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.6
                }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section style={{
          marginTop: '80px',
          textAlign: 'center',
          padding: '60px 40px',
          background: 'linear-gradient(180deg, rgba(0, 229, 195, 0.08), transparent)',
          borderRadius: '32px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: '-100px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '300px',
            background: 'radial-gradient(ellipse, rgba(0, 229, 195, 0.15), transparent)',
            pointerEvents: 'none'
          }} />
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 600,
              marginBottom: '16px',
              lineHeight: 1.2
            }}>
              Ready to build something that
              <br />
              <span className="serif" style={{ fontStyle: 'italic' }}>actually works?</span>
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '17px',
              maxWidth: '500px',
              margin: '0 auto 32px',
              lineHeight: 1.6
            }}>
              Let's talk about where you are now, where you want to go, and which pillars make the most sense.
            </p>
            <div style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button
                className="cta-button"
                style={{
                  padding: '18px 36px',
                  background: '#00E5C3',
                  border: 'none',
                  borderRadius: '12px',
                  color: '#0A0A0F',
                  fontSize: '16px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
              >
                Schedule a Free Strategy Call
              </button>
              <button style={{
                padding: '18px 36px',
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '16px',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'inherit'
              }}>
                Compare All Features →
              </button>
            </div>
            
            {/* Trust badges */}
            <div style={{
              display: 'flex',
              gap: '32px',
              justifyContent: 'center',
              marginTop: '48px',
              flexWrap: 'wrap'
            }}>
              {[
                '✓ No contracts required',
                '✓ 30-day money-back guarantee',
                '✓ Cancel anytime'
              ].map((badge, i) => (
                <span key={i} style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '13px'
                }}>{badge}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '40px 24px',
        textAlign: 'center'
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.3)',
          fontSize: '13px'
        }}>
          © 2025 Modern Stack Labs · Charlotte, NC
        </p>
      </footer>
    </div>
  );
};

export default MSLPricingPage;
