# PokeDex: Pokémon Full-Stack Challenge

## Project Overview

Welcome to QuickPokeDex, a comprehensive Pokémon information application developed as part of a full-stack challenge. This project encompasses five essential steps, all of which have been successfully completed. Additionally, a range of extra features has been seamlessly integrated to enhance the user experience.

## Additional Features

1. **Enhanced Query Capability**: The application empowers users to retrieve the total count of existing Pokémon. By utilizing the `total` query parameter in the API GET request, users can gain insight into the extensive world of Pokémon. An illustrative example of setting the `total` to `200` is provided, with the actual count of Pokémon in existence being 905.

## Key Considerations

1. **Advanced API Error Handling**: The project boasts a robust API error handling mechanism. Comprehensive error messages have been thoughtfully integrated and are presented to users through user-friendly toast notifications within the application.
2. **Inclusion of Pokémon Moves**: QuickPokeDex now offers an engaging feature that showcases Pokémon moves. These moves are elegantly presented in a modal window, enriching the user's understanding of each Pokémon's capabilities.

### Step 1: Middleware and Data Refinement

- A middleware function has been expertly introduced within `/pages/api.js`. This function facilitates the retrieval of the initial 151 Pokémon from the authoritative source, https://pokeapi.co/.
- To streamline data presentation, the middleware function selectively retains essential attributes such as 'name', 'id', 'stats', and 'types' for each Pokémon. Extraneous data fields have been purposefully excluded, resulting in a refined dataset that is served to the application.

### Step 2: Captivating Front-End Interface

- The application's front-end interface has been meticulously designed to showcase the complete collection of Pokémon in an aesthetically pleasing manner. The curated dataset from the API function allows for diverse layout arrangements, enabling a tailored user experience.
- Notably, the API lacks image information for each Pokémon. To address this, QuickPokeDex cleverly sources relevant images from the `/public/sprites` directory, ensuring visual representation for every Pokémon.

### Step 3: Interactive Pokémon Display

- User interaction has been elevated through the incorporation of dynamic features. Clicking on a Pokémon triggers the display of comprehensive information related to the selected Pokémon. This interactive feature can be presented using modal dialogs, tabs, or other user-friendly methods.

### Step 4: Swift Search Functionality

- The application's functionality has been enhanced with a swift and intuitive search mechanism. Users can effortlessly locate specific Pokémon by entering the desired name into the designated search box. This feature significantly enhances user efficiency and ease of navigation.

### Step 5: Expanded Search and Sorting

- QuickPokeDex takes the search paradigm to the next level with advanced filtering and sorting options:
  - Users can seamlessly filter Pokémon by type, including categories such as `fire`, `water`, and `grass`, among others.
  - Users are empowered to sort Pokémon based on attributes like `attack`, `defense`, and more. This comprehensive sorting functionality offers users greater exploration opportunities.

## Project Name: PokeDex

Explore the Pokémon world with excellence through QuickPokeDex, where detailed information about these captivating creatures is just a click away.

## How To Run This Project

-Installation of Node Modules-
npm install 
-Updating Browser to Latest- 
npx update-browserslist-db@latest
-To Start The Project- 
npm run dev