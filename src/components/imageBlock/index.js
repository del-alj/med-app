
import { FlexImages, Image } from "../../styles/componentStyle";
import axios from "axios";
import { React, useState, useEffect } from "react";
import { LikeButton } from "../../components/LikeButton"
import InfiniteScroll from "react-infinite-scroll-component";
export const ImagesBlock = () => {
    const [pictures, setPictures] = useState([]);
    const [page, setPage] = useState(1);

    const handelGetData = async () => {
        await axios
            .get(
                `https://api.unsplash.com/photos/?client_id=w6egn0aCiqDKj7PeWlV6gajib3rmHtdYnlOW2zT_ydA&per_page=16&page=${page}`
            )
            .then((response) => {
                setPictures([...pictures, ...response.data]);
                setPage(page + 1);
            })
            .catch((error) => {
                console.log("error", error);
            });
    }
    useEffect(() => {
        handelGetData()
    }, [])
    console.log("page", page)
    return (
        <>
            <InfiniteScroll
                dataLength={pictures?.length}
                next={async () => {
                    await handelGetData()
                }}
                style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                hasMore={true}
                // loader={<h4>Loading...</h4>}
                scrollableTarget="scrollableDiv"
            >
                <FlexImages>

                    {pictures?.map((elem, index) => {
                        return <div key={`${index}likebutton`} style={{ position: "relative" }}>
                            <LikeButton />
                            <Image src={elem?.urls?.thumb} key={index} />
                        </div>
                    })}
                </FlexImages>
            </InfiniteScroll>
        </>
    )
}
