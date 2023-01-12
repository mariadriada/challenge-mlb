import React, {FC} from "react"

import { useGlobalStore } from "../../redux-toolkit/store"
import "./button.scss"

const Button:FC = ()=> {
    const {testMessage} = useGlobalStore()
    return<div className="button">{testMessage}</div>
}

export default Button