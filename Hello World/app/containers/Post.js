/**
 * Created by jihye on 2017-08-10.
 */
import React from 'react';
import BigText from '../components/BigText';

const Post = ({params}) => {
    return(
        <div>
            <BigText>{params.id}</BigText>
        </div>
    );
};

export default Post;