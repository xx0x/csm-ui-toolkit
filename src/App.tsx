import { useEffect, useState } from "react";
import Gauge from "./components/Gauge";
import Panel from "./components/Panel";
import Title from "./components/Title";
import Screwed from "./components/Screwed";

function App() {

    const [value, setValue] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setValue((v) => (v + 10) % 110);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Panel>
                <Panel.Row>
                    <Title>
                        CSM UI Toolkit
                    </Title>
                </Panel.Row>
                <Panel.Row
                    label="Gauges"
                >
                    <Screwed
                        wiggly
                    >
                        <Gauge
                            label={<>Battery<br />%</>}
                            sections={6}
                            percentage={value}
                            sectionLabels={[
                                '0',
                                '20',
                                '40',
                                '60',
                                '80',
                                '100'
                            ]}
                        />
                    </Screwed>
                    <Screwed
                        wiggly
                    >
                        <Gauge
                            label={<>AC<br />VOLTS</>}
                            sections={5}
                            percentage={value}
                            sectionLabels={[
                                '90',
                                '100',
                                '110',
                                '120',
                                '130'
                            ]}
                        />
                    </Screwed>
                    <Screwed
                        wiggly
                    >
                        <Gauge
                            label={<>FREQ<br />CPS</>}
                            sections={5}
                            percentage={value}
                            sectionLabels={[
                                '380',
                                '390',
                                '400',
                                '410',
                                '420'
                            ]}
                        />
                    </Screwed>
                </Panel.Row>
            </Panel>
        </>
    )
}

export default App
