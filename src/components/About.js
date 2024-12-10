import { useState } from "react";
import React, { useState, useEffect } from "react";

function AboutUs() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      {location ? (
        <p>
          Latitude: {location.latitude}, Longitude: {location.longitude}
        </p>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
}

export default AboutUs;
// import "react-datepicker/dist/react-datepicker.css";

// const AboutUs = () => {
//   const [startDate, setStartDate] = useState("2024-11-01"); // Default start date
//   const [endDate, setEndDate] = useState("2024-11-30");

//   const DateRangePicker = ({ start, end, onStartChange, onEndChange }) => {
//     return (
//       <>
//         From
//         <DatePicker
//           selected={new Date(start)}
//           onChange={(date) => onStartChange(date.toISOString().split('T')[0])}
//         />
//         to
//         <DatePicker
//           selected={new Date(end)}
//           onChange={(date) => onEndChange(date.toISOString().split('T')[0])}
//         />
//       </>
//     );
//   };

//   return (
//     <div className="about-us-container">
//       <div className="about-us-header">
//         <h1>About Us</h1>
//         <p>We bring the best food to your door, hot and fresh!</p>
//       </div>

//       <div className="about-us-content">
//         <section className="mission-section">
//           <h2>Our Mission</h2>
//           <p>
//             At Foodie, we aim to make your food delivery experience fast, easy, and delightful. Whether you're craving a gourmet meal or a late-night snack, we ensure your food arrives at your doorstep in no time.
//           </p>
//         </section>

//         <section className="team-section">
//           <h2>Meet the Team</h2>
//           <div className="team-members">
//             <div className="team-member">
//               <img src="https://via.placeholder.com/150" alt="Team Member" />
//               <h3>John Doe</h3>
//               <p>Founder & CEO</p>
//             </div>
//             <div className="team-member">
//               <img src="https://via.placeholder.com/150" alt="Team Member" />
//               <h3>Jane Smith</h3>
//               <p>Lead Operations Manager</p>
//             </div>
//             <div className="team-member">
//               <img src="https://via.placeholder.com/150" alt="Team Member" />
//               <h3>Alex Johnson</h3>
//               <p>Head of Technology</p>
//             </div>
//           </div>
//         </section>

//         <section className="contact-section">
//           <h2>Get in Touch</h2>
//           <p>Have questions or want to partner with us? We'd love to hear from you!</p>
//           <button className="contact-button">Contact Us</button>
//         </section>
//       </div>
//       <div>
//         <h1>Select a Date Range</h1>
//         <DateRangePicker
//           start={startDate}
//           end={endDate}
//           onStartChange={setStartDate}
//           onEndChange={setEndDate}
//         />
//         <p>
//           Selected Range: From <b>{startDate}</b> to <b>{endDate}</b>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
