 const apiKey = 'zi6WO9DWpOwxVSIlzvzLAgeAtD3Zp_8U9d5x73kCvNL33Be3VW773E26yz_kPaHJiGF0VD0k1s8h2WVeMhif1xvc_gTe-aVY0vyzw5mqbzgKmgCi6wpsNnqKW6cNY3Yx';
//store the functionality needed to interact with the Yelp API.
export const Yelp = {
  //this method to retrieve search results from the Yelp API.
  search(term, location, sortBy) {
    ///businesses endpoint of the Yelp API
    //https://cors-anywhere.herokuapp.com/
    return fetch(
      ` https://revenous-app-react.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
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


