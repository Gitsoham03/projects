
---

# Product Page README

## Overview
This is a product page built using **Tailwind CSS** for a **Blow Moulding Machine**. It includes key sections such as product details, specifications, call-to-action (CTA) buttons, and a contact button. The page is responsive and adapts to different screen sizes, from mobile devices to desktops.

---

## Structure

### 1. **Product Name Section**
- Displays the name of the product, **"Blow Moulding Machine"**.
- Located at the top of the page with a large, centered heading.

### 2. **Product Image and Description Section**
- **Product Image**: Displays an image of the product.
  - To change the image, replace the source link in the `<img>` tag:  
    ```html
    <img src="assets/image.png" alt="Product Image" class="w-full h-auto" />
    ```
    Replace `assets/image.png` with the path to your new image.
  
- **Product Description**: A brief text description of the blow molding machine.
  - To edit, simply modify the content inside the `<p>` tag in this section.

### 3. **Product Specifications Section**
- Includes dropdowns for **Cavity**, **BPH (Bottles Per Hour)**, and **Tech Base** options.
  - Each dropdown has predefined values (e.g., 2, 4, 6, 8 for Cavity).
  - To change or add options, simply edit the `<option>` tags within each `<select>` element.

### 4. **CTA (Call-to-Action) Buttons**
- Buttons for **"Customize Product"** and **"Request Quote"**.
  - You can modify the button text inside the `<button>` tags.
  - To add a link, use the `href` attribute in the `<a>` tag (optional).
  
    Example:
    ```html
    <button class="px-4 mx-4 mb-4 sm:m-auto py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
      <a href="https://www.example.com/customize" target="_blank">CUSTOMIZE PRODUCT</a>
    </button>
    ```

### 5. **Technical Specifications**
- Displays key machine details such as **Dimensions**, **Power Requirements**, **Warranty**, etc.
  - Each specification is inside a `<div>` element. To update or add new specs, modify the content inside each `<p>` tag.
  
    Example:
    ```html
    <div class="py-4 sm:px-4">
        <h4 class="font-medium text-gray-800">Machine Dimension</h4>
        <p class="text-gray-600">2000mm x 1500mm x 1200mm</p>
    </div>
    ```

### 6. **Contact Us Button**
- A button at the bottom to **Contact Us**.
  - You can modify the button's text and link in the same way as the CTA buttons.

---

## How to Make Changes

1. **Change Text**:
   - Any text content can be changed directly in the HTML file. Look for the content inside the `<h1>`, `<h2>`, `<p>`, and `<button>` tags, and modify as needed.

2. **Update Images**:
   - To change the product image, simply replace the file at `assets/image.png` with a new image.
   - Ensure the image is saved in the same directory or update the image path accordingly.

3. **Update or Add Product Specifications**:
   - Modify the text within the `<p>` tags under the **Technical Specifications** section.
   - If adding new specs, follow the format of existing `<div>` blocks and add new `<div>` tags with the appropriate text.

4. **Modify Buttons**:
   - The CTA buttons and the **Contact Us** button can have their text changed directly in the HTML. If you need to link them to specific pages, use the `<a href="URL">` tag around the button content.

---

## Customization Instructions

1. **Fonts**:
   - The page uses custom fonts from Google Fonts (`Montserrat`, `Questrial`, and `Roboto`).
   - To change the font, update the `@import` URL in the `<style>` tag.

2. **Colors**:
   - The page uses Tailwind's default colors, but you can modify the background, text, and button colors by changing the class names like `bg-blue-500`, `text-gray-600`, etc.
   - You can refer to the [Tailwind CSS Color Documentation](https://tailwindcss.com/docs/customizing-colors) for color customizations.

3. **Tailwind CSS Configuration**:
   - If you need to make advanced changes to the design, open the **Tailwind CSS config** file and adjust the design system (colors, spacing, etc.). This is useful for maintaining a consistent design.

---

## Summary
This product page is designed for flexibility, allowing you to modify text, images, and specifications with ease. If any additional customizations are needed (e.g., changing layouts or adding new features), it would require some knowledge of HTML and Tailwind CSS. However, basic content updates should be straightforward.

---

