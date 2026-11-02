import React from 'react';
import styles from './CV.module.css';

const CV_PATH = '/cv.pdf';

// ponytail: native browser viewer. Android Chrome has no inline PDF viewer and
// shows the fallback links instead; swap in pdf.js if that needs to render inline.
function CV() {
  return (
    <section className={styles.cv}>
      <div className={styles.inner}>
        <h2 className={styles.title}>CV</h2>
        <object
          data={`${CV_PATH}#navpanes=0&view=FitH`}
          type="application/pdf"
          className={styles.viewer}
          aria-label="Jaeseong Choe's CV"
        >
          <p className={styles.fallback}>
            Your browser can&apos;t display PDFs here. Use the links below to open or download the CV.
          </p>
        </object>
        <div className={styles.actions}>
          <a href={CV_PATH} download="Jaeseong_Choe_CV.pdf" className={styles.action}>
            Download PDF
          </a>
          <a href={CV_PATH} target="_blank" rel="noopener noreferrer" className={styles.action}>
            Open in new tab
          </a>
        </div>
      </div>
    </section>
  );
}

export default CV;
