# README: Product Page

## Project Overview
This project is a responsive product page for the **Vortex Company**, built using **Tailwind CSS**. The page showcases a **Blow Molding Machine**, including its image, description, product specifications, technical details, and interactive buttons for customizing or requesting a quote.

---

## File Structure
- **index.html**: The main HTML file containing the structure and content of the product page.
- **src/output.css**: The Tailwind CSS output file for custom styling (optional if additional customization is added).
- **assets/**: Contains the product image (`image.png`) and other media resources.

---

## Key Features
1. **Responsive Design**
   - The layout adapts seamlessly to various screen sizes using Tailwind CSS breakpoints (`sm:`, `md:`, `lg:`).
   - Grid and Flexbox are utilized to create flexible and responsive layouts.

2. **Typography**
   - Fonts: Uses Google Fonts (`Questrial`, `Georgia`).
   - Styling: Tailwind utility classes like `text-5xl`, `font-bold`, `leading-relaxed` for clear, visually appealing text.

3. **Interactive Elements**
   - Dropdown menus for selecting product specifications (e.g., cavity, BPH, tech base).
   - Buttons for customizing products or requesting quotes with hover effects.

4. **Technical Details Section**
   - Displayed in a responsive grid layout with details like machine dimensions, power requirements, warranty, and certifications.

---

## Technologies Used
- **HTML5**: For the page structure.
- **Tailwind CSS**: For styling and responsiveness.
- **Google Fonts**: For typography.

---

## Code Highlights

### Utility Classes
- **Layout**: `flex`, `grid`, `gap-6`, `mx-auto`, `p-6`, `md:flex-row`
- **Typography**: `text-gray-800`, `font-bold`, `leading-relaxed`, `text-5xl`
- **Colors**: `bg-white`, `hover:bg-blue-600`
- **Borders**: `border-gray-300`, `rounded-md`

### Responsive Design
- Breakpoints:
  - `sm:grid-cols-2`: Two-column grid for small screens.
  - `md:flex-row`: Row layout for medium screens.
  - `lg:grid-cols-3`: Three-column grid for large screens.

---

## How to Run the Project
1. Clone the repository.
2. Open `index.html` in any modern web browser.
3. Ensure internet access to load Tailwind CSS via CDN and Google Fonts.
4. (Optional) Compile custom CSS using Tailwind if needed:
   ```bash
   npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
   ```

---

## Notes for Developers
1. **Tailwind CSS Integration**:
   - The project uses a CDN for Tailwind CSS. If a local Tailwind setup is preferred, install and configure Tailwind in the project.

2. **Customization**:
   - Fonts and colors can be adjusted in the Tailwind configuration file (`tailwind.config.js`) if using a local build.

3. **Extensibility**:
   - Add more product cards or sections by reusing existing utility classes for consistent styling.

---

## Notes for Delivery
1. The product page is designed for production but can be extended with:
   - Backend integration for dynamic data (e.g., customer-specific configurations).
   - Database connectivity to store inquiries or customization requests.

2. Ensure all assets (e.g., product images, icons) are optimized for web use.
3. Validate browser compatibility (tested on modern browsers like Chrome, Firefox, and Edge).

---

## Contact
For further assistance, contact the development team or refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs).






