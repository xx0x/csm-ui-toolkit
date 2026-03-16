import styles from './Gauge.module.scss';

function Gauge({ label, percentage }: { label: React.ReactNode, percentage: number }) {

    const startAngle = -135;
    const endAngle = 135;
    const angle = startAngle + (endAngle - startAngle) * (percentage / 100);

    return (
        <div className={styles.container}>
            <div className={styles.inside}>
                <div
                    className={styles.center}
                    style={{ transform: `rotate(${angle}deg)` }}
                >
                    <svg
                        className={styles.hand}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.16364 103.09251"><g id="Layer_3"><path d="M10.16104,48.78808L5.68953.55398c-.06847-.73864-1.14695-.73864-1.21542,0L.00261,48.78808c-.00208.02246-.00292.04503-.0025.06758l.9884,53.63778c.00613.33263.27753.59907.61021.59907h6.96621c.33269,0,.60408-.26644.61021-.59907l.9884-53.63778c.00042-.02256-.00042-.04512-.0025-.06758Z" fill="#fff" /></g></svg>
                </div>
                <div className={styles.label}>
                    {label}
                    <div>{percentage}%</div>
                </div>
            </div>
        </div>
    );
}

export default Gauge;