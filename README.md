
Dashtar Admin Documentation


Introduction:

This is a e-commerce admin template built with React.js and Tailwindcss with rest api. This is admin template backend is ready and 
that is built with node, express, mongoose schema validation and use mongodb for  database.





Tech and Packages we use in this project:

    1. React.Js and React-Router-Dom.
    2. Tailwindcss for all css design.
    3. Axios for data fetching.
    4. Chart.js with React-chart.js-2 for all chart.
    5. React-dropzone for image upload.
    6. React Icons for all Icons.
    7. React Hook form for all Form validation.
    8. React Toastify for notification.
    9. React Spinners for preloader.
    10. React tooltip for Tooltip.
    11. React Custom scrollbar for custom scrollbar.
    12. Day.js for date validation and data format.
    13. Rc Drawer for all Drawer.
    14. Js Cookie for save require data on Cookie.
    15. React Tag input for Input Tag.
    16. Use Windmill React Ui for some built in tailwindcss component like Button, Table, Badge, Card, Form, Pagination, Dropdown,  Modal and Dark Theme.





Getting Started & Installation:

For getting started with the template you have to follow the below procedure. First navigate to the Dashtar-admin directory.

Step 1 : Configure your env.local file:

Within the project directory you'll find a .env.example file just rename it as .env.local and paste your api url in REACT_APP_API_BASE_URL=your-api-url.

Step 2 : Running the project:

⦁	First npm install for install all packages latest version.
⦁	then npm start for running in development mode

If you want to test your production build in local environment then run the below commands.
⦁	npm build then npm start





Folder Structure & Customization:

⦁   To customize tailwindcss configuration go to -> tailwind.config.js file .

⦁   /public: To change your project title, favicon go to public folder index.html file.

⦁   /src/assets: This folder contain tailwind post css and custom css(you can write custom css in in file) also img folder for all using image  
    and myTheme for all windmill tailwindcss component design.

⦁   /src/components: This folder contain all the template related ui components .

⦁   /src/layout: This folder contain layout section for all pages and related components.

⦁   /src/contexts: This folder contain all necessary context for this template . Like Mobile-Sidebar, Dark Theme and User-Login.

⦁   /src/hooks: This folder contain all custom hooks for data fetching, data filtering, drawer toggling, and all product, category, coupon and    
    staff submit and edit functionality.

⦁   /src/pages: Here you find all pages that we use in this project.

⦁   /src/route: This Folder contain all route in index file and sidebar for all sidebar navigation route.

⦁   /src/services: This folder contain all data fetching function with Axios interface. AdminServices for all admin related data fetching 
    functionality, CategoryService for category related, CouponServices for coupon related, OrderServices for order related, ProductServices for product related, UserServices for all customers related and httpService is for Common api endpoint with Axios interface.

⦁   /src/utils : This folder contain chartData, and  toast function for notification.








Configuration & Deployment:

We use Vercel for Development if you use Vercel for development then just follow the Vercel Documentation, You can also deploy this any other hosting services if you want.
