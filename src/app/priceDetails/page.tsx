"use client";
import styles from "./index.module.css";
import { Check } from 'lucide-react'

const priceDetails = () => {

  const solutions = [
    {
      name: 'Basic Solution',
      description: 'Perfect for small businesses starting their AI journey',
      features: [
        'Device + Platform',
        'Maintenance contract',        
      ],
    },
    {
      name: 'Silver Solution',
      description: 'Ideal for growing companies with expanding AI needs',
      features: [
        'Device + Platform',
        'Maintenance contract',
        'Web Application',    
      ],
    },
    {
      name: 'Gold Solution',
      description: 'Comprehensive package for enterprises serious about AI',
      features: [
        'Device + Platform',
        'Maintenance contract with AI model updates',
        'Web Application',
        'Mobile Application',
        "AI with anomaly prediction",
        "Automatic updates via subscription"
      ],
    }
  ]
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          <span className={styles.titlePrimary}>Solution</span>{' '}
          <span className={styles.titleSecondary}>Proposal</span>
        </h1>
        <p className={styles.description}>
          Elevate your business with our AI-powered solutions. Choose the package that best fits your needs and start your journey towards intelligent automation and data-driven decision making.
        </p>
      </div>

      <div className={styles.solutionsGrid}>
        {solutions.map((solution) => (
          <div key={solution.name} className={styles.solutionCard}>
            <div className={styles.solutionHeader}>
              <div className={styles.solutionIndicator}></div>
              <h2 className={styles.solutionTitle}>{solution.name}</h2>
            </div>
            <p className={styles.solutionDescription}>{solution.description}</p>
            <ul className={styles.featuresList}>
              {solution.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <Check className={styles.featureIcon} />
                  <span className={styles.featureText}>{feature}</span>
                </li>
              ))}
            </ul>
            
          </div>
        ))}
      </div>
    </div>
  )
};

export default priceDetails;
