import { useState } from "react";
import styles from "./Screwed.module.scss";

function Screwed({ children, wiggly }: { children: React.ReactNode, wiggly?: boolean }) {

    const [randomAngles] = useState(() => {
        const a = [0, 0, 0, 0];
        for (let i = 0; i < a.length; i++) {
            a[i] = Math.random() * 40 - 20;
        }
        return a;
    });

    return (
        <div className={styles.container}>
            <div className={styles.screw} style={wiggly ? { transform: `rotate(${randomAngles[0]}deg)` } : undefined} />
            <div className={styles.screw} style={wiggly ? { transform: `rotate(${randomAngles[1]}deg)` } : undefined} />
            <div className={styles.screw} style={wiggly ? { transform: `rotate(${randomAngles[2]}deg)` } : undefined} />
            <div className={styles.screw} style={wiggly ? { transform: `rotate(${randomAngles[3]}deg)` } : undefined} />
            {children}
        </div>
    );
}

export default Screwed;