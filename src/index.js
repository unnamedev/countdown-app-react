import React from "react"
import {render} from "react-dom"
// 💡 Root Style
import "./styles/index.scss"
// 💡 Root Component
import Countdown from "./Countdown"
// 💡 Render Components
render(<Countdown/>, document.getElementById("root"))