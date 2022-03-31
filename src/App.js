import './App.css';
import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import Days from './pages/Days';
import TaskList from './components/TaskList';

function App() {
    const days = [
        { name: 'Monday', id: 1 },
        { name: 'Tuesday', id: 2 },
        { name: 'Wednesday', id: 3 },
        { name: 'Thursday', id: 4 },
        { name: 'Friday', id: 5 },
        { name: 'Saturday', id: 6 },
        { name: 'Sunday', id: 7 },
    ];
    const navigate = useNavigate();
    const location = useLocation();
    const [activeItem, setActiveItem] = React.useState();

    React.useEffect(() => {
        const dayId = location.pathname.split('/days/')[1];
        const day = days.find((day) => day.id == dayId);

        setActiveItem(day);
    }, [location.pathname]);

    return (
        <div className='wrapper'>
            <Routes>
                <Route
                    path='/days/:id'
                    exact
                    element={<TaskList activeItem={activeItem} />}
                />
                <Route
                    path='/'
                    exact
                    element={
                        <Days
                            days={days}
                            onClickItem={(i) => {
                                navigate(`/days/${i.id}`);
                            }}
                            activeItem={activeItem}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
