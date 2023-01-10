import React, {FC} from "react"

import { useGlobalStore } from "../../redux-toolkit/store"

const Button:FC = ()=> {

    const {testMessage} = useGlobalStore()
    return<div>{testMessage}</div>
}

export default Button