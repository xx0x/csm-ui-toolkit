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
                <Panel.Row>
                    <Screwed
                        wiggly
                    >
                        <Gauge label="Battery" percentage={value} />
                    </Screwed>
                    <Screwed
                        wiggly
                    >
                        <Gauge label="Fuel" percentage={value} />
                    </Screwed>
                </Panel.Row>
            </Panel>
        </>
    )
}

export default App
