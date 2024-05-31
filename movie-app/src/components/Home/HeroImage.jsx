import { useState } from "react";

export default function HeroImage({className}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <img
        className={className}
            onMouseEnter={() => { setIsHovered(true) }}
            onMouseLeave={() => { setIsHovered(false) }}
            src={isHovered ?
                '/arcane.gif' :
                'https://esports.id/img/content/21320220315070855.jpeg'}
            alt="image"
        />
    )
}
