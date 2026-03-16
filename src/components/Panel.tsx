import styles from "./Panel.module.scss";

function Panel({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

function Row({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.row}>
            {children}
        </div>
    );
}

Panel.Row = Row;

export default Panel;