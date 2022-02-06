import axios from "axios";
import { AgentContainer } from "./AgentContainer";
import { agentMedia } from "../agentMedia";

import { useEffect, useState } from "react";

export function MainContainer() {
    const [globalData, setGlobalData] = useState(null)
    const [selectedAgent, setSelectedAgent] = useState("Brimstone")

    function updateSelectedAgent(agentName){
        setSelectedAgent(agentName)
        console.log("Selected agent set to "+selectedAgent)
    }

    useEffect(() => {
        axios.get("https://valorant-api.com/v1/agents/").then((res) => {
            setGlobalData(res.data["data"])
        })
    }, [])



    return (
        <div>
            {globalData && selectedAgent && (<>
                <AgentContainer data={globalData} callback={updateSelectedAgent}/>
                <div className="split right">
                    {console.log(agentMedia[selectedAgent])}
                    <img src={agentMedia[selectedAgent].ProfileImage}/>
                </div>
            </>)}

        </div>
    )
}