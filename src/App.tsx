import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CMSProvider } from './components/admin/CMSProvider';
import TopNavBar from './components/TopNavBar';
import Header from './components/Header';
import NewsTicker from './components/NewsTicker';
import Footer from './components/Footer';
import NewsCards from './pages/NewsCards';
import EventsCards from './pages/EventsCards';
import newsEventsData from './data/newsEventsData.json';
import HomePage from './pages/HomePage';
import DepartmentPage from './pages/DepartmentPage';
import PlacementsPage from './pages/PlacementsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import ContactPage from './pages/ContactPage';
import ReusePage from './pages/ReusePage';
import InnovativeMethods from './pages/InnovativeMethods';
import Objectives from './pages/Objectives';
import Management from './pages/Management';
import PrincipalsDesk from './pages/PrincipalsDesk';
import FacultyProfilePage from './pages/FacultyProfilePage';
import GoverningCouncilPage from './pages/GoverningCouncilPage';
import AcademicCalendar from './pages/AcademicCal';
import CalendarDetails from './pages/CalendarDetails'; 
import DataTable from './pages/DataTable';
import Gallery from './pages/Gallery';

import InnovationPolicy from './pages/InnovationPolicy';
import topNavBarData from './data/topNavBarData.json';
import headerData from './data/headerData.json';
import newsTickerData from './data/newsTickerData.json';
import contactData from './data/contactData.json';
import CseLatestEvents from './pages/CseLatestEvents';
import ControllerOfExaminationsPage from './pages/ControllerOfExaminationsPage';

const news = newsEventsData.news;
const events = newsEventsData.events;

function App() {
  return (
    <HelmetProvider>
      <CMSProvider>
        <Router>
          {/* Fixed Top Stack */}
          <div className="fixed top-0 left-0 w-full z-50">
            <TopNavBar
              socialMedia={topNavBarData?.topNavBar?.socialMedia || []}
              menuItems={topNavBarData?.topNavBar?.menuItems || []}
            />
          </div>

          <div className="fixed top-[40px] left-0 w-full z-40">
            <Header
              collegeName={headerData?.header?.collegeName || 'College Name'}
              collegeSubtitle={headerData?.header?.collegeSubtitle || 'Subtitle'}
              navigationItems={headerData?.header?.navigationItems || []}
            />
          </div>

          <div className="fixed top-[40px] left-0 w-full z-30">
            <NewsTicker
              newsItems={newsTickerData?.newsTicker?.newsItems || []}
              speed={newsTickerData?.newsTicker?.settings?.speed ?? 50}
              pauseOnHover={newsTickerData?.newsTicker?.settings?.pauseOnHover ?? true}
            />
          </div>

          <div className="pt-[150px] flex flex-col min-h-screen bg-white">
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/department/:departmentId" element={<DepartmentPage />} />
                <Route path="/placements" element={<PlacementsPage />} />
                <Route path="/admissions" element={<AdmissionsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/reuse" element={<ReusePage />} />
                <Route path="/innovative-methods" element={<InnovativeMethods />} />
                <Route path="/about/objectives" element={<Objectives />} />
                <Route path="/about/management" element={<Management />} />
                <Route path="/vision-mission" element={<Management />} />
                <Route path="/leadership" element={<PrincipalsDesk />} />
                <Route path="/governing-council" element={<GoverningCouncilPage />} />
                <Route path="/profile/:id" element={<FacultyProfilePage />} />
                <Route path="/datatable/:section" element={<DataTable />} />
                <Route path="/news" element={<NewsCards news={news} />} />
                <Route path="/events" element={<EventsCards events={events} />} />
                <Route path="/innovation/innovationpolicy" element={<InnovationPolicy />} />
                <Route path="/gallery" element={<Gallery />} />




                <Route path="/contactus" element={<ContactPage/>}/>

                {/* ✅ Calendar Routes */}
                <Route path="/academic-calendar" element={<AcademicCalendar />} />
                <Route path="/calendar-details/:semester" element={<CalendarDetails />} />
                <Route path="/latest-event" element={<CseLatestEvents />} />
                <Route path="/coe" element={<ControllerOfExaminationsPage />} />
              </Routes>
            </main>
              <Footer
                  collegeName={headerData.header.collegeName}
                  contact={contactData.contact} 
              />
          </div>
        </Router>
      </CMSProvider>
    </HelmetProvider>
  );
}

export default App;
