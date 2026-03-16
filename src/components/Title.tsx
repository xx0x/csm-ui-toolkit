import styles from "./Title.module.scss";

function Title({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}

export default Title;