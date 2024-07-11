/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['index.html'],
    theme: {
        extend: {
            fontFamily: {
                'poppins' : ['poppins']

            },
            colors: {
                darker: '#212336',
                dark: '#23263A',
                white: '#E4E4E4',
                reds: '#FF4A57',
                grey: '#4D4F59',
                blue: '#0F172A',
                gelap: '#161C2D',
                dd: '#1A2234',
            },
        },
    },
    plugins: [],
};
