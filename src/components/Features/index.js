import React from "react";
import styles from './styles.module.css'
import Link from "@docusaurus/Link";

const Features = React.memo(() => {
    return (
        <div className={styles.featuresContainer}>
            <div className={styles.header}>Features</div>
            <div className={styles.featuresList}>
                <div>Choose the UI that fits your project</div> 
                <div>Customize the UI to fit your project</div> 
                <div>Easily build your own UI</div> 
                <div>Attach multiple CustUp instances together for combined file upload</div> 
                <div>Generate images with DALL.E-3</div> 
            </div>
            <div>
                <Link
                    className="button button--secondary button--lg"
                    to="/docs/intro">
                    Get Started
                </Link>
            </div>

        </div>
    )
});

export default Features;