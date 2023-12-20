import React from "react";
import styles from "./styles.module.css"

const SupportedLangs = React.memo(() => {
    return (
        <div className={styles.supportedLangs}>
            <div className={styles.headerText}>
                You can use CustUp with
            </div>
            <div className={styles.langlistCont}>
                <img src={require('./../../../static/img/javascript.png').default} />
                <img src={require('./../../../static/img/react.png').default} />
                <img src={require('./../../../static/img/electron.png').default} />
                <img src={require('./../../../static/img/cordova.png').default} />
            </div>
        </div>
    )
})

export default SupportedLangs;