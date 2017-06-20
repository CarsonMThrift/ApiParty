// import React, { Component } from 'react'
// import { Route } from 'react-router-dom'
// import "./GoogleMap.css"

// class GoogleMap extends Component {

//     state = {
//         location: ''
//     }

//     handleSubmit = (ev) => {



//     }

//     handleChange = (ev) => {



//     }

//     render() {
//         return (

//             <div className="googlemaps">
//                 <img src="http://logos-download.com/wp-content/uploads/2016/05/Google_Maps_logo_wordmark.png" alt="googlemaps logo" className="googlemaps-logo" />
//                 <form onSubmit={this.handleSubmit}>
//                     <div>
//                         <input
//                             type="text"
//                             value={this.state.location}
//                             onChange={this.handleChange}
//                         />
//                     </div>
//                     <div>
//                         <button type="submit">Search for Location</button>
//                     </div>
//                 </form>
//                 <Route exact path='/googlemap' render={() => <h3>Please enter a place to search on Google Maps</h3>} />
//                 <body>
//                     <div id="map"></div>
//                     <script>
//                         var map;
//                         function initMap() {
//                             map = new google.maps.Map(document.getElementById('map'), {
//                                 center: { lat: -34.397, lng: 150.644 },
//                                 zoom: 8
//                             })
//                         }
//                     </script>
//                     <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_zE_Tx0kY13yr58PRNduk5TjRDC0RttA&callback=initMap" async defer></script>
//                 </body>
//             </div>

            
//         )
//     }
// }

// export default GoogleMap

// export class Container extends React.Component {
//   render() {
//     if (!this.props.loaded) {
//       return <div>Loading...</div>
//     }
//     return (
//       <Map google={this.props.google} />
//     )
//   }
// }

// export default GoogleApiComponent({
//   apiKey: AIzaSyC_zE_Tx0kY13yr58PRNduk5TjRDC0RttA
// })(Container)