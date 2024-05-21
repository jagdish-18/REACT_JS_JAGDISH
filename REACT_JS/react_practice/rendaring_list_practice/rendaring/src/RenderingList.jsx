import { library } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

const ProductNameList = [
    "Music",
    "Plumbing",
    "Realestate",
    "Science",
    "Security",
    "Social",
    "Sport",
    "Storage",
    "Tourism",
    "Wastemanagement",
    "Wine",
    "Wool"

]

const RenderingList = () => {

    const ProductName = ProductNameList.map((item) => <li> {item}</li>)

    return (
        <div>
            <ul>
                {ProductName}
            </ul>
        </div>
    )
}

export default RenderingList
