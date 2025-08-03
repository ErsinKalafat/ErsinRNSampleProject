import * as React from "react"
import Svg, { Circle, Rect, G, Path, Filter, Defs, Stop, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeComposite, FeBlend, LinearGradient, ClipPath } from "react-native-svg"

const ProfileIcon = ({ width = 20, height = 20, color = 'rgba(189, 189, 189, 1)' }) => (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
        <Path d="M9.9521 9.77203C12.3362 9.77203 14.4084 7.7698 14.4084 5.16274C14.4084 2.58696 12.3362 0.678589 9.9521 0.678589C7.56797 0.678589 5.49578 2.62867 5.49578 5.18359C5.49578 7.7698 7.55683 9.77203 9.9521 9.77203ZM2.47661 19.4286H17.4165C18.6085 19.4286 19.3215 18.9072 19.3215 18.0416C19.3215 15.3511 15.723 11.6387 9.94096 11.6387C4.17002 11.6387 0.571533 15.3511 0.571533 18.0416C0.571533 18.9072 1.28455 19.4286 2.47661 19.4286Z"
            fill={color}
        />
    </Svg>

)

export default ProfileIcon
