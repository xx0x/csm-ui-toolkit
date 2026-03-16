import styles from './Gauge.module.scss';
import React from 'react';

function Gauge({ label,
    percentage,
    sections,
    subsections = 4,
    sectionLabels
}: { label: React.ReactNode, percentage: number, sections?: number, subsections?: number, sectionLabels?: string[] }) {

    const startAngle = -120;
    const endAngle = 120;
    const sectionAngle = (sections && sections > 0) ? ((endAngle - startAngle) / ((sections - 1))) : 0;
    const subsectionAngle = (sections && sections > 0 && subsections && subsections > 0) ? (sectionAngle / (subsections + 1)) : 0;

    const handAngle = startAngle + (endAngle - startAngle) * (percentage / 100);

    return (
        <div className={styles.container}>
            <div className={styles.inside}>
                {sections && Array.from({ length: sections }, (_, i) => {
                    const currentSectionAngle = startAngle + sectionAngle * i;
                    return (
                        <React.Fragment key={i}>
                            <div
                                className={styles.section}
                                style={{ transform: `rotate(${currentSectionAngle}deg)` }}
                            >
                                {sectionLabels && sectionLabels[i] && (
                                    <div
                                        className={styles.sectionLabel}
                                        style={{ transform: `rotate(${-currentSectionAngle}deg)` }}
                                    >
                                        {sectionLabels[i]}
                                    </div>
                                )}
                            </div>
                            {i < (sections - 1) && subsections && Array.from({ length: subsections }, (_, j) => {
                                const currentSubsectionAngle = currentSectionAngle + subsectionAngle * (j + 1);
                                return (
                                    <div
                                        key={`${i}-${j}`}
                                        className={styles.subsection}
                                        style={{ transform: `rotate(${currentSubsectionAngle}deg)` }}
                                    />
                                );
                            })}
                        </React.Fragment>
                    );
                })}

                <div
                    className={styles.center}
                    style={{ transform: `rotate(${handAngle}deg)` }}
                >
                    <svg
                        className={styles.hand}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.16364 103.09251"><g id="Layer_3"><path d="M10.16104,48.78808L5.68953.55398c-.06847-.73864-1.14695-.73864-1.21542,0L.00261,48.78808c-.00208.02246-.00292.04503-.0025.06758l.9884,53.63778c.00613.33263.27753.59907.61021.59907h6.96621c.33269,0,.60408-.26644.61021-.59907l.9884-53.63778c.00042-.02256-.00042-.04512-.0025-.06758Z" fill="#fff" /></g></svg>
                </div>
                <div className={styles.label}>
                    {label}
                </div>
            </div>
        </div>
    );
}

export default Gauge;