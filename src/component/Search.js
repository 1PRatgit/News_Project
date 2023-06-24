// SearchForm.js
import './Styles/Search.css';
import React, { useState } from 'react';

const Search = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
    setSearchQuery('');
  };

  return (
  //   <form className="box" onSubmit={handleSubmit}>
  //   <div className="input-group">
  //     <input
  //       type="text" className="" value={searchQuery}
  //       onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search"
  //     />
  //     <div className="input-group-append">
  //       <button type="submit" className="btn ">
  //       <i className="fa fa-search" aria-hidden="true"></i>
  //       </button>
  //     </div>
  //   </div>
  // </form>
       <form className="form-inline" onSubmit={handleSubmit}>
       <div className="input-group">
       <input
        type="text" className="form-control" value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search"
      />
         <div className="input-group-append">
           <button type="submit" className="btn btn-dark" style={{ backgroundColor: 'maroon', color: 'white' }}>
             {/* <i className="fa fa-paper-plane" aria-hidden="true"></i> */}
             <i className="fa fa-search"  aria-hidden="true"></i>
           </button>
         </div>
       </div>
     </form>
  
  );
};

export default Search;