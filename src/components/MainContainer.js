import axios from "axios";
import { AgentContainer } from "./AgentContainer";

import { useEffect, useState } from "react";

export function MainContainer() {
    const [globalData, setGlobalData] = useState(null)
    const [selectedAgent, setSelectedAgent] = useState("Brimstone")


    useEffect(() => {
        axios.get("https://valorant-api.com/v1/agents/").then((res) => {
            setGlobalData(res.data["data"])
        })
    }, [])


    return (
        <div>
            {globalData && (<>
                <AgentContainer data={globalData} />
                <div className="split right">
                    <img src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png" />
                </div>
            </>)}

        </div>
    )
}