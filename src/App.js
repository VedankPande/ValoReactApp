import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import { AgentCard } from "./components/AgentCard";

function App() {

  const [agentList, setAgentList] = useState(null);

  useEffect(() => {
    axios.get("https://valorant-api.com/v1/agents/").then((res) => {
      let agentList = []
      for (const agent of res.data["data"]) {
        agentList.push(agent.displayName);
      }
      console.log(agentList);
      let newAgents = [];
      for (let i = 0; i < agentList.length; i += 2) {
        newAgents.push(agentList.slice(i, i + 2));
      }
      console.log(newAgents)
      setAgentList(newAgents)
    })
  }, []);

  return (
    <div>
      {agentList && (
        <>
          <div className="split left">
            {
              agentList.map(agentWindow => {
                if (agentWindow.length % 2 === 0) {
                  return (
                    <div className="row">
                      <div className="column">
                        <AgentCard agentName={agentWindow[0]} />
                      </div>
                      <div className="column">
                        <AgentCard agentName={agentWindow[1]} />
                      </div>
                    </div>)
                }
                else {
                  return (
                    <div className="row">
                      <div className="column">
                        <AgentCard agentName={agentWindow[0]} />
                      </div>
                    </div>)
                }
              })


            }
          </div>
          <div className="split right">

          </div>
        </>
      )}
    </div>
  );
}

export default App;
