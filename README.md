# Tailwind Landing Page - Optimetrics
This repository contains the source code for the "Optimetrics" landing page, a responsive single-page website built with Tailwind CSS.

## Project Overview

This project serves as a practical example of using Tailwind CSS to build a modern, responsive landing page. It includes custom theme configurations for breakpoints and fonts.

## Features

*   **Responsive Design**: The layout is optimized for various screen sizes using custom breakpoints.
*   **Tailwind CSS v3**: Utilizes the latest features of the Tailwind CSS framework.
*   **Custom Font**: Integrates the 'Open Sans' font family for a clean and professional look.

## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

You need to have Node.js and npm (or a compatible package manager) installed on your system.

### Installation

1.  Clone the repository to your local machine:
    ```sh
    git clone https://github.com/javalentino/tailwind-landing-page-optimetrics.git
    ```

2.  Navigate into the project directory:
    ```sh
    cd tailwind-landing-page-optimetrics
    ```

3.  Install the necessary development dependencies:
    ```sh
    npm install
    ```

## Development Workflow

To compile the Tailwind CSS and watch for changes during development, run the build script:

```sh
npm run build
```

This command will:
*   Watch for any modifications in `src/input.css`.
*   Automatically compile the CSS into the `dist/style.css` file.
*   Ensure your HTML file (`dist/index.html`) is linked to `dist/style.css` to see the changes.

## Configuration

The Tailwind CSS configuration is defined in the `tailwind.config.js` file. Key customizations include:

*   **Content Path**: The `content` array is configured to scan for class names in all HTML and JavaScript files within the `./dist/` directory.
*   **Custom Screen Sizes**: The default responsive breakpoints have been overridden to suit the project's design needs:
    *   `sm`: `480px`
    *   `md`: `768px`
    *   `lg`: `1200px`
    *   `xl`: `1440px`
*   **Extended Font Family**: The `Open Sans` font has been added to the theme's font family under the `opensans` key.
