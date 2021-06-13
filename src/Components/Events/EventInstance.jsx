import React from 'React'
// TODO: Import shared components

// Event Page
// Refer to: https://dancechives.invisionapp.com/freehand/User-Profile-Frame-9-11bb4OlKt?zoomToItems=Y2tueHNleW13MDAzZzNhNjh1bWl4NDdsaw%3D%3D 
const eventPage = () => {
    return (
        <div className="event">
            {/* TODO: insert header, navbar, search bar here */}
            <div className="event-container">
                <div className="event-banner">
                    <p>EVENT BANNER/POSTER/IMG</p>
                </div>
                <div className="event-info-container">
                    <p className="event-title">EVENT TITLE</p>
                    <div>
                        <p className="event-location">EVENT LOCATION</p>
                    </div>
                </div>
                <div className="event-list">
                    <div>
                        Example: Crystalized 2019
                    </div>
                    <div>
                        Example: Crystalized 2018
                    </div>
                </div>
            </div>
            {/* TODO: Add Next/Prev buttons, not sure if it should be outside of event container or not*/}
            {/* TODO: insert footer here*/}
        </div>
        );
  };
  
  export default eventPage;