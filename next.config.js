const withImages = require('next-images');

const redirects = {
    async redirects() {
        return [
            {
                source: '/feature-v1',
                destination: '/feature-v1/crud-posts',
                permanent: true
            }
        ];
    }
};

module.exports = withImages(redirects);
