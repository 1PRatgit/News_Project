import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import './App.css';
import React, { Component, useState } from "react";
import NavBar from "./component/NavBar";
import Search from "./component/Search";
import News from "./component/News";
import Mailer from "./component/Mailer";
import Footer from "./component/Footer";
import BookMarks from "./component/Bookmarks/BookMarks";
const App=()=>{
  const [searchQuery, setSearchQuery] = useState(''); 
  const handleSearch = (query) => {
    
    // Perform the search logic here using the query
    setSearchQuery(query);
    console.log('Searching for:', query);
  };

  return (
    
    <div>
        <>
          <BrowserRouter>
            <NavBar />
            <div class="container">
              <div class="row">
                <div class="col-sm-6">
                  <Search handleSearch={handleSearch}
                  />
                </div>
                <div class="col-md-4">
                  <Mailer/>
                </div>
                <div class="col-md-2">
                <Link className="nav-mark"  to="/Bookmarks">
                  <i className="fas fa-bookmark" />
                </Link>
                </div>
                <div class="col-md-6">
                
              </div>
              </div>
            </div>
            <Routes>
            <Route
            exact
            path="/"
            element={
              <News
                newsName={searchQuery||"general"}
                country="in"
                category="general"
              />
            }
          />
            <Route 
            exact
            path="/general"
            element={
              <News 
                newsName="general"
                country="in"
                category="general"
              />
            }
            />
            
            <Route 
            exact
            path="/health"
            element={
              <News pageSize={6}
                newsName="health"
                country="in"
                category="health"
              />
            }
            />
            <Route 
            exact
            path="/science"
            element={
              <News pageSize={6}
                newsName="science"
                country="in"
                category="science"
              />
            }
            />
            <Route 
            exact
            path="/sports"
            element={
              <News pageSize={6}
                newsName="sports"
                country="in"
                category="sports"
              />
            }
            />
            <Route 
            exact
            path="/technology"
            element={
              <News
                newsName="technology"
                country="in"
                category="technology"
              />
            }
            />
            <Route 
            exact
            path="/BookMarks"
            element={
              <BookMarks/>
            
            }
            />
            </Routes> {/* <News setProgress={setProgress} apiKey={apiKey}   country="us" pageSize={6} category="general"/> */}
          </BrowserRouter>,
          <Footer/>
        </>
      </div>
  
    
  );
}

export default App;
