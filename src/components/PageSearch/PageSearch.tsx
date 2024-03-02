'use client';

import React, { useState } from 'react'
import Search from '../Search/Search';

const PageSearch = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <Search
      setRoomTypeFilter={setRoomTypeFilter }
      roomTypeFilter={roomTypeFilter}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  )
}

export default PageSearch;