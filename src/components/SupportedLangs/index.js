import React from "react";
import styles from "./styles.module.css"

const SupportedLangs = React.memo(() => {
    return (
        <div className={styles.supportedLangs}>
            <div className={styles.headerText}>
                You can currently use CustUp in
            </div>
            <div className={styles.langlistCont}>
                <a href="https://developer.mozilla.org/" className={styles.langLink}>
                    <img src={require('./../../../static/img/javascript.png').default} />
                    <div>Vanilla JavaScript</div> 
                </a>
                <a href="https://react.dev/" className={styles.langLink}>
                    <img src={require('./../../../static/img/react.png').default} />
                    <div>React JS</div> 
                </a>
                <a href="https://www.electronjs.org/" className={styles.langLink}>
                    <img src={require('./../../../static/img/electron.png').default} />
                    <div>Electron JS</div>
                </a>
                <a href="https://cordova.apache.org/" className={styles.langLink}>
                    <img src={require('./../../../static/img/cordova.png').default} />
                    <div>Apache Cordova</div>
                </a>
                <a href="https://www.typescriptlang.org/" className={styles.langLink}>
                    <img src={require('./../../../static/img/typescript.png').default} />
                    <div>TypeScript</div>
                </a>
            </div>
        </div>
    )
})

export default SupportedLangs;