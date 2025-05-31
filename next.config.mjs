/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        domains : ['tailwindui.com',''],
        dangerouslyAllowSVG:true,
        remotePatterns:[
            {
                protocol:'https',
                hostname:'images.pexels.com',
                port:'',
                pathname:'/**'
            }
        ]
    }
};

export default nextConfig;
