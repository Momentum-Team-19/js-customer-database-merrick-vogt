const directoryDiv = document.querySelector('.directory');

// function to capitilize the first letter in a name
function capitilizeName(name) {
    return name.charAt(0).toUpperCase()+name.slice(1);
}

// collecting all names in an array using for of loop
let names = [];
for (let member of customers) {
    const firstName = capitilizeName(member.name.first)
    const lastName = capitilizeName(member.name.last)
    names.push(firstName + " " + lastName)
}
console.log(names)

// function for abbreviating state
function stateAbbrev(longState, statesArray) {
    console.log(longState)
    longState = longState.toUpperCase();
    console.log(longState)
    // usStates =
    // name: 'STATE' abbreviation: 'ST'

    let stateShort =""
    for (let stateObject of statesArray) {
        if (longState === stateObject.name) {
            stateShort =  stateObject.abbreviation
            break;
        }
    }
    console.log(stateShort)
    return stateShort
}

// collecting the date from date and time format
function dateFromDateAndTime(dateAndTime) {
    const index = dateAndTime.indexOf('T');
    return dateAndTime.substring(0, index);
}

function ISO_to_LongDate(ISO_Date) {
    const parts = ISO_Date.split('-');
    // console.log(parts)
    day = parts[2]
    if (day.charAt(0) === '0') {
        day = day.slice(1);
    }

    month = parts[1]
    year = parts[0]

    const abbrMonths = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec'
      };
      
      
    wordMonth = abbrMonths[month];
    return wordMonth + " " + day + ", " + year
}

customers.forEach((customer, index) => {
    const newCustomer = document.createElement('div');
    newCustomer.classList.add('customer');

    // creates a new element of img for the updated names. Appends to newCustomer
    const imgElement = document.createElement('img');
    imgElement.src = customer.picture.large;
    newCustomer.appendChild(imgElement)

    // creates a new element of h3 for the updated names. Appends to newCustomer
    const nameElement = document.createElement('h3');
    nameElement.textContent = names[index];
    newCustomer.appendChild(nameElement)

    // creates a new element of p for the email. Appends to newCustomer
    const emailElement = document.createElement('p');
    emailElement.classList.add('email');
    emailElement.textContent = customer.email;
    newCustomer.appendChild(emailElement);

    // creates a new element of p for the address. Appends to newCustomer
    const addressElement = document.createElement('p');
    addressElement.classList.add('address');
    addressElement.textContent = customer.location.street.number + " " + 
    customer.location.street.name + " " + customer.location.city + ", " + 
    stateAbbrev(customer.location.state, usStates) + " " + customer.location.postcode;
    newCustomer.appendChild(addressElement);

    // creates a new element of p for the DOB. Appends to newCustomer
    const dobElement = document.createElement('p');
    dobElement.classList.add('dob');
    dobElement.textContent = "DOB: " + ISO_to_LongDate(dateFromDateAndTime(customer.dob.date))
    newCustomer.appendChild(dobElement);

    // creates a new element of p for the Customer Since. Appends to newCustomer
    const custSinceElement = document.createElement('p');
    custSinceElement.classList.add('custSince');
    custSinceElement.textContent = "Customer since: " + 
    ISO_to_LongDate(dateFromDateAndTime(customer.registered.date))
    newCustomer.appendChild(custSinceElement);

    directoryDiv.appendChild(newCustomer);
    
});

// Another option would be to create a function for building a customer profile
// Then loops through the customers and creating a customer profile for each

// for (let name of names) {
//     // Create a new customer div for each name
//     const newCustomer = document.createElement('div');
//     // add the customer class to the newCustomers div
//     newCustomer.classList.add('customer');
//     // Use the updates names array to input each customer name
//     newCustomer.textContent = name;
//     // Append the new customer div inside the 'directory' class div
//     directoryDiv.appendChild(newCustomer);
// }

