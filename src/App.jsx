import { useState } from "react"
import React from "react"
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard"

export function App(){
    return(
        <section className="App">
        <TwitterFollowCard userName="EmtelcoBPO" >
            Emtelco BPO
        </TwitterFollowCard>
        <TwitterFollowCard  userName="Wendy" > 
            Wendy Zulka
        </TwitterFollowCard>
        <TwitterFollowCard userName="rua" > 
            Elkin Rua
        </TwitterFollowCard>
        </section>
        
    )
}