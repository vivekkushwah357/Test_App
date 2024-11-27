import { Dimensions } from "react-native"

export const shadowStyle: any = {
    shadowOffset: { width: 0, height: 10 },
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4
}

export const height= Dimensions.get('screen').height

export const width = Dimensions.get('screen').width

// Function to format the date and time
 export function formatStartTime(dateString) {
   // Create a new Date object from the input date string
   const date = new Date(dateString);

   // Array of month names
   const monthNames = [
     'January',
     'February',
     'March',
     'April',
     'May',
     'June',
     'July',
     'August',
     'September',
     'October',
     'November',
     'December',
   ];

   // Get the day, month name, and year
   const day = date.getDate();
   const month = monthNames[date.getMonth()];

   // Options for formatting the time
   const options = {
     hour: '2-digit',
     minute: '2-digit',
     hour12: true,
     timeZone: 'Asia/Kolkata', // IST time zone
   };

   // Format the time using toLocaleTimeString
   const timeString = date.toLocaleTimeString('en-US', options);

   // Return the formatted date and time string
   return `${day} ${month} | ${timeString} (IST)`;
 }
