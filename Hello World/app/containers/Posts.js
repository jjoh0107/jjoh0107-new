/**
 * Created by jihye on 2017-08-10.
 */
import React from 'react';
import BigText from '../components/BigText';
import PostLinks from '../components/PostLinks';

const Posts = ({children}) => {
    return (
        <div>
            <BigText>Post!</BigText>
            <PostLinks />
            {children}
        </div>
    );
};

export default Posts;