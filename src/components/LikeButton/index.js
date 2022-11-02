
import { ButtonLike, LikeDiv } from "../../styles/componentStyle";
import { React, useState } from "react";

export const LikeButton = () => {
    const [like, setLike] = useState(true);

        return (
            <LikeDiv>
                <ButtonLike title="Like" like={like} onClick={()=>{setLike(!like)}}>
                    <svg width="25" height="25" viewBox="0 0 32 32">
                        <desc>A heart</desc>
                        <path d="M17.4 29c-.8.8-2 .8-2.8 0l-12.3-12.8c-3.1-3.1-3.1-8.2 0-11.4 3.1-3.1 8.2-3.1 11.3 0l2.4 2.8 2.3-2.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.4l-12.2 12.8z"></path>
                    </svg>
                </ButtonLike>
            </LikeDiv>
        );
    }