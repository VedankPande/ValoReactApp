import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles.css";

export function AgentCard(props) {

  const [agentData, setAgentData] = useState(null);

  useEffect(() => {
    axios.get("https://valorant-api.com/v1/agents/").then((res) => {
      var agentRes;

      for (const agent of res.data["data"]) {
        if (agent["displayName"] === props.agentName) {
          agentRes = agent;
        }
      }

      setAgentData(agentRes);
    });
  }, []);

  return (
    <div className="AgentCard">
      {agentData && (
        <>
          {/*<img src={agentData["displayIcon"]} className="AgentIcon"></img>
          <div className="AgentCardBody">
            <div className="AbilitiesBar">
              {
                agentData["abilities"].map(ability=> <img src={ability.displayIcon} className="AbilitiesIcon"></img>)
              }
            </div>
            </div>*/}
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
