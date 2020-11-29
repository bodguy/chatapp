import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import InboxItem from '@/inbox/inboxItem';
import { inboxLists } from 'mock';
import { InboxItemWrapper } from './style';

const InboxContainer = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={page => console.log(page)}
        hasMore={true}
        useWindow={false}
      >
        <InboxItemWrapper>
        {
          inboxLists.map((v, i) => (
            <InboxItem
              index={i}
              thumbnailPath={v.thumbnailPath} 
              name={v.name} 
              dateTime={v.dateTime} 
              key={`inbox-${i}`}
              active={activeItem == i}
              onClick={e => setActiveItem(i)}
            >
              {v.contents}
            </InboxItem>
          ))
        }
        </InboxItemWrapper>
      </InfiniteScroll>
    </>
  );
};

export default InboxContainer;