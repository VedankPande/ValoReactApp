import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

export function AgentCard(props) {

  const [agentData, setAgentData] = useState(null);

  useEffect(() => {
    setAgentData(props.data)
  }, []);

  return (
    <div className="AgentCard" onClick={(event)=>{props.callback(agentData.displayName)}}>
      {agentData && (
        <>
          <img src={agentData["displayIcon"]} className="AgentIcon"></img>
          <div className="AgentCardBody">
            <div className="AbilitiesBar">
              <img
                src={agentData["abilities"][0].displayIcon}
                className="AbilitiesIcon"
              ></img>
              <img
                src={agentData["abilities"][1].displayIcon}
                className="AbilitiesIcon"
              ></img>
              <img
                src={agentData["abilities"][2].displayIcon}
                className="AbilitiesIcon"
              ></img>
              <img
                src={agentData["abilities"][3].displayIcon}
                className="AbilitiesIcon"
              ></img>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
