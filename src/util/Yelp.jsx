const apiKey = 'HNDfdTvQWEN2Xhc-71vdcXv6X5NjJ2-ZzCPbVMlRg7jpk7XmtFMebUo7x67mC4ZTk9RBXYJSY4VhgdzQXnuWhdsnkHThHEiaK6mk4jXyYV5FmugxIhz_6tXyM-XbYnYx';


//store the functionality needed to interact with the Yelp API.
export const Yelp = {

  //this method to retrieve search results from the Yelp API.
  search(term, location, sortBy) {
    ///businesses endpoint of the Yelp API
    //https://cors-anywhere.herokuapp.com/
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }// identification for the browser.
      })
      .then((response) => {
        return response.json()
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            console.log(business)
            //Accessing the JSON Response
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zipCode,
              phone: business.phone,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              price: business.price
            }
          })
        }
      })
  }
}


