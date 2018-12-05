
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
        {
          city: "Stirling",
          country: "Scotland", 
          image: "https://images.unsplash.com/photo-1512837529470-7f78f23778ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b560297989250e8677d7de4c3ab7a634&auto=format&fit=crop&w=1050&q=80", 
      }, {
          city: "Paris", 
          country: "France", 
          image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e7af86beb07b95aa8319fa882e4724e3&auto=format&fit=crop&w=500&q=60",
      }, {
          city: "Dublin", 
          country: "Ireland",
          image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a7b51ec7a8c964cc48efe7dcda76543d&auto=format&fit=crop&w=800&q=60",
      }, {
          city: "Machu Picchu", 
          country: "Peru",
          image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=09e84a8678969252065234ad94977ebe&auto=format&fit=crop&w=1050&q=80",
      }, {
          city: "Cape Town", 
          country: "South Africa",
          image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fad006e6a7e0bbbf41a8521f3d190b7e&auto=format&fit=crop&w=966&q=80",
      }
      ]);
    });
};
