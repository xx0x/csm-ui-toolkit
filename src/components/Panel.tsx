import styles from "./Panel.module.scss";

function Panel({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

function Row({ children, label }: { children: React.ReactNode, label?: string }) {
    return (
        <div className={styles.row}>
            {label &&
                <div className={styles.rowLabel}>
                    <div className={styles.rowLabelLine} />
                    <div className={styles.rowLabelText}>
                        {label}
                    </div>
                    <div className={styles.rowLabelLine} />
                </div>
            }
            <div className={styles.rowItems}>
                {children}
            </div>
        </div>
    );
}

Panel.Row = Row;

export default Panel;