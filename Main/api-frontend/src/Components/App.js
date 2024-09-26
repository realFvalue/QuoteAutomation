import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Container, Typography } from '@mui/material';

// Import individual category components
import JobNotes from './JobNotes';
import HouseDetails from './HouseDetails';
import CosyGlazingQuotation from './CosyGlazingQuotation';
import DraughtsQuotation from './DraughtsQuotation';
import RestorationWork from './RestorationWork';
import LoftInsulation from './LoftInsulation';
import LoftFlooring from './LoftFlooring';
import RoomInRoof from './RoomInRoof';
import Other from './Other';
import Documents from './Documents';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Mitchell&Dickinson API</h1>
        </header>
        <Tabs>
          <TabList>
            <Tab>Home</Tab>
            <Tab>Categories</Tab>
            <Tab>Documents</Tab>
          </TabList>

          <TabPanel>
            <h2>Welcome to the API Frontend</h2>
            <p>Select a category or go to the Documents tab.</p>
          </TabPanel>

          <TabPanel>
            <nav>
              <ul>
                <li><Link to="/job-notes">Job Notes</Link></li>
                <li><Link to="/house-details">House Details</Link></li>
                <li><Link to="/cosy-glazing-quotation">CosyGlazing Quotation</Link></li>
                <li><Link to="/draughts-quotation">Draughts Quotation</Link></li>
                <li><Link to="/restoration-work">Restoration Work</Link></li>
                <li><Link to="/loft-insulation">Loft Insulation</Link></li>
                <li><Link to="/loft-flooring">Loft Flooring</Link></li>
                <li><Link to="/room-in-roof">Room in Roof</Link></li>
                <li><Link to="/other">Other</Link></li>
              </ul>
            </nav>
          </TabPanel>

          <TabPanel>
            <Documents />
          </TabPanel>
        </Tabs>

        <Routes>
          <Route path="/job-notes" element={<JobNotes />} />
          <Route path="/house-details" element={<HouseDetails />} />
          <Route path="/cosy-glazing-quotation" element={<CosyGlazingQuotation />} />
          <Route path="/draughts-quotation" element={<DraughtsQuotation />} />
          <Route path="/restoration-work" element={<RestorationWork />} />
          <Route path="/loft-insulation" element={<LoftInsulation />} />
          <Route path="/loft-flooring" element={<LoftFlooring />} />
          <Route path="/room-in-roof" element={<RoomInRoof />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
