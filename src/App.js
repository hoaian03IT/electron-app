import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import ScrollToTop from './components/ScrollToTop';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
    return (
        <Router>
            <div className="App">
                <ScrollToTop />
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        }

                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Layout Page={Page} />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
