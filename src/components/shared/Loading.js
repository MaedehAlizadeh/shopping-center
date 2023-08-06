import React from 'react';

import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.loader}>
                <div className={styles.loaderInner}></div>
            </div>
        </div>
        
    );
};

export default Loading;