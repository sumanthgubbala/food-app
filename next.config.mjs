/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        domains : ['tailwindui.com',''],
        dangerouslyAllowSVG:true,
        remotePatterns:[
            {
                protocol:'http',
                hostname:'',
                port:'',
                pathname:'/**'
            }
        ]
    }
};

export default nextConfig;
