/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: false,
  eslint: { ignoreDuringBuilds: true },
  eslint: { ignoreDuringExport: true },
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ]
  },
  
}