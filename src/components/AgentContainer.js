import axios from "axios";
import { useEffect, useState } from "react";
import { AgentCard } from "./AgentCard";

function filterAgentData(agentName,data){
      for (const agent of data) {
        if (agent["displayName"] === agentName) {
          return agent;
        }
      }
}


export function AgentContainer(props){
    const [agentList, setAgentList] = useState(null);

    useEffect(()=>{
      let agentList = []
        for (const agent of props.data) {
            agentList.push(agent.displayName);
        }
        let newAgents = [];
        for (let i=0; i<agentList.length; i+=2) {
            newAgents.push(agentList.slice(i, i + 2));
        }
        setAgentList(newAgents)
    },[])

    return (
    <div>

      {agentList && props.data && (
        <>
          <div className="split left">
            {
              agentList.map((agentWindow,index) => {
                if (agentWindow.length%2===0) {
                  return (
                    <div className="row">
                      <div className="column">
                        <AgentCard key = {index} data = {filterAgentData(agentWindow[0],props.data)} callback={props.callback}/> 
                      </div>
                      <div className="column">
                        <AgentCard key = {index} data = {filterAgentData(agentWindow[1],props.data)} callback={props.callback}/>
                      </div>
                    </div>)
                }
                else {
                  return (
                    <div className="row">
                      <div className="column">
                        <AgentCard key = {index} data = {filterAgentData(agentWindow[0],props.data)} callback={props.callback}/>
                      </div>
                    </div>)
                }
              })


            }
          </div>
        </>
      )}
    </div>
  );
}
