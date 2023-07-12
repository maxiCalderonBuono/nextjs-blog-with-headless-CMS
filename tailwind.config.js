const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        pattern: 'radial-gradient(#444cf7 2px, #e5e5f7 2px) 0%, #272A37 40.0%) bg-[length:40px_40px]',
      },
      colors: {
        whatsapp: "#28D146",
        twitter: "#1DA1F2",
        facebook: "#4267B2"
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme("colors.indigo.400"),

              fontWeight: "600",
              textDecoration: "none",
              "&:hover": {
                color: theme("colors.indigo.500"),
              },
            },

            h1: {
              marginTop: "0.5rem",
              scrollMargin: "5rem",
              fontWeight: "700",

              fontSize: "2.25rem",
              lineHeight: "2.5rem",
              letterSpacing: "-0.025rem",
            },
            h2: {
              marginTop: "2.5rem",
              scrollMargin: "5rem",
              paddingBottom: "0.25rem",
              borderBottom: "1px solid",
              fontWeight: "600",
              fontSize: "1.875rem",
              lineHeight: "2.25rem",

              letterSpacing: "-0.025rem",
              "&:firstChild": {
                marginTop: "0px",
              },
            },
            h3: {
              marginTop: "2rem",
              scrollMargin: "5rem",
              fontWeight: "600",
              fontSize: "1.5rem",

              lineHeight: "2rem",
              letterSpacing: "-0.025rem",
            },
            h4: {
              marginTop: "2rem",
              scrollMargin: "5rem",
              fontWeight: "600",

              fontSize: "1.25rem",
              lineHeight: "1.75rem",
              letterSpacing: "-0.025rem",
            },
            h5: {
              marginTop: "2rem",
              scrollMargin: "5rem",
              fontWeight: "600",

              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              letterSpacing: "-0.025rem",
            },
            h6: {
              marginTop: "2rem",
              scrollMargin: "5rem",
              fontWeight: "600",
              fontSize: "1rem",

              lineHeight: "1.5rem",
              letterSpacing: "-0.025rem",
            },
            "p a": {
              display: "inline",
            },
            p: {
              lineHeight: "1.75rem",
              "&:not(firstChild)": {
                marginTop: "1.5rem",
              },
              color: theme("colors.gray.900"),
            },

            blockQuote: {
              margintTop: "1.5rem",
              borderLeft: "3px solid",
              borderColor: theme("colors.gray.500"),
              paddingLeft: "1.5rem",
              fontStyle: "italic",
              color: theme("colors.gray.500"),
              opacity: "90%",
            },
            ul: {
              marginTop: "1.5rem",
              margingLeft: "1.5rem",
              marginBottom: "1.5rem",
              listStyleType: "disc",
            },
            ol: {
              marginTop: "1.5rem",
              margingLeft: "1.5rem",
              marginBottom: "1.5rem",
              listStyleType: "decimal",
            },
            li: {
              marginTop: "0.5rem",
            },
            pre: {
              margin: "1.5rem 0 1rem 0",
              borderRadius: "0.5rem",
              border: "1px solid",
              backgroundColor: theme("colors.black"),
              overflowX: "auto",
              padding: "1rem 0",
            },
            code: {
              position: "relative",
              borderRadius: "0.25",
              border: "1px solid",
              fontFamily: "ui-monospace",
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              padding: "0.2rem 0.3rem",
            },
            hr: {
              margin: "1rem 0",
            },
            figCaption: {
               color: theme("colors.indigo.400"),
               textAlign: "center",
            },
            img: {
              borderRadius: "0.375rem",
              border: "1px solid",
              marginBottom: "0 !important"
            },
            table: {
              width: "100%",
              overflowY: "auto",
              margin: "1.5rem 0",
            },
            tr: {
              margin: "0",
              padding: "0",
              borderTop: "1px solid",
              "&:nth-child(even)": {
                backgroundColor: theme("colors.slate-300"),
              },
            },
            th: {
              border: "1px solid",
              padding: "0.5rem 1rem",
              textAlign: "legt",
              fontWeight: "700",
            },
            td: {
              border: "1px solid",
              padding: "0.5rem 1rem",
              textAlign: "legt",
            },
          },
        },
      }),
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-heading)", ...fontFamily.sans],
      },
      animation: {
        toggle: "toggle 3s ease-in-out",
      },
      keyframes: {
        toggle: {
          "0%": { transform: "rotate(0deg)", opacity: "100%" },
          "100%": { transform: "rotate(100deg)", opacity: "0%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography", '@tailwindcss/aspect-ratio')],
};
