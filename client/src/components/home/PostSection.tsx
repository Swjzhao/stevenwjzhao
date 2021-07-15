import React from 'react';

import PostCardListing from './PostCardListing';

const PostSection = (props: any) => {
  const { sections } = props;

  return (<>
        {sections.map((section:string) => (
              <PostCardListing key={section} title={section} />
        ))}
        </>
  );
};

export default PostSection;
